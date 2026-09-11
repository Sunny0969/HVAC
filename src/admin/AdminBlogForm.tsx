import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  createBlog,
  createCategory,
  fetchBlog,
  fetchCategories,
  updateBlog,
  type BlogCategory,
  type BlogFaq,
  type BlogSeo,
} from './api';
import BlogEditor from './BlogEditor';
import AdminImageField from './AdminImageField';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const emptySeo: BlogSeo = {
  metaTitle: '',
  metaDescription: '',
  ogImage: '',
  ogImageAlt: '',
  canonicalUrl: '',
  schemaType: 'BlogPosting',
};

export default function AdminBlogForm() {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  /** When true, slug stays as typed; otherwise it follows the title. */
  const [slugManual, setSlugManual] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [coverImageAlt, setCoverImageAlt] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [tags, setTags] = useState('');
  const [faqs, setFaqs] = useState<BlogFaq[]>([{ question: '', answer: '' }]);
  const [seo, setSeo] = useState<BlogSeo>(emptySeo);
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  useEffect(() => {
    void fetchCategories()
      .then((data) => setCategories(data.categories))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      try {
        const { blog } = await fetchBlog(id);
        if (cancelled) return;
        setTitle(blog.title);
        setSlug(blog.slug);
        setSlugManual(false);
        setExcerpt(blog.excerpt || '');
        setContent(blog.content || '');
        setCoverImage(blog.coverImage || '');
        setCoverImageAlt(blog.coverImageAlt || '');
        setCategoryId(
          blog.category && typeof blog.category === 'object'
            ? blog.category._id
            : typeof blog.category === 'string'
              ? blog.category
              : ''
        );
        setTags((blog.tags || []).join(', '));
        setFaqs(blog.faqs?.length ? blog.faqs : [{ question: '', answer: '' }]);
        setSeo({ ...emptySeo, ...blog.seo });
        setStatus(blog.status);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const autoSlug = useMemo(() => slugify(title), [title]);

  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugManual) setSlug(slugify(value));
  }

  function resetSlugFromTitle() {
    setSlugManual(false);
    setSlug(slugify(title));
  }

  async function addCategory() {
    const name = window.prompt('New category name');
    if (!name?.trim()) return;
    try {
      const { category } = await createCategory(name.trim());
      setCategories((prev) => [...prev, category].sort((a, b) => a.name.localeCompare(b.name)));
      setCategoryId(category._id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create category');
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSaving(true);

    const body = {
      title: title.trim(),
      slug: slug.trim() || autoSlug,
      excerpt: excerpt.trim(),
      content,
      coverImage: coverImage.trim(),
      coverImageAlt: coverImageAlt.trim(),
      category: categoryId || null,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      faqs: faqs
        .map((f) => ({
          question: f.question.trim(),
          answer: f.answer.trim(),
        }))
        .filter((f) => f.question && f.answer),
      seo: {
        metaTitle: seo.metaTitle?.trim() || '',
        metaDescription: seo.metaDescription?.trim() || '',
        ogImage: seo.ogImage?.trim() || '',
        ogImageAlt: seo.ogImageAlt?.trim() || '',
        canonicalUrl: seo.canonicalUrl?.trim() || '',
        schemaType: seo.schemaType || 'BlogPosting',
      },
      status,
    };

    try {
      if (isEdit && id) {
        await updateBlog(id, body as never);
        navigate('/blogs');
      } else {
        const { blog } = await createBlog(body as never);
        navigate(`/blogs/${blog._id}/edit`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="admin-page">
        <p className="admin-muted">Loading blog…</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1>{isEdit ? 'Edit blog' : 'New blog'}</h1>
          <p className="admin-muted">
            <Link to="/blogs">← Back to list</Link>
          </p>
        </div>
      </header>

      {error ? <p className="admin-error">{error}</p> : null}

      <form className="admin-form" onSubmit={(e) => void onSubmit(e)}>
        <label className="admin-field">
          <span>Title</span>
          <input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            required
            placeholder="Blog title"
          />
        </label>

        <label className="admin-field">
          <span>
            Slug{' '}
            <small className="admin-muted">
              {slugManual ? '(custom — edit below)' : '(auto from title)'}
            </small>
          </span>
          <input
            value={slug}
            onChange={(e) => {
              setSlugManual(true);
              setSlug(slugify(e.target.value));
            }}
            required
            placeholder="Generated when you enter a title"
          />
          <small className="admin-muted">
            URL: /blog/{slug || autoSlug || '…'}
            {slugManual ? (
              <>
                {' '}
                ·{' '}
                <button
                  type="button"
                  className="admin-link-btn"
                  onClick={resetSlugFromTitle}
                >
                  Reset from title
                </button>
              </>
            ) : null}
          </small>
        </label>

        <label className="admin-field">
          <span>Excerpt</span>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            placeholder="Short summary for listings and meta"
          />
        </label>

        <div className="admin-field">
          <span>Content</span>
          <BlogEditor value={content} onChange={setContent} />
        </div>

        <AdminImageField
          label="Cover image"
          url={coverImage}
          alt={coverImageAlt}
          onUrlChange={setCoverImage}
          onAltChange={setCoverImageAlt}
          urlPlaceholder="/Images/… or https://…"
        />

        <div className="admin-row">
          <label className="admin-field">
            <span>Category</span>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              <option value="">— None —</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="admin-btn admin-btn-ghost" onClick={() => void addCategory()}>
            Add category
          </button>
        </div>

        <label className="admin-field">
          <span>Tags (comma-separated)</span>
          <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Amazon FBA, 3PL" />
        </label>

        <fieldset className="admin-fieldset">
          <legend>FAQs</legend>
          {faqs.map((faq, i) => (
            <div key={i} className="admin-faq-row">
              <input
                placeholder="Question"
                value={faq.question}
                onChange={(e) => {
                  const next = [...faqs];
                  next[i] = { ...next[i], question: e.target.value };
                  setFaqs(next);
                }}
              />
              <textarea
                placeholder="Answer"
                rows={2}
                value={faq.answer}
                onChange={(e) => {
                  const next = [...faqs];
                  next[i] = { ...next[i], answer: e.target.value };
                  setFaqs(next);
                }}
              />
              <button
                type="button"
                className="admin-btn admin-btn-ghost"
                onClick={() => setFaqs(faqs.filter((_, idx) => idx !== i))}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="admin-btn admin-btn-ghost"
            onClick={() => setFaqs([...faqs, { question: '', answer: '' }])}
          >
            Add FAQ
          </button>
        </fieldset>

        <fieldset className="admin-fieldset">
          <legend>SEO</legend>
          <label className="admin-field">
            <span>Meta title</span>
            <input
              value={seo.metaTitle || ''}
              onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })}
            />
          </label>
          <label className="admin-field">
            <span>Meta description</span>
            <textarea
              rows={2}
              value={seo.metaDescription || ''}
              onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })}
            />
          </label>
          <label className="admin-field">
            <span>Schema type</span>
            <select
              value={seo.schemaType || 'BlogPosting'}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  schemaType: e.target.value as BlogSeo['schemaType'],
                })
              }
            >
              <option value="BlogPosting">BlogPosting</option>
              <option value="Article">Article</option>
              <option value="NewsArticle">NewsArticle</option>
            </select>
          </label>
        </fieldset>

        <label className="admin-field">
          <span>Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create blog'}
          </button>
          <Link to="/blogs" className="admin-btn admin-btn-ghost">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
