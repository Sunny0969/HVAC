import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';

export default function RequireAdminAuth({ children }: { children: React.ReactNode }) {
  const { ready, admin } = useAdminAuth();
  const location = useLocation();

  if (!ready) {
    return (
      <div className="admin-loading" role="status">
        Checking session…
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
