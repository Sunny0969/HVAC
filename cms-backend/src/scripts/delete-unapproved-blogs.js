/**
 * One-time rollback: remove unapproved migration inserts from MongoDB.
 * Keeps 24 hand-coded posts + tiktok-shop-fulfilment-uk-done-properly.
 */
import 'dotenv/config';
import { connectDb, disconnectDb } from '../config/db.js';
import { Blog } from '../models/Blog.js';

const DELETE_SLUGS = [
  'how-to-reduce-amazon-fba-storage-fees-drip-feed',
  'sfp-vs-fba-2026',
  'sfp-vs-fba-amazon-fulfilment-uk-2026',
  'fbm-fulfilment-for-fast-growing-sellers',
  'how-to-choose-fulfillment-partner',
  'best-fulfilment-company-for-shopify',
  'seller-fulfilled-prime-vs-fba',
  'best-amazon-prep-service-uk',
  'tiktok-shop-fulfilment-that-can-keep-up',
  'ecommerce-fulfilment-guide-uk',
  'how-to-prepare-amazon-inventory',
  'amazon-fba-prep-guide-uk-sellers',
  'how-to-outsource-ecommerce-fulfilment',
  'fnsku-labelling-service-uk',
  'same-day-dispatch-fulfilment-that-scales',
  'pick-and-pack-fulfilment-uk-explained',
  'multi-channel-fulfilment-uk',
  'tiktok-shop-fulfilment-uk',
  'shopify-fulfilment-company-uk',
  'amazon-fbm-fulfilment-service',
  'seller-fulfilled-prime-fulfilment-uk',
  'what-is-fba-prep',
  'amazon-fba-prep-service-fees-explained',
  'amazon-fba-prep-service-uk',
];

async function main() {
  await connectDb();

  const before = await Blog.countDocuments({ status: 'published' });
  const result = await Blog.deleteMany({ slug: { $in: DELETE_SLUGS } });

  const stillThere = [];
  for (const slug of DELETE_SLUGS) {
    if (await Blog.exists({ slug })) stillThere.push(slug);
  }

  const remaining = await Blog.find({ status: 'published' })
    .sort({ slug: 1 })
    .select('slug title')
    .lean();

  console.log(`Published before delete: ${before}`);
  console.log(`Deleted documents: ${result.deletedCount}`);

  if (stillThere.length) {
    console.error(`Still present: ${stillThere.join(', ')}`);
    process.exitCode = 1;
  } else {
    console.log('All 24 target slugs removed.');
  }

  console.log(`Published count after delete: ${remaining.length}`);
  console.log('Remaining slugs:');
  for (const b of remaining) {
    console.log(`  - ${b.slug}`);
  }

  await disconnectDb();
}

main().catch(async (err) => {
  console.error('delete-unapproved-blogs FAIL —', err.message);
  try {
    await disconnectDb();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
