import { useState, useCallback, useEffect } from "react";
import { navigationData } from "../models/navigationModel";

export function useHeaderController() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'areas' | 'industries' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0 }
    );

    observer.observe(sentinel);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
    setActiveMegaMenu(null);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMegaMenu = useCallback((menu: 'areas' | 'industries') => {
    setActiveMegaMenu((prev) => (prev === menu ? null : menu));
    setActiveDropdown(null);
  }, []);

  const closeMegaMenu = useCallback(() => {
    setActiveMegaMenu(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMegaMenu(null);
    setActiveDropdown(null);
  }, []);

  return {
    navigationData,
    activeDropdown,
    activeMegaMenu,
    isMobileMenuOpen,
    isScrolled,
    toggleDropdown,
    closeDropdown,
    toggleMegaMenu,
    closeMegaMenu,
    toggleMobileMenu,
  };
}
