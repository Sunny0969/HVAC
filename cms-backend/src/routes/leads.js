import { Router } from 'express';
import { Lead, LEAD_STATUSES } from '../models/Lead.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.use(requireAuth);

function parseDateStart(raw) {
  const s = String(raw || '').trim();
  if (!s) return null;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

function parseDateEnd(raw) {
  const s = String(raw || '').trim();
  if (!s) return null;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  d.setHours(23, 59, 59, 999);
  return d;
}

/** GET /api/leads — list with filters */
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    const type = String(req.query.type || '').trim().toLowerCase();
    const status = String(req.query.status || '').trim().toLowerCase();
    const name = String(req.query.name || '').trim();
    const location = String(req.query.location || '').trim();
    const q = String(req.query.q || '').trim();
    const dateFrom = parseDateStart(req.query.dateFrom);
    const dateTo = parseDateEnd(req.query.dateTo);

    if (type === 'form' || type === 'whatsapp') filter.type = type;
    if (LEAD_STATUSES.includes(status)) filter.status = status;
    if (name) filter.name = { $regex: name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
    if (location) {
      filter.$or = [
        { location: { $regex: location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' } },
        { pagePath: { $regex: location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' } },
        { placement: { $regex: location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' } },
      ];
    }
    if (q) {
      const rx = { $regex: q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
      const textOr = [
        { name: rx },
        { email: rx },
        { phone: rx },
        { company: rx },
        { message: rx },
        { location: rx },
        { pagePath: rx },
        { source: rx },
      ];
      filter.$and = [...(filter.$and || []), { $or: textOr }];
    }
    if (dateFrom || dateTo) {
      filter.createdAt = {};
      if (dateFrom) filter.createdAt.$gte = dateFrom;
      if (dateTo) filter.createdAt.$lte = dateTo;
    }

    const leads = await Lead.find(filter).sort({ createdAt: -1 }).limit(1000);
    const [newForms, newWhatsapp, totalForms, totalWhatsapp] = await Promise.all([
      Lead.countDocuments({ type: 'form', status: 'new' }),
      Lead.countDocuments({ type: 'whatsapp', status: 'new' }),
      Lead.countDocuments({ type: 'form' }),
      Lead.countDocuments({ type: 'whatsapp' }),
    ]);

    return res.json({
      leads: leads.map((l) => l.toAdmin()),
      count: leads.length,
      stats: {
        newForms,
        newWhatsapp,
        newTotal: newForms + newWhatsapp,
        totalForms,
        totalWhatsapp,
      },
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/leads/stats — badge counts */
router.get('/stats', async (_req, res, next) => {
  try {
    const [newForms, newWhatsapp] = await Promise.all([
      Lead.countDocuments({ type: 'form', status: 'new' }),
      Lead.countDocuments({ type: 'whatsapp', status: 'new' }),
    ]);
    return res.json({
      newForms,
      newWhatsapp,
      newTotal: newForms + newWhatsapp,
    });
  } catch (err) {
    return next(err);
  }
});

/** POST /api/leads/mark-read — mark all new of a type as read */
router.post('/mark-read', async (req, res, next) => {
  try {
    const type = String(req.body?.type || '').trim().toLowerCase();
    const filter = { status: 'new' };
    if (type === 'form' || type === 'whatsapp') filter.type = type;

    const result = await Lead.updateMany(filter, { $set: { status: 'read' } });
    return res.json({ ok: true, modified: result.modifiedCount });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /api/leads/:id — update status */
router.patch('/:id', async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });

    if (req.body?.status != null) {
      const status = String(req.body.status).trim().toLowerCase();
      if (!LEAD_STATUSES.includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
      lead.status = status;
    }

    await lead.save();
    return res.json({ lead: lead.toAdmin() });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /api/leads/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    return res.json({ ok: true, id: lead._id.toString() });
  } catch (err) {
    return next(err);
  }
});

export default router;
