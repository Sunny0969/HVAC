import { Router } from 'express';
import { Category } from '../models/Category.js';
import { requireAuth } from '../middleware/auth.js';
import { toSlug } from '../utils/slug.js';

const router = Router();

router.use(requireAuth);

/** GET /api/categories */
router.get('/', async (_req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: 1 }).lean();
    return res.json({ categories });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/categories */
router.post('/', async (req, res, next) => {
  try {
    const name = String(req.body?.name || '').trim();
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const slug = req.body?.slug ? toSlug(req.body.slug) : toSlug(name);
    const category = await Category.create({
      name,
      slug,
      description: String(req.body?.description || '').trim(),
    });

    return res.status(201).json({ category });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/categories/:id */
router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    return res.json({ category });
  } catch (err) {
    return next(err);
  }
});

/** PUT /api/categories/:id */
router.put('/:id', async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    if (req.body?.name != null) category.name = String(req.body.name).trim();
    if (req.body?.slug != null) category.slug = toSlug(req.body.slug);
    if (req.body?.description != null) {
      category.description = String(req.body.description).trim();
    }

    await category.save();
    return res.json({ category });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /api/categories/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    return res.json({ ok: true, id: category._id.toString() });
  } catch (err) {
    return next(err);
  }
});

export default router;
