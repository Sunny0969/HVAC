"use client";
import { useEffect } from 'react';

export default function WhatsAppTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      
      // Traverse up to find if clicked inside an anchor tag
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      
      if (target && target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).href || '';
        if (href.includes('api.whatsapp.com') || href.includes('wa.me')) {
          // Track whatsapp click
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              formType: 'WhatsApp Click',
              name: 'WhatsApp User',
              message: 'Clicked WhatsApp button',
              additionalData: {
                pagePath: window.location.pathname,
                pageUrl: window.location.href,
              }
            })
          }).catch(err => console.error("Failed to track WhatsApp click:", err));
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
