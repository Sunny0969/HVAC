import { Router } from 'express';
import { Blog } from '../models/Blog.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router({ mergeParams: true });

router.use(requireAuth);

/**
 * FAQ CRUD is scoped to a blog:
 * GET/POST    /api/blogs/:blogId/faqs
 * PUT/DELETE  /api/blogs/:blogId/faqs/:faqId
 */

/** GET /api/blogs/:blogId/faqs */
router.get('/', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.blogId).select('faqs title slug');
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    return res.json({ faqs: blog.faqs, blogId: blog._id.toString() });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/blogs/:blogId/faqs */
router.post('/', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const question = String(req.body?.question || '').trim();
    const answer = String(req.body?.answer || '').trim();
    if (!question || !answer) {
      return res.status(400).json({ error: 'question and answer are required' });
    }

    blog.faqs.push({ question, answer });
    await blog.save();

    const faq = blog.faqs[blog.faqs.length - 1];
    return res.status(201).json({ faq });
  } catch (err) {
    return next(err);
  }
});

/** PUT /api/blogs/:blogId/faqs/:faqId */
router.put('/:faqId', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const faq = blog.faqs.id(req.params.faqId);
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });

    if (req.body?.question != null) faq.question = String(req.body.question).trim();
    if (req.body?.answer != null) faq.answer = String(req.body.answer).trim();

    await blog.save();
    return res.json({ faq });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /api/blogs/:blogId/faqs/:faqId */
router.delete('/:faqId', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const faq = blog.faqs.id(req.params.faqId);
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });

    faq.deleteOne();
    await blog.save();

    return res.json({ ok: true, id: req.params.faqId });
  } catch (err) {
    return next(err);
  }
});

export default router;
