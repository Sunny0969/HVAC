import { useState, useCallback, useEffect } from "react";
import { navigationData } from "../models/navigationModel";

export function useHeaderController() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return {
    navigationData,
    activeDropdown,
    isMobileMenuOpen,
    isScrolled,
    toggleDropdown,
    closeDropdown,
    toggleMobileMenu,
  };
}
