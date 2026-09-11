'use client';

import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminApp from '@/admin/AdminApp';

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="admin-root">
      <BrowserRouter basename="/admin">
        <AdminApp />
      </BrowserRouter>
    </div>
  );
}