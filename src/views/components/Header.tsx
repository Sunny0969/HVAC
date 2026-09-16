"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useHeaderController } from "../../controllers/useHeaderController";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { areasWeServeData, industriesData } from "../../models/navigationModel";


function getCityImage(cityName: string) {
  const filename = cityName.toLowerCase().replace(/ /g, '-');
  
  const customImages: Record<string, string> = {
    'naples': 'https://images.unsplash.com/photo-1710625361134-332bc2801df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFwbGVzfGVufDB8MHwwfHx8Mg%3D%3D',
    'fort-myers': 'https://images.unsplash.com/photo-1667869373278-4cb33c25ee4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ydCUyMG15ZXJzfGVufDB8MHwwfHx8Mg%3D%3D',
    'cape-coral': 'https://images.unsplash.com/photo-1702435445689-0f686b23fd5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZSUyMGNvcmFsfGVufDB8MHwwfHx8Mg%3D%3D',
    'bonita-springs': 'https://images.unsplash.com/photo-1599622638531-14f74e38699b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9uaXRhJTIwc3ByaW5nfGVufDB8MHwwfHx8Mg%3D%3D',
    'orlando': 'https://images.unsplash.com/photo-1661231134432-bebf986499a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JsYW5kb3xlbnwwfDB8MHx8fDI%3D',
    'kissimmee': 'https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lzc2ltbWVlfGVufDB8MHwwfHx8Mg%3D%3D',
    'sanford': 'https://images.unsplash.com/photo-1679778170121-48c9c9129c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZm9yZHxlbnwwfDB8MHx8fDI%3D',
    'lakeland': 'https://images.unsplash.com/photo-1674858766243-fa24ff6a6004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZWxhbmR8ZW58MHwwfDB8fHwy',
    'winter-haven': 'https://images.unsplash.com/photo-1643674372898-ed5950f83d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyJTIwaGF2ZW58ZW58MHwwfDB8fHwy'
  };

  if (customImages[filename]) {
    return customImages[filename];
  }

  const availableCities = ['miami', 'fort-lauderdale', 'west-palm-beach', 'boca-raton', 'hollywood', 'pompano-beach', 'coral-springs', 'pembroke-pines', 'miramar', 'hialeah', 'homestead'];
  if (availableCities.includes(filename)) {
    return `/images/cities/${filename}.jpg`;
  }
  return `https://images.unsplash.com/photo-1449844908441-8829872d2607?w=100&h=100&fit=crop&q=80`;
}

function AreasMegaMenu({ data, onClose }: { data: Record<string, string[]>, onClose: () => void }) {
  const categories = Object.keys(data);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const items = data[activeCategory] || [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[100%] left-0 mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden z-50 flex"
      style={{ width: '800px' }}
    >
      {/* Left Sidebar */}
      <div className="w-[30%] bg-gray-50/50 p-6 border-r border-gray-100 flex flex-col gap-2 max-h-[400px] overflow-y-auto overscroll-contain custom-scrollbar">
        <h3 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
          Regions
        </h3>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${
              activeCategory === cat 
                ? 'bg-[#E3F2FD] text-[#022B3A]' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
        {/* Right Content */}
        <div className="w-[70%] bg-white p-6 max-h-[400px] overflow-y-auto overscroll-contain custom-scrollbar relative flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Featured Cities
            </h3>
            <Link 
              href={`/${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={onClose}
              className="text-xs font-bold text-[#EE5B2C] hover:underline flex items-center gap-1"
            >
              View Full {activeCategory} Guide →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {items.map((item) => {

          {items.map((item) => {
            const slug = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link key={item} href={`/florida/${slug}`} onClick={onClose} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
                  <Image 
                    src={getCityImage(item)}
                    alt={item}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors">{item}</div>
                  <div className="text-xs text-gray-500">{activeCategory}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function getIndustryIcon(item: string) {
  switch(item) {
    case 'Residential HVAC':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
    case 'Commercial HVAC':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    case 'Refrigeration':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>;
    case 'Plumbing':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case 'Electrical':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'Mechanical Services':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    default:
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
  }
}

function SimpleDropdown({ items, onClose }: { items: string[], onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[100%] left-0 mt-2 w-72 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden z-50 py-2"
    >
      <div className="max-h-[400px] overflow-y-auto overscroll-contain custom-scrollbar">
        {items.map((item) => (
          <div key={item} onClick={onClose} className="px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 group transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#E3F2FD] text-[#022B3A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EE5B2C] group-hover:text-white transition-colors">
              {getIndustryIcon(item)}
            </div>
            <span className="text-sm font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  const {
    navigationData,
    activeDropdown,
    activeMegaMenu,
    isMobileMenuOpen,
    toggleDropdown,
    closeDropdown,
    toggleMegaMenu,
    closeMegaMenu,
    toggleMobileMenu,
  } = useHeaderController();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMegaMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMegaMenu]);

  // Lock body scroll ONLY when mobile menu is open to prevent jumping layout on desktop hover
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white text-[#022B3A] shadow-sm border-b border-gray-200 transition-all duration-300">
        
        {/* TOP ROW: Logo & Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 hidden md:block">
          <div className="flex justify-between items-center h-20">
            {/* Logo View */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-3 text-[#022B3A]">
                <div className="bg-[#022B3A] rounded-full p-1">
                  <Image src="/logo.png" alt="HVAC Exit Advisors Logo" width={42} height={42} className="rounded-full bg-white" priority />
                </div>
                <span>HVAC Exit Advisors</span>
              </Link>
            </div>

            {/* Desktop Navigation View */}
            <nav className="hidden lg:flex space-x-6 items-center">
              {navigationData.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div
                      onMouseEnter={() => toggleDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      onClick={() => toggleDropdown(item.label)}
                      className="h-full flex items-center cursor-pointer"
                    >
                      <button 
                        aria-expanded={activeDropdown === item.label}
                        className="flex items-center space-x-1 hover:text-[#EE5B2C] text-sm font-bold transition-colors duration-200 py-6"
                      >
                        <span>{item.label}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-[100%] pt-0 w-56 z-50"
                          >
                            <div className="bg-white shadow-xl rounded-xl border border-gray-100 py-2 max-h-[60vh] overflow-y-auto overscroll-contain custom-scrollbar">
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
                      className="hover:text-[#EE5B2C] text-sm font-bold transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/free-confidential-valuation"
                className="bg-[#EE5B2C] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md"
              >
                Request a Confidential Valuation
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Mega Menu Triggers (Pills) & Mobile Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative" ref={menuRef}>
            
            {/* Mobile Logo (Visible only on mobile) */}
            <div className="md:hidden flex items-center">
              <Link href="/" className="text-lg font-bold tracking-wide flex items-center gap-2 text-[#022B3A]">
                <Image src="/logo.png" alt="HVAC Exit Advisors Logo" width={32} height={32} className="rounded-full bg-white" />
                <span>HVAC Exit Advisors</span>
              </Link>
            </div>

            {/* Desktop Pills */}
            <div className="hidden md:flex space-x-3 h-full items-center">
              
              <div className="relative h-full flex items-center">
                <button 
                  onClick={() => toggleMegaMenu('areas')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-bold transition-all ${
                    activeMegaMenu === 'areas' 
                      ? 'border-[#022B3A] text-[#022B3A] bg-gray-50 shadow-inner' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Areas We Serve</span>
                  <svg className={`w-3 h-3 transition-transform ${activeMegaMenu === 'areas' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {activeMegaMenu === 'areas' && (
                    <AreasMegaMenu data={areasWeServeData} onClose={closeMegaMenu} />
                  )}
                </AnimatePresence>
              </div>

              <div className="relative h-full flex items-center">
                <button 
                  onClick={() => toggleMegaMenu('industries')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-bold transition-all ${
                    activeMegaMenu === 'industries' 
                      ? 'border-[#022B3A] text-[#022B3A] bg-gray-50 shadow-inner' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <span>Industries</span>
                  <svg className={`w-3 h-3 transition-transform ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {activeMegaMenu === 'industries' && (
                    <SimpleDropdown items={industriesData["HVAC & Mechanical"]} onClose={closeMegaMenu} />
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className="text-[#022B3A] p-2"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen 
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Drawer */}
        <div 
          className={`md:hidden fixed inset-0 top-16 bg-[#022B3A] text-white z-40 flex flex-col pt-4 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2 overscroll-contain">
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
                        className="block px-3 py-3 rounded-md text-base text-gray-300 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Added Areas and Industries to Mobile Menu */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <div>
                <span className="block px-3 py-3 rounded-md text-xl font-medium text-gray-400">Areas We Serve</span>
                <div className="pl-6 pb-2 space-y-1">
                  {Object.entries(areasWeServeData).map(([region, cities]) => (
                                          <div key={region} className="pb-2">
                        <Link 
                          href={`/${region.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={toggleMobileMenu}
                          className="text-sm font-bold text-[#EE5B2C] mb-1 block hover:underline"
                        >
                          {region} Guide →
                        </Link>
                      {cities.map(city => {
                        const slug = city.toLowerCase().replace(/\s+/g, '-');
                        return (
                          <Link key={city} href={`/florida/${slug}`} onClick={toggleMobileMenu} className="block py-2 text-base text-gray-300 hover:text-white">
                            {city}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="block px-3 py-3 rounded-md text-xl font-medium text-gray-400">Industries</span>
                <div className="pl-6 pb-2 space-y-1">
                  {industriesData["HVAC & Mechanical"].map(ind => (
                    <div key={ind} className="block py-2 text-base text-gray-300">
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* spacer to prevent content from going under the fixed white header */}
      <div className="h-[144px] hidden md:block"></div>
      <div className="h-16 md:hidden"></div>
    </>
  );
}
