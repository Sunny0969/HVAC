export type AdminUser = {

  id: string;

  email: string;

  name: string;

  role: string;

};



const TOKEN_KEY = 'ppp_cms_token';



let resolvedApiBase =

  (process.env.NEXT_PUBLIC_CMS_API_URL as string | undefined)?.replace(/\/$/, '') || '';



let configLoadPromise: Promise<string> | null = null;



function isLocalFrontendHost(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1';
}

function productionDefaultApiBase(): string {
  // Live site uses same-origin /api + /health (Hostinger PHP proxy → Render).
  // Direct onrender.com calls often fail in-browser (CORS / Cloudflare NFT).
  return '';
}

const CMS_API_TIMEOUT_MS = 90_000;

function isAbortError(err: unknown): boolean {
  return err instanceof DOMException && err.name === 'AbortError';
}

async function fetchWithTimeout(url: string, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), CMS_API_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

/**
 * Quick health probe — useful before login on Render free tier (cold start).
 * Local Vite: apiBase is '' and `/health` is proxied (same target as `/api`).
 */
export async function checkCmsApiHealth(): Promise<boolean> {
  const apiBase = await resolveAdminApiBase();
  const healthUrl = apiBase ? `${apiBase}/health` : '/health';
  const attempts = 3;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetchWithTimeout(healthUrl, { cache: 'no-store' });
      if (!res.ok) {
        if (i < attempts - 1) await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
        continue;
      }
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (data.ok === true) return true;
    } catch {
      /* retry — Render free tier may still be waking */
    }
    if (i < attempts - 1) await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
  }
  return false;
}

function isLiveSiteHost(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host.replace(/^www\./, '') === 'hvacexitadvisors.com' || host.endsWith('.vercel.app');
}

/** Resolve CMS API origin: build env → cms-api-config.json → production default. */
async function resolveAdminApiBase(): Promise<string> {
  // Local Vite + live Hostinger: same-origin `/api` + `/health` (proxy → Render).
  // Never call onrender.com from the browser — Cloudflare NFT / CORS often break it.
  if (typeof window !== 'undefined' && (isLocalFrontendHost() || isLiveSiteHost())) {
    return '';
  }

  if (resolvedApiBase) return resolvedApiBase;

  const explicitEnv = (process.env.NEXT_PUBLIC_CMS_API_URL as string | undefined)?.trim();
  if (explicitEnv) {
    resolvedApiBase = explicitEnv.replace(/\/$/, '');
    return resolvedApiBase;
  }

  // Local Node / non-browser: leave empty so callers can still use relative paths where applicable.
  if ((process.env.NODE_ENV !== 'production') || isLocalFrontendHost()) {
    resolvedApiBase = '';
    return resolvedApiBase;
  }

  if (!configLoadPromise) {
    configLoadPromise = (async () => {
      try {
        const res = await fetch('/cms-api-config.json', { cache: 'no-store' });
        if (res.ok) {
          const data = (await res.json()) as { apiUrl?: string };
          const url = data.apiUrl?.trim().replace(/\/$/, '');
          if (url) {
            resolvedApiBase = url;
            return resolvedApiBase;
          }
        }
      } catch {
        /* ignore — fall through */
      }

      resolvedApiBase = productionDefaultApiBase();
      return resolvedApiBase;
    })();
  }

  return configLoadPromise;
}



export function getToken(): string | null {

  try {

    return localStorage.getItem(TOKEN_KEY);

  } catch {

    return null;

  }

}



export function setToken(token: string | null) {

  try {

    if (token) localStorage.setItem(TOKEN_KEY, token);

    else localStorage.removeItem(TOKEN_KEY);

  } catch {

    /* ignore */

  }

}



export function isLoggedIn(): boolean {

  return Boolean(getToken());

}



async function adminRequest<T>(

  path: string,

  options: RequestInit & { auth?: boolean } = {}

): Promise<T> {

  const apiBase = await resolveAdminApiBase();

  const { auth = true, headers: initHeaders, ...rest } = options;

  const headers = new Headers(initHeaders);



  if (!headers.has('Content-Type') && rest.body) {

    headers.set('Content-Type', 'application/json');

  }



  if (auth) {

    const token = getToken();

    if (token) {
      const bearer = `Bearer ${token}`;
      headers.set('Authorization', bearer);
      // Hostinger CGI often strips Authorization; proxy reads this fallback.
      headers.set('X-CMS-Authorization', bearer);
    }

  }



  const url = apiBase ? `${apiBase}${path}` : path;

  let res: Response;
  try {
    res = await fetchWithTimeout(url, { ...rest, headers });
  } catch (err) {
    if (isAbortError(err)) {
      const apiHint = apiBase || 'the CMS API';
      throw new Error(
        `CMS API timed out after ${CMS_API_TIMEOUT_MS / 1000}s (${apiHint}). On Render free tier the server may be waking up — open ${apiBase || 'your API URL'}/health in a new tab, wait until it shows ok:true, then try again.`
      );
    }
    const localHint =
      (process.env.NODE_ENV !== 'production') || isLocalFrontendHost()
        ? ' Start the CMS API: cd cms-backend && npm start (port 4000), then use npm run dev.'
        : ' Open /health on this site (same-origin proxy). If that fails, restart the Render service and check MongoDB + env vars.';
    throw new Error(`Cannot reach CMS API.${localHint}`);
  }



  if (res.status === 401 && auth) {

    setToken(null);

  }



  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error((data as { error?: string }).error || `Request failed (${res.status})`);
  }

  return data as T;

}



export type BlogFaq = {

  _id?: string;

  question: string;

  answer: string;

};



export type BlogSeo = {

  metaTitle?: string;

  metaDescription?: string;

  ogImage?: string;

  ogImageAlt?: string;

  canonicalUrl?: string;

  schemaType?: 'Article' | 'BlogPosting' | 'NewsArticle';

};



export type BlogCategory = {

  _id: string;

  name: string;

  slug: string;

  description?: string;

};



export type AdminBlog = {

  _id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  coverImage: string;

  coverImageAlt?: string;

  category: BlogCategory | string | null;

  tags: string[];

  faqs: BlogFaq[];

  seo: BlogSeo;

  status: 'draft' | 'published';

  publishedAt: string | null;

  author?: string;

  createdAt?: string;

  updatedAt?: string;

};



export async function login(email: string, password: string) {

  const data = await adminRequest<{ token: string; admin: AdminUser }>('/api/auth/login', {

    method: 'POST',

    auth: false,

    body: JSON.stringify({ email, password }),

  });

  setToken(data.token);

  return data;

}



export async function fetchMe() {

  return adminRequest<{ admin: AdminUser }>('/api/auth/me');

}



export async function fetchBlogs(params?: { status?: string; q?: string }) {

  const qs = new URLSearchParams();

  if (params?.status) qs.set('status', params.status);

  if (params?.q) qs.set('q', params.q);

  const query = qs.toString();

  return adminRequest<{ blogs: AdminBlog[]; pagination: { total: number } }>(

    `/api/blogs${query ? `?${query}` : ''}`

  );

}



export async function fetchBlog(id: string) {

  return adminRequest<{ blog: AdminBlog }>(`/api/blogs/${id}`);

}



export async function createBlog(body: Partial<AdminBlog>) {

  return adminRequest<{ blog: AdminBlog }>('/api/blogs', {

    method: 'POST',

    body: JSON.stringify(body),

  });

}



export async function updateBlog(id: string, body: Partial<AdminBlog>) {

  return adminRequest<{ blog: AdminBlog }>(`/api/blogs/${id}`, {

    method: 'PUT',

    body: JSON.stringify(body),

  });

}



export async function deleteBlog(id: string) {

  return adminRequest<{ ok: boolean }>(`/api/blogs/${id}`, { method: 'DELETE' });

}



export async function fetchCategories() {

  return adminRequest<{ categories: BlogCategory[] }>('/api/categories');

}



export async function createCategory(name: string) {

  return adminRequest<{ category: BlogCategory }>('/api/categories', {

    method: 'POST',

    body: JSON.stringify({ name }),

  });

}



export async function fetchPublicSlugs() {

  return adminRequest<{

    slugs: Array<{ slug: string; title: string; path: string; url: string }>;

  }>('/api/public/blogs/slugs', { auth: false });

}



const DEFAULT_CLOUDINARY_CLOUD = 'dd8rixjp0';
/** Unsigned preset name — create in Cloudinary → Settings → Upload → Upload presets (Signing mode: Unsigned). */
const DEFAULT_CLOUDINARY_PRESET = 'hvacexitadvisors_blog';

function isDurableImageUrl(url: string): boolean {
  const u = url.trim();
  return (
    u.startsWith('data:image/') ||
    /^https:\/\/res\.cloudinary\.com\//i.test(u) ||
    /^https:\/\//i.test(u)
  );
}

async function uploadCoverToCloudinaryDirect(
  blob: Blob,
  filename: string
): Promise<{ url: string } | { error: string } | null> {
  const cloudName =
    (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string | undefined)?.trim() ||
    DEFAULT_CLOUDINARY_CLOUD;
  const preset =
    (process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string | undefined)?.trim() ||
    DEFAULT_CLOUDINARY_PRESET;

  try {
    const cloudFd = new FormData();
    cloudFd.append('file', blob, filename);
    cloudFd.append('upload_preset', preset);
    cloudFd.append('folder', 'cms-blog-covers');
    const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: cloudFd,
    });
    const cloudData = (await cloudRes.json().catch(() => ({}))) as {
      secure_url?: string;
      error?: { message?: string };
    };
    if (cloudRes.ok && cloudData.secure_url) {
      return { url: cloudData.secure_url };
    }
    return {
      error:
        cloudData.error?.message ||
        `Cloudinary upload failed (${cloudRes.status}). Create unsigned preset "${preset}" in Cloudinary.`,
    };
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Cloudinary network error' };
  }
}

export async function uploadAdminImage(file: File): Promise<{ url: string }> {
  const apiBase = await resolveAdminApiBase();
  const { compressImageForCmsCover } = await import('./compressImageForCmsCover');
  const compressed = await compressImageForCmsCover(file);
  const filename = file.name.replace(/\.[^.]+$/, '.jpg') || 'cover.jpg';

  // 1) Browser → Cloudinary (durable CDN URL — shows on live frontend immediately)
  const direct = await uploadCoverToCloudinaryDirect(compressed.blob, filename);
  if (direct && 'url' in direct) {
    return { url: direct.url };
  }

  // 2) CMS API → Cloudinary (unsigned/signed) or data URL stored in Mongo
  const formData = new FormData();
  formData.append('image', compressed.blob, filename);
  formData.append('dataUrl', compressed.dataUrl);

  const token = getToken();
  const headers = new Headers();
  if (token) {
    const bearer = `Bearer ${token}`;
    headers.set('Authorization', bearer);
    headers.set('X-CMS-Authorization', bearer);
  }

  const url = apiBase ? `${apiBase}/api/uploads/image` : '/api/uploads/image';

  let res: Response;
  try {
    res = await fetch(url, { method: 'POST', headers, body: formData });
  } catch {
    if (compressed.dataUrl) return { url: compressed.dataUrl };
    throw new Error(
      direct && 'error' in direct
        ? direct.error
        : 'Upload failed — start cms-backend or set Cloudinary unsigned preset'
    );
  }

  const data = (await res.json().catch(() => ({}))) as {
    url?: string;
    dataUrl?: string;
    error?: string;
  };
  if (!res.ok) {
    if (compressed.dataUrl) return { url: compressed.dataUrl };
    throw new Error(data.error || `Upload failed (${res.status})`);
  }

  const returned = (data.url || '').trim();
  if (isDurableImageUrl(returned)) return { url: returned };
  if (data.dataUrl?.startsWith('data:')) return { url: data.dataUrl };
  if (compressed.dataUrl) return { url: compressed.dataUrl };
  if (returned) return { url: returned };

  throw new Error(
    (direct && 'error' in direct && direct.error) ||
      'Cover upload did not return a durable URL. Configure Cloudinary unsigned preset hvacexitadvisors_blog.'
  );
}

export type AdminComment = {
  _id: string;
  blog: { _id: string; title?: string; slug?: string } | null;
  blogSlug: string;
  blogTitle: string;
  authorName: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchComments(params?: { q?: string; blogSlug?: string }) {
  const qs = new URLSearchParams();
  if (params?.q) qs.set('q', params.q);
  if (params?.blogSlug) qs.set('blogSlug', params.blogSlug);
  const query = qs.toString();
  return adminRequest<{ comments: AdminComment[]; count: number }>(
    `/api/comments${query ? `?${query}` : ''}`
  );
}

export async function updateComment(id: string, body: { authorName?: string; body?: string }) {
  return adminRequest<{ comment: AdminComment }>(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export async function deleteComment(id: string) {
  return adminRequest<{ ok: boolean }>(`/api/comments/${id}`, { method: 'DELETE' });
}

export type AdminLead = {
  _id: string;
  type: 'form' | 'whatsapp';
  source: string;
  status: 'new' | 'read' | 'archived';
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  message: string;
  pagePath: string;
  pageUrl: string;
  placement: string;
  extra: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
};

export type LeadStats = {
  newForms: number;
  newWhatsapp: number;
  newTotal: number;
  totalForms?: number;
  totalWhatsapp?: number;
};

export async function fetchLeads(params?: {
  type?: 'form' | 'whatsapp' | '';
  status?: string;
  name?: string;
  location?: string;
  q?: string;
  dateFrom?: string;
  dateTo?: string;
}) {
  const qs = new URLSearchParams();
  if (params?.type) qs.set('type', params.type);
  if (params?.status) qs.set('status', params.status);
  if (params?.name) qs.set('name', params.name);
  if (params?.location) qs.set('location', params.location);
  if (params?.q) qs.set('q', params.q);
  if (params?.dateFrom) qs.set('dateFrom', params.dateFrom);
  if (params?.dateTo) qs.set('dateTo', params.dateTo);
  const query = qs.toString();
  return adminRequest<{ leads: AdminLead[]; count: number; stats: LeadStats }>(
    `/api/leads${query ? `?${query}` : ''}`
  );
}

export async function fetchLeadStats() {
  return adminRequest<LeadStats>('/api/leads/stats');
}

export async function updateLeadStatus(id: string, status: 'new' | 'read' | 'archived') {
  return adminRequest<{ lead: AdminLead }>(`/api/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

export async function markLeadsRead(type?: 'form' | 'whatsapp') {
  return adminRequest<{ ok: boolean; modified: number }>('/api/leads/mark-read', {
    method: 'POST',
    body: JSON.stringify(type ? { type } : {}),
  });
}

export async function deleteLead(id: string) {
  return adminRequest<{ ok: boolean }>(`/api/leads/${id}`, { method: 'DELETE' });
}




// --- LISTINGS API ---
export type AdminListing = {
  _id: string;
  title: string;
  slug: string;
  status: 'Active' | 'Under Contract' | 'Sold' | 'Draft';
  location?: string;
  industry?: string;
  askingPrice?: number;
  revenue?: number;
  cashFlow?: number;
  ebitda?: number;
  description?: string;
  realEstate?: string;
  ffe?: string;
  inventory?: string;
  employees?: string;
  yearEstablished?: string;
  reasonSelling?: string;
  supportTraining?: string;
  marketCompetition?: string;
  coverImage?: string;
  coverImageAlt?: string;
  faqs?: BlogFaq[];
  seo?: BlogSeo;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchListings(filters: { status?: string; q?: string } = {}) {
  const qs = new URLSearchParams();
  if (filters.status) qs.set('status', filters.status);
  if (filters.q) qs.set('q', filters.q);
  const data = await adminRequest<{ listings: AdminListing[] }>(`/api/listings?${qs.toString()}`);
  return data.listings;
}

export async function getListing(id: string) {
  const data = await adminRequest<{ listing: AdminListing }>(`/api/listings/${id}`);
  return data.listing;
}

export async function createListing(payload: Partial<AdminListing>) {
  const data = await adminRequest<{ listing: AdminListing }>('/api/listings', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return data.listing;
}

export async function updateListing(id: string, payload: Partial<AdminListing>) {
  const data = await adminRequest<{ listing: AdminListing }>(`/api/listings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
  return data.listing;
}

export async function deleteListing(id: string) {
  await adminRequest<{ success: boolean }>(`/api/listings/${id}`, { method: 'DELETE' });
}
