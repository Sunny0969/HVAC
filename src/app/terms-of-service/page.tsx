import { Metadata } from 'next';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Terms of Service | HVAC Exit Advisors',
  description: 'Terms of Service for HVAC Exit Advisors.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/terms-of-service'
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Terms of Service', item: 'https://www.hvacexitadvisors.com/terms-of-service' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
      <BreadcrumbSchema items={breadcrumbs} />
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <span>/</span>
        <span className="text-primary">Terms of Service</span>
      </nav>
      <h1 className="text-4xl font-bold text-primary mb-6">Terms of Service</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Content for Terms of Service</h2>
      <div className="prose max-w-none text-black">
        <p>This page is fully SEO optimized with real DOM content. Animated components can be layered on top.</p>
      </div>
    </div>
  );
}
