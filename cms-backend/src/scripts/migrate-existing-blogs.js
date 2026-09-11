/**
 * One-time migration: hand-coded TS blogs, dedicated React posts, orphan file, Soro API.
 * Idempotent — skips slugs already in MongoDB.
 *
 * Usage (from cms-backend/):
 *   npm run migrate:blogs
 */
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { connectDb, disconnectDb } from '../config/db.js';
import { Blog } from '../models/Blog.js';
import { Category } from '../models/Category.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CMS_ROOT = path.resolve(__dirname, '../..');
const MY_APP_ROOT = path.resolve(CMS_ROOT, '../my-app');
const DATA_DIR = path.join(MY_APP_ROOT, 'src/data');
const SITE_ORIGIN = (process.env.SITE_ORIGIN || 'https://www.hvacexitadvisors.com').replace(/\/$/, '');

const SORO_EMBED =
  'https://app.trysoro.com/api/embed/4f25a1dd-3f45-47d4-b864-a8c38c5ebbff';
const SORO_TOKEN = '4f25a1dd-3f45-47d4-b864-a8c38c5ebbff';
const SORO_API = 'https://app.trysoro.com';

const MONTHS = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

const HAND_CODED_FILES = [
  'blog3plLogisticsUkGuide2026.ts',
  'blogAmazonEndingFbaPrepUK2026.ts',
  'blogAmazonFbaPrepCentreUkGuide2026.ts',
  'blogAmazonFbaPrepVsSfpUk.ts',
  'blogAmazonPolyBagRequirementsUk.ts',
  'blogAmazonShopifyEbayTiktokOne3plUk.ts',
  'blogBestAmazonFbaPrepAlternativesUK2026.ts',
  'blogFbaPrepCentreMiltonKeynesAmazonPrepFulfilmentUk.ts',
  'blogFbaPrepCentreUkPricing2026.ts',
  'blogFbaPrepHazmatUk.ts',
  'blogFbaPrepOnlineArbitrageUk.ts',
  'blogFbaPrepPrivateLabelSellersUk.ts',
  'blogFbaPrepRequirementsUkAmazonSellerGuide2026.ts',
  'FBA Prep UK Services.ts',
  'blogFbaPrepWholesaleUk.ts',
  'blogHowToChooseFbaPrepCentreUk.ts',
  'blogHowToChooseMultiChannelFulfilmentPartnerUk2026.ts',
  'blogHowToHandleAmazonRemovalOrdersUk.ts',
  'blogHowToPrepProductsForAmazonFbaUk.ts',
  'bloghvacexitadvisorsVsDiyFbaPrep.ts',
  'blogReduceFbaStorageFeesDripFeed.ts',
  'blogWhatDoesAmazonFbaDo.ts',
  'blogWhatIsSellerFulfilledPrimeUk2026.ts',
  'blogWhatIsTheFeeForAmazonFbaUk.ts',
];

const ORPHAN_FILES = ['blogReduceFbaStorageFeesDripFeed1.ts'];

const DEDICATED_SLUGS = ['sfp-vs-fba-2026', 'sfp-vs-fba-amazon-fulfilment-uk-2026'];

const stats = { inserted: 0, skipped: 0, errors: [] };

function pickField(src, field) {
  const m = src.match(new RegExp(`\\b${field}:\\s*['"]([^'"]*)['"]`));
  return m?.[1]?.trim() ?? '';
}

function pickOptionalField(src, field) {
  const m = src.match(new RegExp(`\\b${field}:\\s*['"]([^'"]*)['"]`));
  return m?.[1]?.trim();
}

function parseTags(src) {
  const block = src.match(/\btags:\s*\[([\s\S]*?)\]/);
  if (!block) return [];
  return [...block[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
}

function parseFaqs(src) {
  const block = src.match(/\bfaqs:\s*\[([\s\S]*?)\]\s*,?\s*(?:relatedBlogs|content|};)/);
  if (!block) return [];
  const faqs = [];
  const re =
    /\{\s*id:\s*(\d+)\s*,\s*question:\s*["']((?:\\.|[^"'])*)["']\s*,\s*answer:\s*["']((?:\\.|[^"'])*)["']\s*\}/g;
  let m;
  while ((m = re.exec(block[1])) !== null) {
    faqs.push({
      question: m[2].replace(/\\'/g, "'").replace(/\\"/g, '"'),
      answer: m[3].replace(/\\'/g, "'").replace(/\\"/g, '"'),
    });
  }
  return faqs;
}

function parseConstMap(src) {
  const map = {};
  const re = /(?:const|let)\s+(\w+)\s*=\s*([\s\S]*?);/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const name = m[1];
    const raw = m[2].trim();
    if (raw.startsWith("'") || raw.startsWith('"')) {
      map[name] = raw.slice(1, -1);
    } else if (raw.startsWith('`')) {
      map[name] = raw.slice(1, raw.lastIndexOf('`'));
    } else if (/^\/\//.test(raw.split('\n')[0])) {
      continue;
    } else {
      const str = raw.match(/^['"]([^'"]*)['"]/);
      if (str) map[name] = str[1];
    }
  }
  return map;
}

function resolveTemplateInterpolations(template, constMap) {
  return template.replace(/\$\{([^}]+)\}/g, (_, expr) => {
    const key = expr.trim();
    if (constMap[key] !== undefined) return constMap[key];
    return `\${${key}}`;
  });
}

function parseContentField(src, constMap) {
  const marker = src.search(/\bcontent:\s*`/);
  if (marker === -1) return '';

  let i = src.indexOf('`', marker + 8) + 1;
  let content = '';

  while (i < src.length) {
    const ch = src[i];
    if (ch === '\\') {
      content += src[i + 1] ?? '';
      i += 2;
      continue;
    }
    if (ch === '`') break;
    if (ch === '$' && src[i + 1] === '{') {
      const end = src.indexOf('}', i);
      const name = src.slice(i + 2, end).trim();
      content += constMap[name] ?? `\${${name}}`;
      i = end + 1;
      continue;
    }
    content += ch;
    i += 1;
  }

  return resolveTemplateInterpolations(content, constMap).trim();
}

function pickImage(src, constMap) {
  const m = src.match(/\bimage:\s*(\w+|['"][^'"]*['"])/);
  if (!m) return '';
  const val = m[1].trim();
  if (val.startsWith("'") || val.startsWith('"')) return val.slice(1, -1);
  return constMap[val] || val;
}

function parsePublishedDate(raw, isoFallback) {
  if (isoFallback) {
    const iso = new Date(isoFallback);
    if (!Number.isNaN(iso.getTime())) return iso;
  }

  const text = String(raw || '').trim();
  if (!text) return new Date();

  let m = text.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));

  m = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));

  m = text.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/i);
  if (m) {
    const month = MONTHS[m[2].toLowerCase()];
    if (month !== undefined) return new Date(Number(m[3]), month, Number(m[1]));
  }

  m = text.match(/^(\w+)\s+(\d{4})$/i);
  if (m) {
    const month = MONTHS[m[1].toLowerCase()];
    if (month !== undefined) return new Date(Number(m[2]), month, 1);
  }

  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function loadBlogSeoBySlug() {
  const file = path.join(DATA_DIR, 'blogSeoIndex.generated.ts');
  if (!fs.existsSync(file)) return {};

  const src = fs.readFileSync(file, 'utf8');
  const map = {};
  const slugRe = /"([a-z0-9-]+)"\s*:\s*\{/g;
  let match;

  while ((match = slugRe.exec(src)) !== null) {
    const slug = match[1];
    const start = match.index;
    let depth = 0;
    let end = start;
    for (let i = src.indexOf('{', start); i < src.length; i += 1) {
      if (src[i] === '{') depth += 1;
      if (src[i] === '}') {
        depth -= 1;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }

    const block = src.slice(start, end);
    const entry = { slug };
    for (const field of ['title', 'description', 'seoTitle', 'seoDescription', 'keywords', 'image', 'publishDate', 'dateModified']) {
      const fm = block.match(new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
      if (fm) entry[field] = fm[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const undef = block.match(new RegExp(`${field}:\\s*undefined`));
      if (undef && entry[field] === undefined) entry[field] = undefined;
    }

    const tagsBlock = block.match(/tags:\s*\[([\s\S]*?)\]/);
    if (tagsBlock) {
      entry.tags = [...tagsBlock[1].matchAll(/"([^"]+)"/g)].map((t) => t[1]);
    }

    map[slug] = entry;
  }

  return map;
}

function parseHandCodedFile(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`missing file ${filename}`);
  }

  const src = fs.readFileSync(filePath, 'utf8');
  const constMap = parseConstMap(src);
  const slug = pickField(src, 'slug');
  if (!slug) return null;

  const seoIndex = loadBlogSeoBySlug();
  const seo = seoIndex[slug] || {};

  const title = pickField(src, 'title') || seo.title || slug;
  const excerpt = pickField(src, 'description') || seo.description || '';
  const seoTitle = pickOptionalField(src, 'seoTitle') || seo.seoTitle || title;
  const seoDescription =
    pickOptionalField(src, 'seoDescription') || seo.seoDescription || excerpt;
  const coverImage = pickImage(src, constMap) || seo.image || '';
  const category = pickField(src, 'category') || 'Latest';
  const tags = parseTags(src).length ? parseTags(src) : seo.tags || [];
  const faqs = parseFaqs(src);
  const content = parseContentField(src, constMap);
  const author = pickField(src, 'author') || 'Pick Pack Pro';
  const dateRaw =
    pickField(src, 'date') ||
    pickField(src, 'publishDate') ||
    seo.publishDate ||
    '';
  const dateModified = pickOptionalField(src, 'dateModified') || seo.dateModified;

  return {
    slug,
    title,
    excerpt,
    content,
    coverImage,
    category,
    tags,
    faqs,
    author,
    publishedAt: parsePublishedDate(dateRaw),
    seo: {
      metaTitle: seoTitle,
      metaDescription: seoDescription,
      ogImage: coverImage,
      canonicalUrl: `${SITE_ORIGIN}/blog/${slug}`,
      schemaType: 'BlogPosting',
    },
    source: filename,
    dateModified,
  };
}

function loadDedicatedSchemaPosts() {
  const file = path.join(DATA_DIR, 'blogDedicatedSchemaPosts.ts');
  const src = fs.readFileSync(file, 'utf8');
  const posts = {};

  for (const slug of DEDICATED_SLUGS) {
    const blockRe = new RegExp(`'${slug}'\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`, 'm');
    const block = src.match(blockRe)?.[1];
    if (!block) continue;

    posts[slug] = {
      slug,
      title: pickField(block, 'title'),
      excerpt: pickField(block, 'description'),
      coverImage: pickImage(block, parseConstMap(block)),
      category: pickField(block, 'category') || 'Latest',
      tags: parseTags(block),
      author: pickField(block, 'author') || 'Pick Pack Pro',
      publishedAt: parsePublishedDate(pickField(block, 'date') || pickField(block, 'publishDate')),
    };
  }

  return posts;
}

function loadDedicatedHtml() {
  const jsonPath = path.join(DATA_DIR, 'dedicatedBlogHtml.generated.json');
  if (!fs.existsSync(jsonPath)) {
    process.stdout.write('migrate:blogs — generating dedicated blog HTML via Vite SSR…\n');
    execSync('node ./scripts/export-dedicated-blog-html.mjs', {
      cwd: MY_APP_ROOT,
      stdio: 'inherit',
    });
  }

  if (!fs.existsSync(jsonPath)) {
    throw new Error('dedicatedBlogHtml.generated.json missing after export');
  }

  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

function loadSoroRouteMeta() {
  const file = path.join(DATA_DIR, 'soroBlogRoutes.generated.ts');
  if (!fs.existsSync(file)) {
    throw new Error('soroBlogRoutes.generated.ts missing — run my-app generate first');
  }

  const src = fs.readFileSync(file, 'utf8');
  const entries = [];
  const re =
    /\{\s*id:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*title:\s*"((?:\\.|[^"\\])*)"\s*,\s*excerpt:\s*"((?:\\.|[^"\\])*)"\s*,\s*date:\s*"((?:\\.|[^"\\])*)"\s*,\s*isoDate:\s*"((?:\\.|[^"\\])*)"\s*,\s*image:\s*"((?:\\.|[^"\\])*)"\s*\}/g;

  let m;
  while ((m = re.exec(src)) !== null) {
    entries.push({
      id: m[1],
      slug: m[2],
      title: m[3].replace(/\\"/g, '"'),
      excerpt: m[4].replace(/\\"/g, '"'),
      date: m[5].replace(/\\"/g, '"'),
      isoDate: m[6].replace(/\\"/g, '"'),
      image: m[7].replace(/\\"/g, '"'),
    });
  }

  return entries;
}

function loadCachedSoroContent() {
  const file = path.join(DATA_DIR, 'soroBlog.generated.ts');
  if (!fs.existsSync(file)) return {};

  const src = fs.readFileSync(file, 'utf8');
  const match = src.match(/SORO_BLOG_CONTENT[^=]*=\s*(\{[\s\S]*\});/);
  if (!match) return {};

  try {
    return JSON.parse(match[1]);
  } catch {
    return {};
  }
}

async function fetchSoroContent(articleId) {
  const overridePath = path.join(DATA_DIR, `${articleId}Override.html`);
  if (fs.existsSync(overridePath)) {
    return fs.readFileSync(overridePath, 'utf8');
  }

  const url = `${SORO_API}/api/embed/${SORO_TOKEN}/article/${articleId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Soro article ${articleId} HTTP ${res.status}`);
  const data = await res.json();
  return data.content || '';
}

function inferSoroTags(title) {
  const t = title.toLowerCase();
  if (t.includes('seller fulfilled prime') || t.includes('sfp')) {
    return ['Seller Fulfilled Prime', 'Amazon SFP', 'UK Fulfilment'];
  }
  if (t.includes('tiktok')) return ['TikTok Shop', 'UK Fulfilment', 'E-commerce'];
  if (t.includes('shopify')) return ['Shopify', 'UK Fulfilment', 'E-commerce'];
  if (t.includes('pick and pack') || t.includes('fulfilment')) {
    return ['3PL', 'UK Fulfilment', 'Pick and Pack'];
  }
  if (t.includes('fee')) return ['Amazon FBA', 'FBA Prep', 'Pricing'];
  if (t.includes('fnsku') || t.includes('labelling')) {
    return ['Amazon FBA', 'FNSKU', 'FBA Prep'];
  }
  return ['Amazon FBA', 'FBA Prep', 'UK Fulfilment'];
}

const categoryCache = new Map();

async function ensureCategory(name) {
  const trimmed = String(name || 'Latest').trim() || 'Latest';
  if (categoryCache.has(trimmed)) return categoryCache.get(trimmed);

  let cat = await Category.findOne({ name: trimmed });
  if (!cat) {
    cat = await Category.create({ name: trimmed, description: '' });
    process.stdout.write(`migrate:blogs — created category "${trimmed}"\n`);
  }

  categoryCache.set(trimmed, cat._id);
  return cat._id;
}

async function insertBlog(doc) {
  const existing = await Blog.findOne({ slug: doc.slug }).select('_id slug').lean();
  if (existing) {
    stats.skipped += 1;
    process.stdout.write(`SKIP (exists): ${doc.slug}\n`);
    return;
  }

  if (!doc.content?.trim()) {
    stats.errors.push({ slug: doc.slug, error: 'empty content' });
    process.stderr.write(`ERROR (empty content): ${doc.slug} [${doc.source}]\n`);
    return;
  }

  try {
    const categoryId = await ensureCategory(doc.category);
    await Blog.create({
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      content: doc.content,
      coverImage: doc.coverImage,
      category: categoryId,
      tags: doc.tags,
      faqs: doc.faqs || [],
      seo: doc.seo,
      status: 'published',
      publishedAt: doc.publishedAt,
      author: doc.author || 'Pick Pack Pro',
    });

    stats.inserted += 1;
    process.stdout.write(`INSERT: ${doc.slug} [${doc.source}]\n`);
  } catch (err) {
    stats.errors.push({ slug: doc.slug, error: err.message });
    process.stderr.write(`ERROR: ${doc.slug} — ${err.message}\n`);
  }
}

async function migrateHandCoded() {
  process.stdout.write('\n=== Hand-coded TS blogs (24) ===\n');
  for (const file of HAND_CODED_FILES) {
    try {
      const doc = parseHandCodedFile(file);
      if (!doc) {
        stats.errors.push({ slug: file, error: 'no slug' });
        continue;
      }
      doc.source = `hand-coded:${file}`;
      await insertBlog(doc);
    } catch (err) {
      stats.errors.push({ slug: file, error: err.message });
      process.stderr.write(`ERROR parsing ${file}: ${err.message}\n`);
    }
  }
}

async function migrateOrphans() {
  process.stdout.write('\n=== Orphan blog files ===\n');
  for (const file of ORPHAN_FILES) {
    try {
      const doc = parseHandCodedFile(file);
      if (!doc) continue;
      doc.source = `orphan:${file}`;
      await insertBlog(doc);
    } catch (err) {
      stats.errors.push({ slug: file, error: err.message });
      process.stderr.write(`ERROR parsing orphan ${file}: ${err.message}\n`);
    }
  }
}

async function migrateDedicated() {
  process.stdout.write('\n=== Dedicated React blog pages (2) ===\n');
  const schema = loadDedicatedSchemaPosts();
  const htmlBySlug = loadDedicatedHtml();
  const seoIndex = loadBlogSeoBySlug();

  for (const slug of DEDICATED_SLUGS) {
    const meta = schema[slug];
    const content = htmlBySlug[slug];
    if (!meta || !content) {
      stats.errors.push({ slug, error: 'missing meta or HTML export' });
      process.stderr.write(`ERROR dedicated ${slug}: missing meta or HTML\n`);
      continue;
    }

    const seo = seoIndex[slug] || {};
    const coverImage = meta.coverImage || seo.image || '';

    await insertBlog({
      slug,
      title: meta.title || seo.title,
      excerpt: meta.excerpt || seo.description,
      content,
      coverImage,
      category: meta.category,
      tags: meta.tags?.length ? meta.tags : seo.tags || [],
      faqs: [],
      author: meta.author,
      publishedAt: meta.publishedAt,
      seo: {
        metaTitle: seo.seoTitle || meta.title,
        metaDescription: seo.seoDescription || meta.excerpt,
        ogImage: coverImage,
        canonicalUrl: `${SITE_ORIGIN}/blog/${slug}`,
        schemaType: 'BlogPosting',
      },
      source: 'dedicated-react',
    });
  }
}

async function migrateSoro() {
  process.stdout.write('\n=== Soro API blogs ===\n');
  const routes = loadSoroRouteMeta();
  const cached = loadCachedSoroContent();
  const seoIndex = loadBlogSeoBySlug();

  for (const route of routes) {
    let content = cached[route.id] || '';

    if (!content.trim()) {
      try {
        const overrideSlugPath = path.join(DATA_DIR, `${route.slug}Override.html`);
        if (fs.existsSync(overrideSlugPath)) {
          content = fs.readFileSync(overrideSlugPath, 'utf8');
        } else {
          content = await fetchSoroContent(route.id);
        }
      } catch (err) {
        stats.errors.push({ slug: route.slug, error: err.message });
        process.stderr.write(`ERROR fetching Soro ${route.slug}: ${err.message}\n`);
        continue;
      }
    }

    const seo = seoIndex[route.slug] || {};
    const tags = seo.tags?.length ? seo.tags : inferSoroTags(route.title);

    await insertBlog({
      slug: route.slug,
      title: route.title,
      excerpt: route.excerpt || seo.description || '',
      content,
      coverImage: route.image || seo.image || '',
      category: 'Latest',
      tags,
      faqs: seo.faqs?.map((f) => ({ question: f.question, answer: f.answer })) || [],
      author: 'Pick Pack Pro',
      publishedAt: parsePublishedDate(route.date, route.isoDate),
      seo: {
        metaTitle: seo.seoTitle || route.title,
        metaDescription: seo.seoDescription || route.excerpt,
        ogImage: route.image || seo.image || '',
        canonicalUrl: `${SITE_ORIGIN}/blog/${route.slug}`,
        schemaType: 'BlogPosting',
      },
      source: `soro:${route.id}`,
    });
  }
}

async function main() {
  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`my-app data dir not found: ${DATA_DIR}`);
  }

  await connectDb();

  await migrateHandCoded();
  await migrateOrphans();
  await migrateDedicated();
  await migrateSoro();

  process.stdout.write('\n=== Migration summary ===\n');
  process.stdout.write(`Inserted: ${stats.inserted}\n`);
  process.stdout.write(`Skipped (already in CMS): ${stats.skipped}\n`);
  process.stdout.write(`Errors: ${stats.errors.length}\n`);

  if (stats.errors.length) {
    for (const e of stats.errors) {
      process.stderr.write(`  - ${e.slug}: ${e.error}\n`);
    }
  }

  await disconnectDb();

  if (stats.errors.length) {
    process.exitCode = 1;
  }
}

main().catch(async (err) => {
  process.stderr.write(`migrate:blogs FAIL — ${err.message}\n`);
  try {
    await disconnectDb();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
