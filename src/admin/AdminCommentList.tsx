import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteComment,
  fetchComments,
  updateComment,
  type AdminComment,
} from './api';

export default function AdminCommentList() {
  const [comments, setComments] = useState<AdminComment[]>([]);
  const [q, setQ] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editBody, setEditBody] = useState('');
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchComments({ q: q.trim() || undefined });
      setComments(data.comments);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load comments');
    } finally {
      setLoading(false);
    }
  }, [q]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(c: AdminComment) {
    setEditingId(c._id);
    setEditName(c.authorName);
    setEditBody(c.body);
    setError('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditName('');
    setEditBody('');
  }

  async function saveEdit(id: string) {
    setSaving(true);
    setError('');
    try {
      await updateComment(id, { authorName: editName.trim(), body: editBody.trim() });
      cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id: string, authorName: string) {
    if (!window.confirm(`Delete comment by “${authorName}”? This cannot be undone.`)) return;
    try {
      await deleteComment(id);
      if (editingId === id) cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1>Comments</h1>
          <p className="admin-muted">All blog comments — edit or delete as needed. Visitors cannot edit their own comments.</p>
        </div>
      </header>

      <div className="admin-filters">
        <input
          type="search"
          placeholder="Search name, comment, or blog…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="admin-btn admin-btn-ghost" onClick={() => void load()}>
          Refresh
        </button>
      </div>

      {error ? <p className="admin-error">{error}</p> : null}
      {loading ? <p className="admin-muted">Loading…</p> : null}

      {!loading && comments.length === 0 ? (
        <p className="admin-muted">No comments yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Blog</th>
                <th>Author</th>
                <th>Comment</th>
                <th>Posted</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {comments.map((c) => {
                const blogTitle = c.blogTitle || c.blog?.title || c.blogSlug;
                const blogSlug = c.blog?.slug || c.blogSlug;
                const isEditing = editingId === c._id;

                return (
                  <tr key={c._id}>
                    <td>
                      <div className="admin-comment-blog">
                        <strong>{blogTitle}</strong>
                        <code>{blogSlug}</code>
                        {blogSlug ? (
                          <a href={`/blog/${blogSlug}`} target="_blank" rel="noreferrer">
                            View blog
                          </a>
                        ) : null}
                        {c.blog?._id ? (
                          <Link to={`/blogs/${c.blog._id}/edit`}>Edit blog</Link>
                        ) : null}
                      </div>
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          className="admin-inline-input"
                          value={editName}
                          maxLength={80}
                          onChange={(e) => setEditName(e.target.value)}
                          disabled={saving}
                        />
                      ) : (
                        c.authorName
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <textarea
                          className="admin-inline-textarea"
                          rows={3}
                          value={editBody}
                          maxLength={2000}
                          onChange={(e) => setEditBody(e.target.value)}
                          disabled={saving}
                        />
                      ) : (
                        <span className="admin-comment-body">{c.body}</span>
                      )}
                    </td>
                    <td>{c.createdAt ? new Date(c.createdAt).toLocaleString() : '—'}</td>
                    <td className="admin-table-actions">
                      {isEditing ? (
                        <>
                          <button
                            type="button"
                            className="admin-btn admin-btn-primary"
                            disabled={saving}
                            onClick={() => void saveEdit(c._id)}
                          >
                            {saving ? 'Saving…' : 'Save'}
                          </button>
                          <button type="button" className="admin-btn admin-btn-ghost" disabled={saving} onClick={cancelEdit}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button type="button" className="admin-link-btn" onClick={() => startEdit(c)}>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="admin-link-danger"
                            onClick={() => void onDelete(c._id, c.authorName)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
