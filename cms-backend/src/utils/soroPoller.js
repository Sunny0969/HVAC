/**
 * Soro Blog Poller — background job that detects newly published Soro AI blogs
 * and automatically pings Google + Bing + Yandex via IndexNow.
 *
 * Runs on server start, then every POLL_INTERVAL_MS (default: 6 hours).
 * Keeps a MongoDB cache of already-pinged slugs so no duplicate pings occur.
 *
 * Flow:
 *   1. Fetch Soro embed script → parse SORO_ARTICLES array
 *   2. For each article slug, check SoroBlogCache in MongoDB
 *   3. New slug found → ping IndexNow → save slug to cache
 *   4. Sleep POLL_INTERVAL_MS → repeat
 */

import { SoroBlogCache } from '../models/SoroBlogCache.js';
import { pingNewBlogWithListing } from './indexNow.js';

const SORO_EMBED_TOKEN =
  process.env.SORO_EMBED_TOKEN || '4f25a1dd-3f45-47d4-b864-a8c38c5ebbff';
const SORO_EMBED_SRC = `https://app.trysoro.com/api/embed/${SORO_EMBED_TOKEN}`;
const SORO_ARTICLES_RE = /var SORO_ARTICLES = (\[[\s\S]*?\]);/;

const SITE_ORIGIN = () =>
  (process.env.SITE_ORIGIN || 'https://www.hvacexitadvisors.com').replace(/\/$/, '');

/** Poll every 6 hours (21,600,000 ms). Adjust via SORO_POLL_INTERVAL_HOURS env. */
const POLL_INTERVAL_MS =
  Number(process.env.SORO_POLL_INTERVAL_HOURS || 6) * 60 * 60 * 1000;

let pollerTimer = null;
let isPolling = false;

/**
 * Fetch and parse Soro article list from the embed script.
 * @returns {Promise<Array<{id:string, slug:string, title:string, excerpt:string, isoDate:string, image:string}>>}
 */
async function fetchSoroArticles() {
  const res = await fetch(SORO_EMBED_SRC, {
    signal: AbortSignal.timeout(20_000),
    headers: { 'User-Agent': 'hvacexitadvisors-SoroPoller/1.0' },
  });

  if (!res.ok) throw new Error(`Soro embed fetch failed: HTTP ${res.status}`);

  const text = await res.text();
  const match = text.match(SORO_ARTICLES_RE);
  if (!match?.[1]) throw new Error('SORO_ARTICLES not found in embed script');

  const articles = JSON.parse(match[1]);
  return articles.filter((a) => a?.slug && a?.id);
}

/**
 * Main poll cycle:
 *   - Fetch current Soro articles
 *   - Find slugs not yet in SoroBlogCache
 *   - Ping IndexNow for new slugs
 *   - Upsert new slugs into cache
 */
async function pollOnce() {
  if (isPolling) {
    console.log('[SoroPoller] Already running — skipping this cycle.');
    return;
  }
  isPolling = true;

  try {
    console.log('[SoroPoller] Checking for new Soro blog articles…');
    const articles = await fetchSoroArticles();
    console.log(`[SoroPoller] Found ${articles.length} Soro article(s) in embed.`);

    // Load all already-known slugs in one query
    const knownSlugs = new Set(
      (await SoroBlogCache.find({}, 'slug').lean()).map((d) => d.slug)
    );

    const newArticles = articles.filter(
      (a) => !knownSlugs.has(String(a.slug).toLowerCase().trim())
    );

    if (!newArticles.length) {
      console.log('[SoroPoller] No new articles — nothing to ping.');
      return;
    }

    console.log(`[SoroPoller] ${newArticles.length} new article(s) detected!`);

    for (const article of newArticles) {
      const slug = String(article.slug).toLowerCase().trim();
      const url = `${SITE_ORIGIN()}/blog/${slug}`;

      try {
        // Ping Google + Bing + Yandex via IndexNow
        await pingNewBlogWithListing(slug);

        // Save to cache so we don't ping again next cycle
        await SoroBlogCache.findOneAndUpdate(
          { slug },
          {
            slug,
            url,
            pinnedAt: new Date(),
            isoDate: String(article.isoDate || article.date || ''),
            title: String(article.title || '').slice(0, 300),
            excerpt: String(article.excerpt || '').slice(0, 500),
          },
          { upsert: true, new: true }
        );

        console.log(`[SoroPoller] ✓ Pinged and cached: ${slug}`);
      } catch (pingErr) {
        console.warn(`[SoroPoller] Failed to ping ${slug}: ${pingErr.message}`);
        // Don't save to cache — retry next poll cycle
      }
    }
  } catch (err) {
    // Non-fatal: log and continue. Next poll cycle will retry.
    console.warn(`[SoroPoller] Poll cycle error: ${err.message}`);
  } finally {
    isPolling = false;
  }
}

/**
 * Start the Soro poller.
 * Call once from server.js after MongoDB is connected.
 *
 * - Runs an initial poll after a 30-second startup delay (lets DB settle)
 * - Then polls every POLL_INTERVAL_MS
 */
export function startSoroPoller() {
  if (pollerTimer) {
    console.log('[SoroPoller] Already started — ignoring duplicate startSoroPoller() call.');
    return;
  }

  console.log(
    `[SoroPoller] Started. Initial check in 30s, then every ${POLL_INTERVAL_MS / 3600000}h.`
  );

  // First poll: 30-second delay so the server finishes starting up
  setTimeout(async () => {
    await pollOnce();
    // Recurring poll
    pollerTimer = setInterval(pollOnce, POLL_INTERVAL_MS);
  }, 30_000);
}

/**
 * Stop the poller (useful for graceful shutdown or tests).
 */
export function stopSoroPoller() {
  if (pollerTimer) {
    clearInterval(pollerTimer);
    pollerTimer = null;
    console.log('[SoroPoller] Stopped.');
  }
}

/**
 * Manually trigger a single poll cycle (used by admin API if needed).
 */
export { pollOnce as triggerSoroPoll };
