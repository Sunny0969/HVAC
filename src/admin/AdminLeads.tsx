import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  deleteLead,
  fetchLeads,
  markLeadsRead,
  updateLeadStatus,
  type AdminLead,
  type LeadStats,
} from './api';

type Tab = 'form' | 'whatsapp';

function formatDateTime(iso?: string) {
  if (!iso) return '—';
  try {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Europe/London',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function sourceLabel(source: string) {
  return source
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AdminLeads() {
  const [tab, setTab] = useState<Tab>('form');
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [stats, setStats] = useState<LeadStats>({ newForms: 0, newWhatsapp: 0, newTotal: 0 });
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [status, setStatus] = useState('');
  const [q, setQ] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchLeads({
        type: tab,
        name: name.trim() || undefined,
        location: location.trim() || undefined,
        dateFrom: dateFrom || undefined,
        dateTo: dateTo || undefined,
        status: status || undefined,
        q: q.trim() || undefined,
      });
      setLeads(data.leads);
      setStats(data.stats);
      window.dispatchEvent(new CustomEvent('ppp-leads-updated'));
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to load leads';
      if (/Route not found.*\/api\/leads/i.test(msg)) {
        setError(
          'Inbox API is missing on the CMS server. Deploy the latest cms-backend to Render (includes /api/leads), wait for the deploy to finish, then click Refresh. For local testing: run cms-backend on port 4000 and set VITE_CMS_PROXY_TARGET=http://localhost:4000 in my-app/.env then restart npm run dev.'
        );
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }, [tab, name, location, dateFrom, dateTo, status, q]);

  useEffect(() => {
    void load();
  }, [load]);

  const newBadge = useMemo(() => {
    if (tab === 'form') return stats.newForms;
    return stats.newWhatsapp;
  }, [tab, stats]);

  async function onMarkAllRead() {
    try {
      await markLeadsRead(tab);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not mark as read');
    }
  }

  async function onMarkRead(id: string) {
    try {
      await updateLeadStatus(id, 'read');
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
    }
  }

  async function onDelete(id: string) {
    if (!window.confirm('Delete this record permanently?')) return;
    try {
      await deleteLead(id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1>Inbox</h1>
          <p className="admin-muted">
            Contact form submissions and WhatsApp clicks. Formspree emails are unchanged — this is your admin log.
          </p>
        </div>
        <div className="admin-header-actions">
          {newBadge > 0 ? (
            <span className="admin-badge-pill" title="Unread items in this tab">
              {newBadge} new {tab === 'form' ? (newBadge === 1 ? 'message' : 'messages') : newBadge === 1 ? 'click' : 'clicks'}
            </span>
          ) : null}
          <button type="button" className="admin-btn admin-btn-ghost" onClick={() => void load()}>
            Refresh
          </button>
          {newBadge > 0 ? (
            <button type="button" className="admin-btn" onClick={() => void onMarkAllRead()}>
              Mark all read
            </button>
          ) : null}
        </div>
      </header>

      <div className="admin-tabs" role="tablist" aria-label="Inbox type">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'form'}
          className={`admin-tab${tab === 'form' ? ' is-active' : ''}`}
          onClick={() => setTab('form')}
        >
          Form messages
          {stats.newForms > 0 ? <span className="admin-tab-count">{stats.newForms}</span> : null}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'whatsapp'}
          className={`admin-tab${tab === 'whatsapp' ? ' is-active' : ''}`}
          onClick={() => setTab('whatsapp')}
        >
          WhatsApp clicks
          {stats.newWhatsapp > 0 ? <span className="admin-tab-count">{stats.newWhatsapp}</span> : null}
        </button>
      </div>

      <div className="admin-filters admin-filters-grid">
        {tab === 'form' ? (
          <input
            type="search"
            placeholder="Filter by name…"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : null}
        <input
          type="search"
          placeholder="Filter by location / page…"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} aria-label="From date" />
        <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} aria-label="To date" />
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status">
          <option value="">All statuses</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="archived">Archived</option>
        </select>
        <input
          type="search"
          placeholder="Search email, phone, message…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {error ? <p className="admin-error">{error}</p> : null}
      {loading ? <p className="admin-muted">Loading…</p> : null}

      {!loading && leads.length === 0 ? (
        <p className="admin-muted">
          {tab === 'form' ? 'No form submissions yet.' : 'No WhatsApp clicks tracked yet.'}
        </p>
      ) : null}

      {!loading && leads.length > 0 && tab === 'form' ? (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Date &amp; time</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Company</th>
                <th>Location (page)</th>
                <th>Source</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id} className={lead.status === 'new' ? 'admin-row-new' : undefined}>
                  <td>
                    <span className={`admin-status-dot admin-status-${lead.status}`}>{lead.status}</span>
                  </td>
                  <td className="admin-nowrap">{formatDateTime(lead.createdAt)}</td>
                  <td>
                    <strong>{lead.name || '—'}</strong>
                  </td>
                  <td>
                    <div className="admin-stack-cell">
                      {lead.email ? <a href={`mailto:${lead.email}`}>{lead.email}</a> : <span>—</span>}
                      {lead.phone ? <span>{lead.phone}</span> : null}
                    </div>
                  </td>
                  <td>{lead.company || '—'}</td>
                  <td>
                    <code className="admin-code">{lead.location || lead.pagePath || '—'}</code>
                  </td>
                  <td>{sourceLabel(lead.source)}</td>
                  <td>
                    <button
                      type="button"
                      className="admin-linkish"
                      onClick={() => setExpandedId(expandedId === lead._id ? null : lead._id)}
                    >
                      {expandedId === lead._id ? 'Hide' : 'View'}
                    </button>
                    {expandedId === lead._id ? (
                      <pre className="admin-lead-detail">{lead.message || JSON.stringify(lead.extra, null, 2)}</pre>
                    ) : (
                      <span className="admin-muted admin-ellipsis">{lead.message || '—'}</span>
                    )}
                  </td>
                  <td className="admin-actions-cell">
                    {lead.status === 'new' ? (
                      <button type="button" className="admin-btn admin-btn-ghost" onClick={() => void onMarkRead(lead._id)}>
                        Mark read
                      </button>
                    ) : null}
                    <button type="button" className="admin-btn admin-btn-danger" onClick={() => void onDelete(lead._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {!loading && leads.length > 0 && tab === 'whatsapp' ? (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Date &amp; time</th>
                <th>Event</th>
                <th>Placement</th>
                <th>Location (page)</th>
                <th>Page URL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id} className={lead.status === 'new' ? 'admin-row-new' : undefined}>
                  <td>
                    <span className={`admin-status-dot admin-status-${lead.status}`}>{lead.status}</span>
                  </td>
                  <td className="admin-nowrap">{formatDateTime(lead.createdAt)}</td>
                  <td>
                    <strong>1 click on WhatsApp</strong>
                  </td>
                  <td>{lead.placement || lead.source}</td>
                  <td>
                    <code className="admin-code">{lead.location || lead.pagePath || '—'}</code>
                  </td>
                  <td>
                    {lead.pageUrl ? (
                      <a href={lead.pageUrl} target="_blank" rel="noreferrer">
                        Open page
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="admin-actions-cell">
                    {lead.status === 'new' ? (
                      <button type="button" className="admin-btn admin-btn-ghost" onClick={() => void onMarkRead(lead._id)}>
                        Mark read
                      </button>
                    ) : null}
                    <button type="button" className="admin-btn admin-btn-danger" onClick={() => void onDelete(lead._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
