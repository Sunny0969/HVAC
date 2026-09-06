import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms Of Service',
  description: 'Expert services for terms of service.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Terms Of Service</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Content for Terms Of Service</h2>
      <div className="prose max-w-none text-black">
        <p>This page is fully SEO optimized with real DOM content. Animated components can be layered on top.</p>
      </div>
    </div>
  );
}
