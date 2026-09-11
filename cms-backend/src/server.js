import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.js';
import blogRoutes from './routes/blogs.js';
import categoryRoutes from './routes/categories.js';
import listingRoutes from './routes/listings.js';
import faqRoutes from './routes/faqs.js';
import publicRoutes from './routes/public.js';
import commentRoutes from './routes/comments.js';
import leadRoutes from './routes/leads.js';
import uploadRoutes from './routes/uploads.js';
import sitemapRoutes from './routes/sitemap.js';
import { AdminUser } from './models/AdminUser.js';
import { startSoroPoller } from './utils/soroPoller.js';
import { printAtlasWhitelistHelp } from './utils/atlasConnectHelp.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cmsUploadsApiDir = path.resolve(__dirname, '../uploads/cms-images');
const cmsUploadsSiteDir = path.resolve(__dirname, '../../my-app/public/Images/cms-uploads');

const app = express();
const PORT = Number(process.env.PORT) || 4000;

const corsOrigins = String(process.env.CORS_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

function isLocalDevOrigin(origin) {
  if (!origin) return true;
  try {
    const { hostname } = new URL(origin);
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
  } catch {
    return false;
  }
}

app.use(
  cors({
    origin(origin, callback) {
      // Always allow local Vite/admin (any port) so localhost login works.
      if (!origin || isLocalDevOrigin(origin) || corsOrigins.length === 0 || corsOrigins.includes(origin)) {
        return callback(null, true);
      }
      // Deny without throwing — a thrown Error becomes HTTP 500 instead of a CORS fail.
      return callback(null, false);
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '2mb' }));

/** CMS cover images uploaded via /api/uploads/image */
app.use('/Images/cms-uploads', express.static(cmsUploadsSiteDir));
app.use('/Images/cms-uploads', express.static(cmsUploadsApiDir));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'hvacexitadvisors-cms-backend',
    /** Bump when shipping admin APIs — live should show this after Render redeploy. */
    apiVersion: '2026-08-04-inbox-comments',
    routes: ['/api/auth', '/api/blogs', '/api/comments', '/api/leads', '/api/public', '/api/uploads'],
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/blogs/:blogId/faqs', faqRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/listings', listingRoutes);

// Dynamic sitemap — mounted at root (not /api) so Google accesses /sitemap.xml directly.
// Also exposes /sitemap-status and /sitemap-refresh for admin use.
app.use('/', sitemapRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

/** Ensure admin from .env exists on boot (idempotent). */
async function ensureAdminFromEnv() {
  const email = String(process.env.ADMIN_EMAIL || '')
    .trim()
    .toLowerCase();
  const password = String(process.env.ADMIN_PASSWORD || '');
  const name = String(process.env.ADMIN_NAME || 'Admin').trim();

  if (!email || !password) {
    console.warn('warn: ADMIN_EMAIL / ADMIN_PASSWORD not set — login will fail until seeded');
    return;
  }

  const passwordHash = await AdminUser.hashPassword(password);
  await AdminUser.findOneAndUpdate(
    { email },
    { email, passwordHash, name, role: 'admin', isActive: true },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  await AdminUser.updateMany({ email: { $ne: email } }, { $set: { isActive: false } });
  console.log(`admin ready: ${email}`);
}

async function start() {
  await connectDb();
  console.log('MongoDB connected');
  await ensureAdminFromEnv();

  // Start Soro blog poller — detects new Soro AI articles and pings IndexNow
  // (Google + Bing + Yandex) automatically every 6 hours.
  startSoroPoller();

  app.listen(PORT, () => {
    console.log(`CMS API listening on http://localhost:${PORT}`);
  });
}

start().catch(async (err) => {
  console.error('Failed to start CMS backend:', err.message || err);
  await printAtlasWhitelistHelp(err);
  process.exit(1);
});



