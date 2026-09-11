import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from './api';

export default function AdminDashboard() {
  const [total, setTotal] = useState(0);
  const [published, setPublished] = useState(0);
  const [drafts, setDrafts] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [all, pub, draft] = await Promise.all([
          fetchBlogs(),
          fetchBlogs({ status: 'published' }),
          fetchBlogs({ status: 'draft' }),
        ]);
        if (cancelled) return;
        setTotal(all.pagination.total);
        setPublished(pub.pagination.total);
        setDrafts(draft.pagination.total);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="admin-muted">Manage HVAC Exit Advisors blog posts.</p>
        </div>
        <Link to="/blogs/new" className="admin-btn admin-btn-primary">
          New blog
        </Link>
      </header>

      {error ? <p className="admin-error">{error}</p> : null}

      <div className="admin-stats">
        <div className="admin-stat-card">
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <div className="admin-stat-card">
          <span>Published</span>
          <strong>{published}</strong>
        </div>
        <div className="admin-stat-card">
          <span>Drafts</span>
          <strong>{drafts}</strong>
        </div>
      </div>

      <p>
        <Link to="/blogs">View all blogs ?</Link>
      </p>
    </div>
  );
}

