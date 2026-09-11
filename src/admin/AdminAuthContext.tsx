import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  fetchMe,
  getToken,
  isLoggedIn,
  login as apiLogin,
  setToken,
  type AdminUser,
} from './api';

type AuthState = {
  ready: boolean;
  admin: AdminUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AdminAuthContext = createContext<AuthState | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!isLoggedIn()) {
        if (!cancelled) {
          setAdmin(null);
          setReady(true);
        }
        return;
      }

      try {
        const { admin: me } = await fetchMe();
        if (!cancelled) setAdmin(me);
      } catch {
        setToken(null);
        if (!cancelled) setAdmin(null);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const data = await apiLogin(email, password);
    setAdmin(data.admin);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setAdmin(null);
  }, []);

  const value = useMemo(
    () => ({
      ready,
      admin: admin && getToken() ? admin : null,
      login,
      logout,
    }),
    [ready, admin, login, logout]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

/** Wraps all /admin child routes with CMS auth context. */
export function AdminAuthOutlet() {
  return (
    <AdminAuthProvider>
      <Outlet />
    </AdminAuthProvider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
