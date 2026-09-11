import { Router } from 'express';
import { Blog } from '../models/Blog.js';
import { Category } from '../models/Category.js';
import { Comment } from '../models/Comment.js';
import { Lead } from '../models/Lead.js';

const router = Router();

const SITE_ORIGIN = () =>
  (process.env.SITE_ORIGIN || 'https://www.hvacexitadvisors.com').replace(/\/$/, '');

function sanitizeCommentName(raw) {
  return String(raw || '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 80);
}

function sanitizeCommentBody(raw) {
  return String(raw || '')
    .trim()
    .replace(/\r\n/g, '\n')
    .slice(0, 2000);
}

function clip(raw, max) {
  return String(raw || '')
    .trim()
    .slice(0, max);
}

/**
 * Public endpoints — no auth.
 * Used by frontend build scripts (generate-sitemap, generate-blog-index)
 * and runtime blog pages.
 */

/** GET /api/public/blogs — published only (listing cards) */
router.get('/blogs', async (req, res, next) => {
  try {
    const blogs = await Blog.find({ status: 'published' })
      .populate('category', 'name slug')
      .sort({ publishedAt: -1, createdAt: -1 });

    return res.json({
      blogs: blogs.map((b) => b.toFrontendCard()),
      count: blogs.length,
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/public/blogs/slugs — for TipTap internal-link picker */
router.get('/blogs/slugs', async (_req, res, next) => {
  try {
    const blogs = await Blog.find({ status: 'published' })
      .select('slug title')
      .sort({ title: 1 })
      .lean();

    return res.json({
      slugs: blogs.map((b) => ({
        slug: b.slug,
        title: b.title,
        path: `/blog/${b.slug}`,
        url: `${SITE_ORIGIN()}/blog/${b.slug}`,
      })),
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/public/blogs/:slug/comments — public comments for a blog */
router.get('/blogs/:slug/comments', async (req, res, next) => {
  try {
    const slug = String(req.params.slug || '')
      .trim()
      .toLowerCase();
    if (!slug) return res.status(400).json({ error: 'Slug is required' });

    const comments = await Comment.find({ blogSlug: slug }).sort({ createdAt: -1 }).limit(200);

    return res.json({
      comments: comments.map((c) => c.toPublic()),
      count: comments.length,
    });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/public/blogs/:slug/comments — anonymous comment (no login) */
router.post('/blogs/:slug/comments', async (req, res, next) => {
  try {
    const slug = String(req.params.slug || '')
      .trim()
      .toLowerCase();
    if (!slug) return res.status(400).json({ error: 'Slug is required' });

    if (String(req.body?.website || '').trim()) {
      return res.status(201).json({
        comment: {
          id: 'ok',
          authorName: 'Guest',
          body: '',
          createdAt: new Date().toISOString(),
        },
      });
    }

    const authorName = sanitizeCommentName(req.body?.authorName ?? req.body?.name);
    const body = sanitizeCommentBody(req.body?.body ?? req.body?.comment);

    if (authorName.length < 2) {
      return res.status(400).json({ error: 'Please enter your name (at least 2 characters)' });
    }
    if (body.length < 3) {
      return res.status(400).json({ error: 'Please write a comment (at least 3 characters)' });
    }

    const blog = await Blog.findOne({ slug }).select('_id title slug status');
    const blogTitle =
      blog?.title ||
      String(req.body?.blogTitle || '')
        .trim()
        .slice(0, 200);

    const comment = await Comment.create({
      blog: blog?._id || null,
      blogSlug: slug,
      blogTitle,
      authorName,
      body,
    });

    return res.status(201).json({ comment: comment.toPublic() });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/public/leads — contact / quote forms (dual-write alongside Formspree). */
router.post('/leads', async (req, res, next) => {
  try {
    if (String(req.body?.website || '').trim()) {
      return res.status(201).json({ ok: true, id: 'ok' });
    }

    const source = clip(req.body?.source || 'contact', 80) || 'contact';
    const pagePath = clip(req.body?.pagePath || req.body?.location || '', 300);
    const location = clip(req.body?.location || pagePath, 300);
    const name = clip(req.body?.name || req.body?.firstName || '', 120);
    const email = clip(req.body?.email || '', 200).toLowerCase();
    const phone = clip(req.body?.phone || '', 60);
    const company = clip(req.body?.company || req.body?.companyName || '', 160);
    const message = clip(req.body?.message || req.body?.Notes || req.body?.requirements || '', 5000);

    if (!name && !email && !phone && !message) {
      return res.status(400).json({ error: 'Empty lead' });
    }

    const lead = await Lead.create({
      type: 'form',
      source,
      status: 'new',
      name,
      email,
      phone,
      company,
      location,
      message,
      pagePath,
      pageUrl: clip(req.body?.pageUrl || '', 500),
      placement: clip(req.body?.placement || '', 80),
      extra: typeof req.body?.extra === 'object' && req.body.extra ? req.body.extra : {},
    });

    return res.status(201).json({ ok: true, id: lead._id.toString() });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/public/whatsapp-clicks — track WhatsApp button clicks for admin inbox. */
router.post('/whatsapp-clicks', async (req, res, next) => {
  try {
    if (String(req.body?.website || '').trim()) {
      return res.status(201).json({ ok: true, id: 'ok' });
    }

    const pagePath = clip(req.body?.pagePath || '', 300);
    const placement = clip(req.body?.placement || 'whatsapp', 80) || 'whatsapp';
    const location = clip(req.body?.location || pagePath || placement, 300);

    const lead = await Lead.create({
      type: 'whatsapp',
      source: clip(req.body?.source || `whatsapp-${placement}`, 80) || 'whatsapp',
      status: 'new',
      name: '',
      email: '',
      phone: '',
      company: '',
      location,
      message: 'WhatsApp click',
      pagePath,
      pageUrl: clip(req.body?.pageUrl || '', 500),
      placement,
      extra: typeof req.body?.extra === 'object' && req.body.extra ? req.body.extra : {},
    });

    return res.status(201).json({ ok: true, id: lead._id.toString() });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/public/blogs/:slug — full published post */
router.get('/blogs/:slug', async (req, res, next) => {
  try {
    const blog = await Blog.findOne({
      slug: String(req.params.slug).toLowerCase(),
      status: 'published',
    }).populate('category', 'name slug');

    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    return res.json({ blog: blog.toFrontendPost() });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/public/categories */
router.get('/categories', async (_req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: 1 }).lean();
    return res.json({ categories });
  } catch (err) {
    return next(err);
  }
});

export default router;
