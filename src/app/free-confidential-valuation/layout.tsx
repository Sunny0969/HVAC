import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidential Review of Your HVAC Business | HVAC Exit Advisors',
  description: 'Request a free, confidential valuation review for your Florida HVAC business to understand its market value, valuation drivers, and readiness for sale.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/free-confidential-valuation',
  },
  openGraph: {
    title: 'Confidential Review of Your HVAC Business | HVAC Exit Advisors',
    description: 'Request a free, confidential valuation review for your Florida HVAC business to understand its market value, valuation drivers, and readiness for sale.',
    url: 'https://www.hvacexitadvisors.com/free-confidential-valuation',
    images: [{ url: 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789541386/hvac-hero-images/free_confidential_hero.jpg', width: 1200, height: 630, alt: 'Confidential HVAC Business Valuation' }]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
