import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBlog, fetchBlogs, type AdminBlog } from './api';

export default function AdminBlogList() {
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [status, setStatus] = useState('');
  const [q, setQ] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchBlogs({
        status: status || undefined,
        q: q.trim() || undefined,
      });
      setBlogs(data.blogs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load blogs');
    } finally {
      setLoading(false);
    }
  }, [status, q]);

  useEffect(() => {
    void load();
  }, [load]);

  async function onDelete(id: string, title: string) {
    if (!window.confirm(`Delete “${title}”? This cannot be undone.`)) return;
    try {
      await deleteBlog(id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1>Blogs</h1>
          <p className="admin-muted">Create, edit and publish posts.</p>
        </div>
        <Link to="/blogs/new" className="admin-btn admin-btn-primary">
          New blog
        </Link>
      </header>

      <div className="admin-filters">
        <input
          type="search"
          placeholder="Search title or slug…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          <option value="">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {error ? <p className="admin-error">{error}</p> : null}

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="admin-empty">No blogs found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Author</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b._id}>
                <td>
                  <Link to={`/blogs/${b._id}/edit`}>{b.title}</Link>
                </td>
                <td>
                  <span className={`admin-status admin-status-${b.status}`}>{b.status}</span>
                </td>
                <td>{b.author?.name || '—'}</td>
                <td>{new Date(b.createdAt).toLocaleString()}</td>
                <td>{b.updatedAt ? new Date(b.updatedAt).toLocaleString() : '—'}</td>
                <td className="admin-table-actions">
                  <Link to={`/blogs/${b._id}/edit`}>Edit</Link>
                  {b.status === 'published' ? (
                    <a href={`/blog/${b.slug}`} target="_blank" rel="noreferrer">
                      View
                    </a>
                  ) : null}
                  <button type="button" className="admin-link-danger" onClick={() => void onDelete(b._id, b.title)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
