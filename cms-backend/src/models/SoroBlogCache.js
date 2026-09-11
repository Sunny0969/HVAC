import mongoose from 'mongoose';

/**
 * Tracks which Soro blog slugs have already been detected and pinged via IndexNow.
 * Used by soroPoller.js to avoid duplicate pings on every poll cycle.
 */
const soroBlogCacheSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    /** Full blog URL that was pinged */
    url: { type: String, required: true },
    /** When IndexNow ping was sent */
    pinnedAt: { type: Date, default: Date.now },
    /** Soro article isoDate (for lastmod in dynamic sitemap) */
    isoDate: { type: String, default: '' },
    /** Soro article title */
    title: { type: String, default: '' },
    /** Soro article excerpt */
    excerpt: { type: String, default: '' },
  },
  {
    timestamps: true,
    collection: 'soro_blog_cache',
  }
);

export const SoroBlogCache = mongoose.model('SoroBlogCache', soroBlogCacheSchema);
