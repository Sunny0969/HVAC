import { Router } from 'express';
import { Comment } from '../models/Comment.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.use(requireAuth);

/** GET /api/comments — all comments (newest first), optional ?q=&blogSlug= */
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    const blogSlug = String(req.query.blogSlug || '')
      .trim()
      .toLowerCase();
    const q = String(req.query.q || '').trim();

    if (blogSlug) filter.blogSlug = blogSlug;
    if (q) {
      filter.$or = [
        { authorName: { $regex: q, $options: 'i' } },
        { body: { $regex: q, $options: 'i' } },
        { blogTitle: { $regex: q, $options: 'i' } },
        { blogSlug: { $regex: q, $options: 'i' } },
      ];
    }

    const comments = await Comment.find(filter)
      .populate('blog', 'title slug')
      .sort({ createdAt: -1 })
      .limit(500);

    return res.json({
      comments: comments.map((c) => c.toAdmin()),
      count: comments.length,
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/comments/:id */
router.get('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('blog', 'title slug');
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    return res.json({ comment: comment.toAdmin() });
  } catch (err) {
    return next(err);
  }
});

/** PUT /api/comments/:id — admin edit name/body */
router.put('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    if (req.body?.authorName != null) {
      const name = String(req.body.authorName).trim();
      if (name.length < 2 || name.length > 80) {
        return res.status(400).json({ error: 'Name must be 2–80 characters' });
      }
      comment.authorName = name;
    }

    if (req.body?.body != null) {
      const body = String(req.body.body).trim();
      if (body.length < 3 || body.length > 2000) {
        return res.status(400).json({ error: 'Comment must be 3–2000 characters' });
      }
      comment.body = body;
    }

    await comment.save();
    await comment.populate('blog', 'title slug');
    return res.json({ comment: comment.toAdmin() });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /api/comments/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    return res.json({ ok: true, id: comment._id.toString() });
  } catch (err) {
    return next(err);
  }
});

export default router;
