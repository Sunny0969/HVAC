import { Router } from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import multer from 'multer';
import { requireAuth } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Persist uploads on the API host (Render/VPS); mirror into site public/ when that folder exists locally. */
const apiUploadDir = path.resolve(__dirname, '../../uploads/cms-images');
const siteUploadDir = path.resolve(__dirname, '../../../my-app/public/Images/cms-uploads');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(apiUploadDir);
if (fs.existsSync(path.dirname(siteUploadDir))) {
  ensureDir(siteUploadDir);
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, apiUploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    const safeExt = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext)
      ? ext
      : '.jpg';
    cb(null, `${Date.now()}-${crypto.randomBytes(8).toString('hex')}${safeExt}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype?.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

const router = Router();

router.use(requireAuth);

async function uploadToCloudinary(filePath, filename) {
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME ||
    process.env.VITE_CLOUDINARY_CLOUD_NAME ||
    'dd8rixjp0';
  const preset =
    process.env.CLOUDINARY_UPLOAD_PRESET ||
    process.env.VITE_CLOUDINARY_UPLOAD_PRESET ||
    '';
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName) return null;

  const buf = fs.readFileSync(filePath);
  const folder = 'cms-blog-covers';
  const publicId = path.basename(filename, path.extname(filename));

  // 1) Unsigned preset — no API secret required (recommended on Render)
  if (preset) {
    const form = new FormData();
    form.append('file', new Blob([buf]), filename);
    form.append('upload_preset', preset);
    form.append('folder', folder);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: form,
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.secure_url) return String(data.secure_url);
  }

  // 2) Signed upload — needs CLOUDINARY_API_KEY + CLOUDINARY_API_SECRET
  if (!apiKey || !apiSecret) return null;

  const timestamp = Math.floor(Date.now() / 1000);
  const toSign = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = crypto.createHash('sha1').update(toSign).digest('hex');

  const form = new FormData();
  form.append('file', new Blob([buf]), filename);
  form.append('api_key', apiKey);
  form.append('timestamp', String(timestamp));
  form.append('signature', signature);
  form.append('folder', folder);
  form.append('public_id', publicId);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: form,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.secure_url) return null;
  return String(data.secure_url);
}

/** POST /api/uploads/image — multipart field "image"; optional "dataUrl" for durable Mongo storage */
router.post('/image', (req, res, next) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'Image must be 8 MB or smaller' });
      }
      return res.status(400).json({ error: err.message || 'Upload failed' });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      const relativePath = `/Images/cms-uploads/${req.file.filename}`;
      const clientDataUrl =
        typeof req.body?.dataUrl === 'string' && req.body.dataUrl.startsWith('data:image/')
          ? req.body.dataUrl
          : '';

      if (fs.existsSync(path.dirname(siteUploadDir))) {
        try {
          ensureDir(siteUploadDir);
          fs.copyFileSync(
            path.join(apiUploadDir, req.file.filename),
            path.join(siteUploadDir, req.file.filename)
          );
        } catch {
          /* site mirror optional */
        }
      }

      let cloudUrl = null;
      try {
        cloudUrl = await uploadToCloudinary(
          path.join(apiUploadDir, req.file.filename),
          req.file.filename
        );
      } catch {
        /* optional */
      }

      // Prefer durable URLs: Cloudinary → data URL → relative path (ephemeral on Render)
      const durableUrl = cloudUrl || clientDataUrl || relativePath;

      return res.status(201).json({
        url: durableUrl,
        path: relativePath,
        dataUrl: clientDataUrl || undefined,
        filename: req.file.filename,
        size: req.file.size,
        mimeType: req.file.mimetype,
      });
    } catch (innerErr) {
      return next(innerErr);
    }
  });
});

export default router;
