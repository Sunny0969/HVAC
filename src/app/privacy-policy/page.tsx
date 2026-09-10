import { Metadata } from 'next';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Privacy Policy | HVAC Exit Advisors',
  description: 'How HVAC Exit Advisors collects, uses, and protects your information when you visit our site or request a valuation.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/privacy-policy'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Privacy Policy', item: 'https://www.hvacexitadvisors.com/privacy-policy' }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] pt-32 pb-20">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <a href="/" className="hover:text-[#EE5B2C] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#EE5B2C]">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-medium mb-12 pb-8 border-b border-gray-100">Last updated: September 5, 2026</p>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-6">
            <p>
              This Privacy Policy explains how <strong>HVAC Exit Advisors</strong> ("we," "us," or "our") collects, uses, discloses, and protects information when you visit <a href="https://www.hvacexitadvisors.com" className="text-[#EE5B2C] hover:underline">www.hvacexitadvisors.com</a> (the "Site") or interact with our forms, tools, or communications. By using the Site, you agree to the practices described below.
            </p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">1. Information We Collect</h2>
            <p><strong>Information you provide directly</strong>, such as when you submit a contact form, request a valuation, use our valuation calculator, or call/text us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company name</li>
              <li>Business details you choose to share (e.g., revenue range, service area, reason for selling or buying)</li>
              <li>Any message content you submit</li>
            </ul>

            <p className="mt-4"><strong>Information collected automatically</strong>, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, device type, and general location (city/region level)</li>
              <li>Pages visited, time on site, and referral source, via analytics tools (see Section 4)</li>
            </ul>

            <p className="mt-4">
              <strong>Valuation calculator inputs:</strong> Figures you enter into our free valuation calculator are processed in your browser to generate an estimate. We do not transmit or store these figures on our servers unless you affirmatively choose to save, email, or submit your results to us.
            </p>
            <p>
              We do not knowingly collect information from children under 13, and the Site is intended for business use by adults.
            </p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide the valuation, brokerage, or buyer-matching services you requested</li>
              <li>Send you information you've asked for (e.g., a saved valuation report, listing details, follow-up on a submitted inquiry)</li>
              <li>Improve our Site, content, and services based on aggregate usage patterns</li>
              <li>Send occasional updates about our services, market insights, or new listings - you can opt out at any time (see Section 6)</li>
              <li>Comply with legal obligations and protect against fraud or misuse of the Site</li>
            </ul>
            <p><strong>We do not sell or rent your personal information to third parties.</strong></p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">3. When We Share Information</h2>
            <p>We share information only in these limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers</strong> who help us operate the Site or our business (e.g., email/CRM platforms, hosting providers, analytics tools), bound by confidentiality obligations</li>
              <li><strong>Business transaction parties</strong>, where sharing is necessary to facilitate a transaction you've specifically engaged us for (e.g., sharing your qualification details with a listing seller under NDA, if you're a prospective buyer)</li>
              <li><strong>Legal or safety reasons</strong>, if required by law, subpoena, or to protect the rights, property, or safety of our company, our clients, or others</li>
              <li><strong>With your consent</strong>, in any other circumstance we haven't already described</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">4. Cookies & Analytics</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand how visitors use the Site (via tools such as Google Analytics)</li>
              <li>Remember basic preferences and improve Site performance</li>
              <li>Measure the effectiveness of our marketing</li>
            </ul>
            <p>
              You can disable cookies through your browser settings; some Site features may not function properly if you do. If we use third-party advertising or remarketing tools now or in the future, this section will be updated to reflect that, along with instructions for opting out.
            </p>
            <p>
              <strong>Embedded content:</strong> If we embed content from other sites (such as YouTube videos), that content behaves as if you visited the third-party site directly, and is subject to that site's own privacy policy - we don't control what those third parties collect.
            </p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">5. Text Messages & Calls</h2>
            <p>
              If you provide your phone number and opt in to receive text messages from us (e.g., appointment reminders, valuation updates), message and data rates may apply and message frequency may vary. You can opt out at any time by replying STOP, or by contacting us using the information in Section 9. This consent is not a condition of purchasing any service.
            </p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">6. Your Choices & Rights</h2>
            <p>You can, at any time, by contacting us using the information in Section 9:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ask what personal information we hold about you</li>
              <li>Ask us to correct inaccurate information</li>
              <li>Ask us to delete your information (subject to any legal/administrative retention obligations)</li>
              <li>Opt out of future marketing emails or texts</li>
              <li>Raise any concern about how we're handling your information</li>
            </ul>
            <p>We will respond to reasonable requests within a reasonable timeframe.</p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">7. Security</h2>
            <p>
              We take reasonable precautions to protect the information you share with us, including transmitting data over encrypted (HTTPS) connections and limiting internal access to personal information to those who need it to do their jobs. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">8. Data Retention</h2>
            <p>
              We retain information for as long as reasonably necessary to fulfill the purposes described in this policy, or as required by law. Inquiry and form-submission records are generally retained for our business records unless you request deletion.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#022B3A] mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-bold text-[#022B3A] mb-2">HVAC Exit Advisors</p>
                <a href="https://www.google.com/maps/search/?api=1&query=10242+NW+47th+St,+Ste+39C,+Sunrise,+FL+33351" target="_blank" rel="noopener noreferrer" className="block text-gray-600 mb-1 hover:text-[#EE5B2C] hover:underline">
                  10242 NW 47th St, Ste 39C<br />
                  Sunrise, FL 33351
                </a>
                <p className="text-gray-600 mb-1">Email: <a href="mailto:contact@hvacexitadvisors.com" className="text-[#EE5B2C] hover:underline">contact@hvacexitadvisors.com</a></p>
                <p className="text-gray-600">Phone: <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">(954) 864-9161</a></p>
              </div>
            </section>

            <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
