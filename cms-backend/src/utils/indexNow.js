/**
 * IndexNow utility — notifies Google, Bing and Yandex about new/updated URLs.
 *
 * IndexNow is an open protocol supported by:
 *   - Google Search (via indexnow.org)
 *   - Bing
 *   - Yandex
 *
 * One POST sends the URL to all three engines simultaneously via indexnow.org,
 * which then shares with participating engines. No Search Console action needed.
 *
 * Docs: https://www.indexnow.org/documentation
 */

const SITE_ORIGIN = () =>
  (process.env.SITE_ORIGIN || 'https://www.hvacexitadvisors.com').replace(/\/$/, '');

/**
 * IndexNow API key — must match the filename of the verification file hosted at:
 *   https://www.hvacexitadvisors.com/<INDEXNOW_KEY>.txt
 *
 * The file content must be exactly the key string (see public/<key>.txt in my-app).
 * Set INDEXNOW_KEY env var on Render. Falls back to the embedded key for local dev.
 */
const INDEXNOW_KEY = () =>
  process.env.INDEXNOW_KEY || 'a4f2b8e1c3d56e7a8b9c0d1e2f3a4b55';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * Ping IndexNow with one or more URLs.
 * Google, Bing and Yandex all pick this up via indexnow.org federation.
 *
 * @param {string[]} urls - Absolute URLs to ping (e.g. ['https://www.hvacexitadvisors.com/blog/my-post'])
 * @returns {Promise<{ ok: boolean, status?: number, error?: string }>}
 */
export async function pingIndexNow(urls) {
  if (!urls?.length) return { ok: false, error: 'No URLs provided' };

  const origin = SITE_ORIGIN();
  const key = INDEXNOW_KEY();
  const keyLocation = `${origin}/${key}.txt`;

  // IndexNow accepts single URL as GET, or batch as POST JSON
  const payload = {
    host: new URL(origin).hostname,
    key,
    keyLocation,
    urlList: urls.slice(0, 10000), // IndexNow max per request
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });

    const statusText = `HTTP ${res.status}`;

    if (res.ok || res.status === 202) {
      console.log(
        `[IndexNow] ✓ Pinged ${urls.length} URL(s) → ${statusText} (Google + Bing + Yandex)`
      );
      return { ok: true, status: res.status };
    }

    // 422 = already submitted recently (not an error)
    if (res.status === 422) {
      console.log(`[IndexNow] Already submitted recently → ${statusText} (OK)`);
      return { ok: true, status: res.status };
    }

    const body = await res.text().catch(() => '');
    console.warn(`[IndexNow] Ping failed → ${statusText}: ${body.slice(0, 200)}`);
    return { ok: false, status: res.status, error: body };
  } catch (err) {
    console.warn(`[IndexNow] Ping error: ${err.message}`);
    return { ok: false, error: err.message };
  }
}

/**
 * Ping IndexNow for a single new blog post.
 * Convenience wrapper used by soroPoller and blog publish webhook.
 *
 * @param {string} slug - Blog slug (e.g. 'what-is-fba-prep-uk')
 */
export async function pingNewBlogUrl(slug) {
  const url = `${SITE_ORIGIN()}/blog/${slug}`;
  console.log(`[IndexNow] Pinging new blog: ${url}`);
  return pingIndexNow([url]);
}

/**
 * Ping IndexNow for the blog listing page + a new post simultaneously.
 * Useful when a new blog should refresh both the listing and its own page.
 *
 * @param {string} slug - Blog slug
 */
export async function pingNewBlogWithListing(slug) {
  const origin = SITE_ORIGIN();
  const urls = [
    `${origin}/blog/${slug}`,
    `${origin}/fulfillment-blog`,
  ];
  console.log(`[IndexNow] Pinging blog + listing: ${urls.join(', ')}`);
  return pingIndexNow(urls);
}
