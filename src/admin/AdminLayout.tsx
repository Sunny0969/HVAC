import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';
import { fetchLeadStats } from './api';
import './Admin.css';

export default function AdminLayout() {
  const { admin, logout } = useAdminAuth();
  const [newTotal, setNewTotal] = useState(0);
  const [newForms, setNewForms] = useState(0);
  const [newWhatsapp, setNewWhatsapp] = useState(0);

  const refreshBadge = useCallback(async () => {
    try {
      const stats = await fetchLeadStats();
      setNewTotal(stats.newTotal || 0);
      setNewForms(stats.newForms || 0);
      setNewWhatsapp(stats.newWhatsapp || 0);
    } catch {
      /* ignore — badge is best-effort */
    }
  }, []);

  useEffect(() => {
    void refreshBadge();
    const id = window.setInterval(() => void refreshBadge(), 45_000);
    const onFocus = () => void refreshBadge();
    const onLeads = () => void refreshBadge();
    window.addEventListener('focus', onFocus);
    window.addEventListener('hvac-leads-updated', onLeads);
    return () => {
      window.clearInterval(id);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('hvac-leads-updated', onLeads);
    };
  }, [refreshBadge]);

  return (
    <div className="admin-shell">
      <>
        <title>Admin | HVAC CMS</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </>

      <aside className="admin-sidebar">
        <div className="admin-brand">
          <Link to="/">HVAC CMS</Link>
          <span>Blog &amp; inbox</span>
        </div>
        <nav className="admin-nav" aria-label="Admin">
          <NavLink to="/dashboard" end>
            Dashboard
          </NavLink>
          <NavLink to="/leads" className="admin-nav-with-badge">
            Inbox
            {newTotal > 0 ? (
              <span className="admin-nav-badge" title={`${newForms} new messages Â· ${newWhatsapp} WhatsApp clicks`}>
                {newTotal > 99 ? '99+' : newTotal}
              </span>
            ) : null}
          </NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/comments">Comments</NavLink>
          <NavLink to="/blogs/new">New blog</NavLink>
        </nav>
        <div className="admin-sidebar-foot">
          <p className="admin-user">{admin?.email}</p>
          <button type="button" className="admin-btn admin-btn-ghost" onClick={logout}>
            Log out
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}
