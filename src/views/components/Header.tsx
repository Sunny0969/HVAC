"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useHeaderController } from "../../controllers/useHeaderController";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) return null;

  const isHomePage = pathname === "/";

  const {
    navigationData,
    activeDropdown,
    isMobileMenuOpen,
    isScrolled,
    toggleDropdown,
    closeDropdown,
    toggleMobileMenu,
  } = useHeaderController();

  // Dynamic header classes: transparent if at top of HOMEPAGE, SELL, BUY, CALC, HOW-IT-WORKS, WHY-SELL-WITH-US, TEAM, SUCCESS-STORIES, FAQS, or RESOURCES pages, otherwise solid navy
  const isDarkHeroPage = pathname === "/" || pathname === "/sell-your-hvac-business" || pathname === "/buy-an-hvac-business" || pathname === "/hvac-business-valuation-calculator" || pathname === "/how-it-works" || pathname === "/why-sell-with-us" || pathname === "/about-us/team" || pathname === "/success-stories" || pathname === "/faqs" || pathname === "/resources";
  const isSolid = isScrolled || isMobileMenuOpen || !isDarkHeroPage;
  const headerBgClass = isSolid ? "bg-primary shadow-md" : "bg-transparent hover:bg-primary";

  return (
    <>
      {/* 80px Sentinel for IntersectionObserver to detect scroll depth cheaply */}
      <div id="scroll-sentinel" className="absolute top-0 left-0 w-full h-[80px] pointer-events-none -z-50 opacity-0" aria-hidden="true" />

      <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative z-50">
            {/* Logo View */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-3" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
                <Image src="/logo.png" alt="HVAC Exit Advisors Logo" width={52} height={52} className="rounded-full bg-white" priority />
                <span className="hidden sm:block">HVAC Exit Advisors</span>
              </Link>
            </div>

            {/* Desktop Navigation View */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigationData.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div
                      onMouseEnter={() => toggleDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      onClick={() => toggleDropdown(item.label)}
                      className="h-full flex items-center"
                    >
                      <button 
                        aria-label={`Toggle ${item.label} menu`}
                        aria-expanded={activeDropdown === item.label}
                        className="flex items-center space-x-1 hover:text-secondary transition-colors duration-200 py-6"
                      >
                        <span>{item.label}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-[100%] pt-0 w-56"
                          >
                            <div className="bg-white text-black shadow-xl rounded-xl overflow-hidden border border-gray-100 py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={closeDropdown}
                                  className="block px-5 py-3 text-sm font-bold text-[#022B3A] hover:bg-gray-50 hover:text-[#EE5B2C] transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-secondary transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a href="https://api.whatsapp.com/send/?phone=19548649161&text=Welcome+to+HVAC+Exit+Advisors%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all flex items-center space-x-2 border border-white/30 px-4 py-2 rounded-lg bg-transparent text-white font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Us</span>
              </a>
              <Link
                href="/free-valuation"
                className="bg-secondary text-white px-5 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center space-x-2"
              >
                <span>Get Free Valuation</span>
                <span>→</span>
              </Link>
            </div>

            {/* Mobile Menu Button View */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                className="text-white hover:text-secondary focus:outline-none p-2 -mr-2"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Drawer */}
        <div 
          className={`md:hidden fixed inset-0 bg-primary text-white z-40 flex flex-col pt-20 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navigationData.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="block px-3 py-3 rounded-md text-xl font-medium hover:text-secondary hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={toggleMobileMenu}
                        className="block px-3 py-3 rounded-md text-base hover:text-secondary hover:bg-white/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom Pinned Phone + CTA inside drawer */}
          <div className="p-6 border-t border-white/20 bg-primary/95 mt-auto">
             <a href="https://api.whatsapp.com/send/?phone=19548649161&text=Welcome+to+HVAC+Exit+Advisors%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 text-lg font-bold text-white mb-4 bg-[#25D366] py-3 rounded-md hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Us</span>
             </a>
             <Link
                href="/free-valuation"
                onClick={toggleMobileMenu}
                className="block text-center w-full bg-secondary text-white px-5 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all"
              >
                Get Free Valuation →
              </Link>
          </div>
        </div>
      </header>

      {/* Sticky Mini CTA Bar at the bottom for Mobile (Visible when nav is closed) */}
      {!isMobileMenuOpen && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
          <a href="https://api.whatsapp.com/send/?phone=19548649161&text=Welcome+to+HVAC+Exit+Advisors%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-4 text-[#25D366] hover:bg-gray-50 font-bold border-r border-gray-200 flex justify-center items-center space-x-2 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>WhatsApp</span>
          </a>
          <Link href="/free-valuation" className="flex-1 text-center py-4 bg-secondary text-white font-bold flex justify-center items-center space-x-2">
            <span>Free Valuation</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </>
  );
}
