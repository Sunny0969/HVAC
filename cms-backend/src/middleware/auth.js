import jwt from 'jsonwebtoken';
import { AdminUser } from '../models/AdminUser.js';

export function signToken(payload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not set');

  return jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/** Optional: ensure admin still exists and is active. */
export async function requireActiveAdmin(req, res, next) {
  try {
    if (!req.admin?.id) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const admin = await AdminUser.findById(req.admin.id).select('_id email isActive');
    if (!admin || !admin.isActive) {
      return res.status(401).json({ error: 'Admin account inactive or missing' });
    }

    req.adminUser = admin;
    return next();
  } catch (err) {
    return next(err);
  }
}
