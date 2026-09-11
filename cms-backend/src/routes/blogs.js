import { Router } from 'express';
import { Blog } from '../models/Blog.js';
import { requireAuth } from '../middleware/auth.js';
import { toSlug } from '../utils/slug.js';

const router = Router();

router.use(requireAuth);

function applyBlogFields(blog, body) {
  if (body.title != null) blog.title = String(body.title).trim();
  if (body.slug != null) blog.slug = toSlug(body.slug);
  if (body.excerpt != null) blog.excerpt = String(body.excerpt).trim();
  if (body.content != null) blog.content = String(body.content);
  if (body.coverImage != null) blog.coverImage = String(body.coverImage).trim();
  if (body.coverImageAlt != null) blog.coverImageAlt = String(body.coverImageAlt).trim();
  if (body.category !== undefined) {
    blog.category = body.category || null;
  }
  if (body.tags != null) {
    blog.tags = Array.isArray(body.tags)
      ? body.tags.map((t) => String(t).trim()).filter(Boolean)
      : String(body.tags)
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);
  }
  if (body.faqs != null && Array.isArray(body.faqs)) {
    blog.faqs = body.faqs.map((f) => ({
      question: String(f.question || '').trim(),
      answer: String(f.answer || '').trim(),
    }));
  }
  if (body.seo != null && typeof body.seo === 'object') {
    blog.seo = {
      metaTitle: String(body.seo.metaTitle ?? blog.seo?.metaTitle ?? '').trim(),
      metaDescription: String(
        body.seo.metaDescription ?? blog.seo?.metaDescription ?? ''
      ).trim(),
      ogImage: String(body.seo.ogImage ?? blog.seo?.ogImage ?? '').trim(),
      ogImageAlt: String(body.seo.ogImageAlt ?? blog.seo?.ogImageAlt ?? '').trim(),
      canonicalUrl: String(
        body.seo.canonicalUrl ?? blog.seo?.canonicalUrl ?? ''
      ).trim(),
      schemaType: body.seo.schemaType || blog.seo?.schemaType || 'BlogPosting',
    };
  }
  if (body.status != null) {
    blog.status = body.status === 'published' ? 'published' : 'draft';
  }
  if (body.publishedAt != null) {
    blog.publishedAt = body.publishedAt ? new Date(body.publishedAt) : null;
  }
  if (body.author != null) blog.author = String(body.author).trim();
}

/** GET /api/blogs — admin list (all statuses) */
router.get('/', async (req, res, next) => {
  try {
    const { status, q, page = '1', limit = '50' } = req.query;
    const filter = {};

    if (status === 'draft' || status === 'published') {
      filter.status = status;
    }
    if (q) {
      filter.$or = [
        { title: { $regex: String(q), $options: 'i' } },
        { slug: { $regex: String(q), $options: 'i' } },
        { excerpt: { $regex: String(q), $options: 'i' } },
      ];
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const limitNum = Math.min(100, Math.max(1, Number(limit) || 50));
    const skip = (pageNum - 1) * limitNum;

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .populate('category', 'name slug')
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limitNum),
      Blog.countDocuments(filter),
    ]);

    return res.json({
      blogs,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum) || 1,
      },
    });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/blogs */
router.post('/', async (req, res, next) => {
  try {
    const title = String(req.body?.title || '').trim();
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const blog = new Blog({ title });
    applyBlogFields(blog, req.body);
    await blog.save();
    await blog.populate('category', 'name slug');

    return res.status(201).json({ blog });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/blogs/:id */
router.get('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('category', 'name slug');
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    return res.json({ blog });
  } catch (err) {
    return next(err);
  }
});

/** PUT /api/blogs/:id */
router.put('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    applyBlogFields(blog, req.body);
    await blog.save();
    await blog.populate('category', 'name slug');

    return res.json({ blog });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /api/blogs/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    return res.json({ ok: true, id: blog._id.toString() });
  } catch (err) {
    return next(err);
  }
});

export default router;
