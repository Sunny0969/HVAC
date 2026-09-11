import express from 'express';
const router = express.Router();
router.use(requireAuth);
import Listing from '../models/Listing.js';
import { requireAuth } from '../middleware/auth.js';

// GET all listings (Admin)
router.get('/', async (req, res) => {
  try {
    const { status, q } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { location: { $regex: q, $options: 'i' } }
      ];
    }
    const listings = await Listing.find(filter).sort({ createdAt: -1 });
    res.json({ listings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single listing
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Not found' });
    res.json({ listing });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE
router.post('/', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json({ listing });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad request' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!listing) return res.status(404).json({ error: 'Not found' });
    res.json({ listing });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad request' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

