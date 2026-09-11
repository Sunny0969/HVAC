# Pick Pack Pro — CMS Backend

Lightweight **Node.js + Express + MongoDB** API for the blog CMS.

## Setup

```bash
cd cms-backend
cp .env.example .env   # then fill credentials
npm install
npm run verify         # test MongoDB connection
npm run seed:admin     # optional (also runs on server start)
npm run dev
```

API base: `http://localhost:4000`

## Auth

- Admin email/password from `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`)
- Seeded into `AdminUser` on boot
- `POST /api/auth/login` → JWT
- Protected routes: `Authorization: Bearer <token>`

## Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/auth/login` | No | Login |
| GET | `/api/auth/me` | Yes | Current admin |
| GET/POST | `/api/blogs` | Yes | List / create blogs |
| GET/PUT/DELETE | `/api/blogs/:id` | Yes | Blog CRUD |
| GET/POST | `/api/blogs/:blogId/faqs` | Yes | FAQ list / add |
| PUT/DELETE | `/api/blogs/:blogId/faqs/:faqId` | Yes | FAQ update / delete |
| GET/POST | `/api/categories` | Yes | Categories |
| GET/PUT/DELETE | `/api/categories/:id` | Yes | Category CRUD |
| GET | `/api/public/blogs` | No | Published blogs (frontend build) |
| GET | `/api/public/blogs/slugs` | No | Published slugs (TipTap links) |
| GET | `/api/public/blogs/:slug` | No | Full published post |
| GET | `/api/public/categories` | No | Public categories |
| GET | `/health` | No | Health check |

## Security

- Never commit `.env`
- Rotate `JWT_SECRET` and admin password in production
- Restrict MongoDB Atlas IP access in production
