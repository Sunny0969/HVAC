import { useEffect, useState, type FormEvent } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';
import { checkCmsApiHealth } from './api';
import './Admin.css';

export default function AdminLogin() {
  const { ready, admin, login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as { from?: string } | null)?.from &&
    (location.state as { from: string }).from.startsWith('/')
      ? (location.state as { from: string }).from
      : '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [slowHint, setSlowHint] = useState(false);
  const [apiStatus, setApiStatus] = useState<'checking' | 'ok' | 'down'>('checking');

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const ok = await checkCmsApiHealth();
      if (!cancelled) setApiStatus(ok ? 'ok' : 'down');
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      setSlowHint(false);
      return undefined;
    }
    const t = window.setTimeout(() => setSlowHint(true), 15_000);
    return () => window.clearTimeout(t);
  }, [loading]);

  if (ready && admin) {
    return <Navigate to={from} replace />;
  }

  async function recheckApi() {
    setApiStatus('checking');
    const ok = await checkCmsApiHealth();
    setApiStatus(ok ? 'ok' : 'down');
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  const isLocalDev =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className="admin-login-page">
      <>
        <title>Admin login | Pick Pack Pro</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </>

      <form className="admin-login-card" onSubmit={onSubmit}>
        <h1>CMS login</h1>
        <p className="admin-muted">Private blog admin — not linked from the public site.</p>

        {apiStatus === 'checking' ? (
          <p className="admin-muted" role="status">
            Checking CMS API…
          </p>
        ) : null}

        {apiStatus === 'down' ? (
          <p className="admin-error" role="status">
            {isLocalDev ? (
              <>
                CMS API proxy is not responding. Stop and restart <code>npm run dev</code> (Vite must reload
                proxy config). For a local backend set{' '}
                <code>VITE_CMS_PROXY_TARGET=http://localhost:4000</code> and run <code>cms-backend</code> on port
                4000. Default proxy uses Render — first request after idle can take ~60s. You can still try Sign
                in.
              </>
            ) : (
              <>
                CMS API is not responding. Try{' '}
                <a href="/health" target="_blank" rel="noreferrer">
                  /health
                </a>{' '}
                on this site (proxies to Render). If that fails, restart the Render service and check
                MongoDB Atlas + env vars. You can still try Sign in after the API wakes.
              </>
            )}{' '}
            <button type="button" className="admin-btn" onClick={() => void recheckApi()}>
              Retry check
            </button>
          </p>
        ) : null}

        {error ? (
          <p className="admin-error" role="alert">
            {error}
          </p>
        ) : null}

        {loading && slowHint ? (
          <p className="admin-muted" role="status">
            Still connecting… Render free tier can take up to 60 seconds on first request after idle.
          </p>
        ) : null}

        <label className="admin-field">
          <span>Username</span>
          <input
            type="text"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="hvacexitadvisors"
          />
        </label>

        <label className="admin-field">
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
