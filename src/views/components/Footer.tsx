"use client";

import Link from "next/link";
import { useFooterController } from "../../controllers/useFooterController";

export default function Footer() {
  const { navigationData, floridaCities, isAreasOpen, toggleAreas } = useFooterController();

  return (
    <footer className="bg-primary text-white pt-12 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-wider mb-6 block">
              LOGO
            </Link>
            
            <div className="space-y-4 mb-8">
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=10242+NW+47th+St,+Ste+39C,+Sunrise,+FL+33351" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-secondary transition-colors py-1"
                >
                  10242 NW 47th St, Ste 39C<br />
                  Sunrise, FL 33351
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:contact@hvacexitadvisors.com" className="text-white/80 text-sm hover:text-secondary transition-colors break-all py-1">
                  contact@hvacexitadvisors.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-secondary transition-colors py-1">
                  (954) 864-9161
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="text-white/80 text-sm">
                  Mon - Sat: 7:00 AM - 7:00 PM
                </div>
              </div>
            </div>

            <a href="https://api.whatsapp.com/send/?phone=19548649161&text=Welcome+to+HVAC+Exit+Advisors%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#25D366] font-bold text-sm hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-[#25D366]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationData.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/80 hover:text-secondary transition-colors text-sm block py-2">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faqs" className="text-white/80 hover:text-secondary transition-colors text-sm block py-2">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Areas We Serve (Florida)</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {floridaCities.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={city} 
                    href={`/florida/${slug}`}
                    className="text-white/70 hover:text-secondary transition-colors text-sm block py-2"
                  >
                    {city}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} HVAC Exit Advisors. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            {/* Add Terms of Service or Accessibility later here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
