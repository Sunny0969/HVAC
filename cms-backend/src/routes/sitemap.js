/**
 * Dynamic Sitemap Route — GET /sitemap.xml
 *
 * Serves a live XML sitemap that always includes:
 *   1. All static service/marketing pages (hardcoded canonical list)
 *   2. Every Soro AI blog article (fetched live from Soro embed API)
 *   3. Every published CMS blog (fetched live from MongoDB)
 *
 * This means: when Soro publishes a new article, the sitemap reflects it
 * within the response cache window (24h) — no redeploy needed.
 *
 * Cache strategy:
 *   - In-memory cache: 4 hours (avoids hammering Soro API on every Google crawl)
 *   - HTTP Cache-Control: 12 hours for CDN/proxy layer
 *   - Google typically recrawls sitemaps every 1–7 days anyway
 *
 * Fallback: if Soro API is unreachable, serves static routes + CMS only (no error).
 */

import { Router } from 'express';
import { Blog } from '../models/Blog.js';

const router = Router();

const BASE_URL = (process.env.SITE_ORIGIN || 'https://www.hvacexitadvisors.com').replace(/\/$/, '');
const SORO_EMBED_TOKEN =
  process.env.SORO_EMBED_TOKEN || '4f25a1dd-3f45-47d4-b864-a8c38c5ebbff';
const SORO_EMBED_SRC = `https://app.trysoro.com/api/embed/${SORO_EMBED_TOKEN}`;
const SORO_ARTICLES_RE = /var SORO_ARTICLES = (\[[\s\S]*?\]);/;

// ---------------------------------------------------------------------------
// Static canonical routes — mirrors generate-sitemap.mjs CANONICAL_STATIC_ROUTES
// Keep in sync with my-app/scripts/generate-sitemap.mjs if new pages are added.
// ---------------------------------------------------------------------------
const STATIC_ROUTES = [
  { path: '/',                                   changefreq: 'weekly',  priority: 1.00 },
  { path: '/3pl-pricing-explained',              changefreq: 'weekly',  priority: 0.90 },
  { path: '/about-our-fulfillment-company',      changefreq: 'monthly', priority: 0.65 },
  { path: '/amazon-fba-prep-centre-services',    changefreq: 'weekly',  priority: 0.85 },
  { path: '/amazon-fba-prep-pricing',            changefreq: 'weekly',  priority: 0.90 },
  { path: '/amazon-fba-prep-private-label',      changefreq: 'weekly',  priority: 0.85 },
  { path: '/amazon-fba-prep-services',           changefreq: 'weekly',  priority: 0.85 },
  { path: '/amazon-fba-prep-wholesale',          changefreq: 'weekly',  priority: 0.85 },
  { path: '/amazon-fba-shipments',               changefreq: 'weekly',  priority: 0.85 },
  { path: '/b2b-fulfillment',                    changefreq: 'weekly',  priority: 0.85 },
  { path: '/beauty-cosmetics-fulfilment-uk',     changefreq: 'monthly', priority: 0.65 },
  { path: '/book-a-free-call',                   changefreq: 'monthly', priority: 0.65 },
  { path: '/case-studies',                       changefreq: 'monthly', priority: 0.65 },
  { path: '/contact-fulfillment-services',       changefreq: 'monthly', priority: 0.90 },
  { path: '/contract-packing',                   changefreq: 'monthly', priority: 0.65 },
  { path: '/ecommerce-fulfillment-services',     changefreq: 'weekly',  priority: 0.85 },
  { path: '/electronics-fulfilment-uk',          changefreq: 'monthly', priority: 0.65 },
  { path: '/fashion-apparel-fulfilment-uk',      changefreq: 'monthly', priority: 0.65 },
  { path: '/food-drink-fulfilment-uk',           changefreq: 'monthly', priority: 0.65 },
  { path: '/freight-forwarder-uk',               changefreq: 'monthly', priority: 0.65 },
  { path: '/fulfillment-blog',                   changefreq: 'weekly',  priority: 0.70 },
  { path: '/fulfillment-by-merchant-services',   changefreq: 'weekly',  priority: 0.85 },
  { path: '/fulfillment-frequently-asked-questions', changefreq: 'monthly', priority: 0.65 },
  { path: '/fulfilment-centre-milton-keynes',    changefreq: 'monthly', priority: 0.65 },
  { path: '/fulfilment-facility/amazon-fba-prep',        changefreq: 'monthly', priority: 0.60 },
  { path: '/fulfilment-facility/pick-pack-station',      changefreq: 'monthly', priority: 0.60 },
  { path: '/fulfilment-facility/polybagging-protection', changefreq: 'monthly', priority: 0.60 },
  { path: '/fulfilment-facility/quality-assurance',      changefreq: 'monthly', priority: 0.60 },
  { path: '/fulfilment-facility/wms-control-centre',     changefreq: 'monthly', priority: 0.60 },
  { path: '/health-supplements-fulfilment-uk',   changefreq: 'monthly', priority: 0.65 },
  { path: '/integrations',                       changefreq: 'monthly', priority: 0.65 },
  { path: '/logistics-services',                 changefreq: 'monthly', priority: 0.65 },
  { path: '/multi-channel-fulfillment-services', changefreq: 'weekly',  priority: 0.85 },
  { path: '/our-fulfilment-center',              changefreq: 'monthly', priority: 0.65 },
  { path: '/our-reviews',                        changefreq: 'monthly', priority: 0.65 },
  { path: '/pricing-fulfilment-services',        changefreq: 'weekly',  priority: 0.90 },
  { path: '/privacy-policy',                     changefreq: 'yearly',  priority: 0.35 },
  { path: '/return-handling-services',           changefreq: 'weekly',  priority: 0.85 },
  { path: '/seller-fulfilled-prime-services',    changefreq: 'weekly',  priority: 0.85 },
  { path: '/shopify-fulfillment-services',       changefreq: 'weekly',  priority: 0.85 },
  { path: '/tiktok-brands-fulfilment-uk',        changefreq: 'monthly', priority: 0.65 },
  { path: '/tiktok-live-sales-fulfillment',      changefreq: 'weekly',  priority: 0.85 },
  { path: '/tiktok-shop-fulfillment-services',   changefreq: 'weekly',  priority: 0.85 },
  { path: '/warehousing-services',               changefreq: 'weekly',  priority: 0.85 },
  { path: '/wms-integrations',                   changefreq: 'monthly', priority: 0.65 },
  { path: '/blog/sfp-vs-fba-2026',               changefreq: 'monthly', priority: 0.70 },
];

/** Slugs that should never appear in the sitemap (canonical duplicates / noindex). */
const EXCLUDED_BLOG_SLUGS = new Set([
  'how-to-reduce-amazon-fba-storage-fees-drip-feed',
  'fba-prep-requirements-uk',
  'fba-prep-centre-milton-keynes-amazon-prep-fulfilment-uk',
  'multi-channel-inventory-management-made-easy',
  'top-10-logistics-solutions-for-e-commerce-businesses',
  'why-uk-ecommerce-brands-cant-afford-slow-fulfilment-in-2026-pick-pack-pro',
  'the-hidden-cost-of-splitting-inventory-why-multi-channel-sellers-are-losing-money-and-dont-realise-it',
  'complete-guide-to-amazon-fba-prep-services',
  'tiktok-shop-fulfilment-uk-done-properly',
  'sfp-vs-fba-amazon-fulfilment-uk-2026',
]);

// ---------------------------------------------------------------------------
// In-memory cache — avoids calling Soro API on every Google sitemap crawl
// ---------------------------------------------------------------------------
let cachedSitemap = null;
let cacheExpiresAt = 0;
const CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeXml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function todayIso() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London',
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

function clampDate(raw) {
  if (!raw) return todayIso();
  const s = String(raw).trim().slice(0, 10);
  return s > todayIso() ? todayIso() : (s || todayIso());
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  const parts = ['  <url>', `    <loc>${escapeXml(loc)}</loc>`];
  if (lastmod) parts.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
  if (changefreq) parts.push(`    <changefreq>${escapeXml(changefreq)}</changefreq>`);
  if (typeof priority === 'number') parts.push(`    <priority>${priority.toFixed(2)}</priority>`);
  parts.push('  </url>');
  return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Data fetchers
// ---------------------------------------------------------------------------

async function fetchSoroArticles() {
  try {
    const res = await fetch(SORO_EMBED_SRC, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': 'hvacexitadvisors-Sitemap/1.0' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const match = text.match(SORO_ARTICLES_RE);
    if (!match?.[1]) throw new Error('SORO_ARTICLES missing');
    const articles = JSON.parse(match[1]);
    return articles.filter((a) => a?.slug && !EXCLUDED_BLOG_SLUGS.has(a.slug));
  } catch (err) {
    console.warn(`[Sitemap] Soro fetch failed (${err.message}) — using empty Soro list.`);
    return [];
  }
}

async function fetchCmsBlogs() {
  try {
    const blogs = await Blog.find({ status: 'published' })
      .select('slug publishedAt updatedAt createdAt')
      .sort({ publishedAt: -1 })
      .lean();
    return blogs.filter((b) => b.slug && !EXCLUDED_BLOG_SLUGS.has(b.slug));
  } catch (err) {
    console.warn(`[Sitemap] CMS blog fetch failed (${err.message}) — using empty CMS list.`);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Sitemap builder
// ---------------------------------------------------------------------------

async function buildSitemapXml() {
  const today = todayIso();
  const seenPaths = new Set();
  const entries = [];

  // 1. Static routes
  for (const route of STATIC_ROUTES) {
    if (seenPaths.has(route.path)) continue;
    seenPaths.add(route.path);
    entries.push(urlEntry({
      loc: `${BASE_URL}${route.path === '/' ? '/' : route.path}`,
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    }));
  }

  // 2. Soro AI blogs (live from Soro embed API)
  const soroArticles = await fetchSoroArticles();
  for (const article of soroArticles) {
    const path = `/blog/${article.slug}`;
    if (seenPaths.has(path)) continue;
    seenPaths.add(path);
    const lastmod = clampDate(article.isoDate || article.date);
    entries.push(urlEntry({
      loc: `${BASE_URL}${path}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.70,
    }));
  }

  // 3. CMS blogs (from MongoDB)
  const cmsBlogs = await fetchCmsBlogs();
  for (const blog of cmsBlogs) {
    const path = `/blog/${blog.slug}`;
    if (seenPaths.has(path)) continue;
    seenPaths.add(path);
    const rawDate = blog.publishedAt || blog.updatedAt || blog.createdAt;
    const lastmod = clampDate(rawDate ? new Date(rawDate).toISOString() : null);
    entries.push(urlEntry({
      loc: `${BASE_URL}${path}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.70,
    }));
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
  ].join('\n');

  console.log(
    `[Sitemap] Built dynamic sitemap: ${entries.length} URLs ` +
    `(${STATIC_ROUTES.length} static + ${soroArticles.length} Soro + ${cmsBlogs.length} CMS)`
  );

  return xml;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

/**
 * GET /sitemap.xml
 *
 * Serves a dynamically generated sitemap including all Soro + CMS blogs.
 * In-memory cached for 4 hours to avoid hitting Soro API on every crawl.
 *
 * Google/Bing read this endpoint directly because robots.txt includes:
 *   Sitemap: https://pick-pack-pro.onrender.com/sitemap.xml
 */
router.get('/sitemap.xml', async (_req, res) => {
  try {
    const now = Date.now();

    // Serve cached sitemap if still fresh
    if (cachedSitemap && now < cacheExpiresAt) {
      res.set({
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=43200', // 12h browser/CDN cache
        'X-Sitemap-Source': 'cache',
        'X-Sitemap-Expires': new Date(cacheExpiresAt).toUTCString(),
      });
      return res.send(cachedSitemap);
    }

    // Build fresh sitemap
    const xml = await buildSitemapXml();

    // Update in-memory cache
    cachedSitemap = xml;
    cacheExpiresAt = now + CACHE_TTL_MS;

    res.set({
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=43200',
      'X-Sitemap-Source': 'fresh',
      'X-Sitemap-Built': new Date().toUTCString(),
    });
    return res.send(xml);
  } catch (err) {
    console.error('[Sitemap] Unhandled error building sitemap:', err.message);
    res.status(500).set('Content-Type', 'text/plain').send('Sitemap generation failed.');
  }
});

/**
 * GET /sitemap-status
 * Admin endpoint to check cache state and force a refresh.
 */
router.get('/sitemap-status', (_req, res) => {
  res.json({
    cached: !!cachedSitemap,
    cacheExpiresAt: cacheExpiresAt ? new Date(cacheExpiresAt).toISOString() : null,
    cacheAgeSeconds: cachedSitemap ? Math.round((Date.now() - (cacheExpiresAt - CACHE_TTL_MS)) / 1000) : null,
    cacheTtlHours: CACHE_TTL_MS / 3_600_000,
  });
});

/**
 * POST /sitemap-refresh
 * Force clears the in-memory cache so the next GET rebuilds from scratch.
 * Useful after a new blog is published manually via CMS.
 */
router.post('/sitemap-refresh', (_req, res) => {
  cachedSitemap = null;
  cacheExpiresAt = 0;
  console.log('[Sitemap] Cache cleared by /sitemap-refresh request.');
  res.json({ ok: true, message: 'Sitemap cache cleared. Next GET will rebuild.' });
});

export default router;
