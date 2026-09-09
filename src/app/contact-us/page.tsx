import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Contact a Florida HVAC Business Broker',
  description: 'Reach out to HVAC Exit Advisors for a confidential consultation about buying or selling an HVAC business in Florida. Speak directly with our expert team now!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/contact-us',
  },
  openGraph: {
    title: 'Contact a Florida HVAC Business Broker | HVAC Exit Advisors',
    description: 'Reach out to HVAC Exit Advisors for a confidential consultation about buying or selling an HVAC business in Florida. Speak directly with our expert team now!',
    url: 'https://www.hvacexitadvisors.com/contact-us',
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Contact Us', item: 'https://www.hvacexitadvisors.com/contact-us' }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HVAC Exit Advisors",
    "description": "Confidential consultation for buyers and sellers of heating, ventilation, and air conditioning businesses in Florida.",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "HVAC Exit Advisors",
      "telephone": "+1-954-864-9161",
      "email": "contact@hvacexitadvisors.com",
      "url": "https://www.hvacexitadvisors.com",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10242 NW 47th St, Ste 39C",
        "addressLocality": "Sunrise",
        "addressRegion": "FL",
        "postalCode": "33351",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.1587,
        "longitude": -80.2858
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      }
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#022B3A]">Contact Us</span>
        </nav>

        <h1 className="text-4xl font-bold text-primary mb-6">Contact Our Florida HVAC Business Brokers</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">Confidential Consultation for Buyers and Sellers</h2>
        <div className="prose max-w-none text-black mt-8">
          <p className="text-lg leading-relaxed mb-6">
            Are you ready to speak with an expert <strong>Florida HVAC business broker</strong>? Whether you are looking to <Link href="/sell-your-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">sell your lifelong heating and cooling company</Link> or you are a qualified buyer seeking profitable HVAC acquisitions in the state, HVAC Exit Advisors is here to help. Contact us today for a completely confidential consultation.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Why Contact HVAC Exit Advisors?</h3>
          <p className="mb-4">
            Choosing the right broker can make a massive difference in your final exit value. We don't just list businesses; we actively match high-performing residential and commercial HVAC contractors with premium buyers. Here is why owners across Florida trust us:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>100% Confidentiality:</strong> Your employees, competitors, and customers will not know you are selling. We use blind profiles and strict Non-Disclosure Agreements (NDAs).</li>
            <li><strong>HVAC Industry Expertise:</strong> We only broker HVAC companies. We understand maintenance agreements, fleet valuations, and seasonality better than generalist brokers.</li>
            <li><strong>No Upfront Fees:</strong> We operate on a success fee basis. We only get paid when you successfully close the sale of your business.</li>
            <li><strong>Extensive Buyer Network:</strong> We have direct access to private equity groups, strategic acquirers, and high-net-worth individuals actively looking to <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">buy HVAC companies in Florida</Link>.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">How the Process Works</h3>
          <p className="mb-4">
            When you reach out to us, there is no high-pressure sales pitch. Our first step is a simple, private conversation to understand your goals. If you are a seller, we will discuss your timeline and provide a <Link href="/free-valuation" className="text-[#EE5B2C] hover:underline font-bold">free business valuation</Link>. If you are a buyer, we will learn about your investment criteria, preferred Florida markets, and financial capacity.
          </p>

          <p className="mb-8">
            Selling an HVAC business is a major life decision, often representing decades of hard work. You deserve an advisory team that respects your legacy and fights for your maximum value. Let's start the conversation and map out your successful exit strategy.
          </p>

          <div className="bg-[#022B3A] text-white p-8 rounded-lg not-prose">
            <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
            <p className="mb-4 text-white/90">
              Call us directly or send a message via WhatsApp to speak with a dedicated broker immediately. We are available to answer your questions and guide you through the process.
            </p>
            <p className="font-bold text-lg mb-2">
              Direct Line / WhatsApp: <a href="https://wa.me/19548649161" className="text-[#EE5B2C] hover:underline">+1 (954) 864-9161</a>
            </p>
            <p className="text-white/80 text-sm">
              Office: 10242 NW 47th St, Ste 39C, Sunrise, FL 33351
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
