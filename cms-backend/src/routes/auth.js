import { Router } from 'express';
import { AdminUser } from '../models/AdminUser.js';
import { requireAuth } from '../middleware/auth.js';
import { signToken } from '../middleware/auth.js';

const router = Router();

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Uses AdminUser in DB (seeded from ADMIN_EMAIL / ADMIN_PASSWORD in .env).
 */
router.post('/login', async (req, res, next) => {
  try {
    const email = String(req.body?.email || req.body?.username || '')
      .trim()
      .toLowerCase();
    const password = String(req.body?.password || '');

    if (!email || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const admin = await AdminUser.findOne({ email }).select('+passwordHash name email role isActive');
    if (!admin || !admin.isActive) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const ok = await admin.comparePassword(password);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = signToken({
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    });

    return res.json({
      token,
      admin: {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/auth/me — current admin from JWT */
router.get('/me', requireAuth, async (req, res, next) => {
  try {
    const admin = await AdminUser.findById(req.admin.id).select('email name role isActive');
    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }
    return res.json({
      admin: {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (err) {
    return next(err);
  }
});

export default router;
