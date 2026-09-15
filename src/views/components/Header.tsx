"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useHeaderController } from "../../controllers/useHeaderController";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { areasWeServeData, industriesData } from "../../models/navigationModel";

function MegaMenu({ type, data, onClose }: { type: 'areas' | 'industries', data: Record<string, string[]>, onClose: () => void }) {
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
      style={{ width: '800px', minHeight: '400px' }}
    >
      {/* Left Sidebar */}
      <div className="w-[30%] bg-gray-50/50 p-6 border-r border-gray-100 flex flex-col gap-2">
        <h3 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
          {type === 'areas' ? 'Regions' : 'Categories'}
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
      <div className="w-[70%] bg-white p-6">
        <h3 className="text-xs font-bold text-gray-400 mb-6 uppercase tracking-wider">
          {type === 'areas' ? 'Featured Cities' : 'Featured Industries'}
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${type === 'areas' ? '1449844908441-8829872d2607' : '1581091226825-a6a2a5aee158'}?w=100&h=100&fit=crop&q=80`}
                  alt={item}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors">{item}</div>
                <div className="text-xs text-gray-500">{activeCategory}</div>
              </div>
            </div>
          ))}
        </div>
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
                            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 py-2">
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
                href="/free-valuation"
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
                {activeMegaMenu === 'areas' && (
                  <MegaMenu type="areas" data={areasWeServeData} onClose={closeMegaMenu} />
                )}
                {activeMegaMenu === 'industries' && (
                  <MegaMenu type="industries" data={industriesData} onClose={closeMegaMenu} />
                )}
              </AnimatePresence>
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
                        className="block px-3 py-3 rounded-md text-base text-gray-300 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* spacer to prevent content from going under the fixed white header */}
      <div className="h-[144px] hidden md:block"></div>
      <div className="h-16 md:hidden"></div>
    </>
  );
}
