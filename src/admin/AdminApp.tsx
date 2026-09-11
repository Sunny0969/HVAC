import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminAuthProvider } from './AdminAuthContext';
import RequireAdminAuth from './RequireAdminAuth';
import AdminLayout from './AdminLayout';
import AdminDashboard from './AdminDashboard';
import AdminListingList from './AdminListingList';
import AdminListingForm from './AdminListingForm';
import AdminBlogList from './AdminBlogList';
import AdminBlogForm from './AdminBlogForm';
import AdminLeads from './AdminLeads';
import AdminCommentList from './AdminCommentList';
import AdminLogin from './AdminLogin';

export default function AdminApp() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/"
          element={
            <RequireAdminAuth>
              <AdminLayout />
            </RequireAdminAuth>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="listings" element={<AdminListingList />} />
          <Route path="listings/new" element={<AdminListingForm />} />
          <Route path="listings/:id/edit" element={<AdminListingForm />} />
          <Route path="blogs" element={<AdminBlogList />} />
          <Route path="blogs/new" element={<AdminBlogForm />} />
          <Route path="blogs/edit/:id" element={<AdminBlogForm />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="comments" element={<AdminCommentList />} />
        </Route>
      </Routes>
    </AdminAuthProvider>
  );
}

