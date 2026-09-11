import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteListing, fetchListings, type AdminListing } from './api';

export default function AdminListingList() {
  const [listings, setListings] = useState<AdminListing[]>([]);
  const [status, setStatus] = useState('');
  const [q, setQ] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchListings({
        status: status || undefined,
        q: q.trim() || undefined,
      });
      setListings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load listings');
    } finally {
      setLoading(false);
    }
  }, [status, q]);

  useEffect(() => {
    void load();
  }, [load]);

  const onDelete = async (id: string, title: string) => {
    if (!window.confirm(`Delete listing "${title}"?`)) return;
    try {
      await deleteListing(id);
      void load();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  const formatMoney = (val?: number) => {
    if (val == null) return '—';
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${Math.round(val / 1000)}k`;
    return `$${val}`;
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Listings</h1>
        <Link to="/listings/new" className="admin-btn">
          + New Listing
        </Link>
      </div>

      <div className="admin-filters">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Under Contract">Under Contract</option>
          <option value="Sold">Sold</option>
          <option value="Draft">Draft</option>
        </select>
        <input
          type="search"
          placeholder="Search by title or location..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {error && <div className="admin-error">{error}</div>}

      {loading ? (
        <p>Loading listings...</p>
      ) : listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Price</th>
                <th>Revenue</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((l) => (
                <tr key={l._id}>
                  <td>
                    <Link to={`/listings/${l._id}/edit`}>{l.title}</Link>
                  </td>
                  <td>
                    <span className={`admin-status admin-status-${l.status.toLowerCase().replace(' ', '-')}`}>
                      {l.status}
                    </span>
                  </td>
                  <td>{formatMoney(l.askingPrice)}</td>
                  <td>{formatMoney(l.revenue)}</td>
                  <td>{l.location || '—'}</td>
                  <td className="admin-table-actions">
                    <Link to={`/listings/${l._id}/edit`}>Edit</Link>
                    {l.status !== 'Draft' ? (
                      <a href={`/listings/${l.slug}`} target="_blank" rel="noreferrer">
                        View
                      </a>
                    ) : null}
                    <button type="button" className="admin-link-danger" onClick={() => void onDelete(l._id, l.title)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
