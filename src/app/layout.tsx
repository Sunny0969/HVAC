import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // allows zooming for accessibility
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hvacexitadvisors.com'),
  title: {
    template: '%s | HVAC Exit Advisors',
    default: 'Florida HVAC Business Broker | HVAC Exit Advisors',
  },
  description: "Premier Florida HVAC business broker. Buy or sell your heating and air conditioning company with our confidential, expert guidance. Contact us today!",
  keywords: ["Florida HVAC Business Broker", "Sell HVAC business in Florida", "Buy HVAC company Florida", "HVAC brokerage firm FL", "HVAC business valuation"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Florida HVAC Business Broker | HVAC Exit Advisors",
    description: "Premier Florida HVAC business broker. Buy or sell your heating and air conditioning company with our confidential, expert guidance. Contact us today!",
    url: 'https://www.hvacexitadvisors.com',
    siteName: 'HVAC Exit Advisors',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida HVAC Business Broker | HVAC Exit Advisors',
    description: 'Premier Florida HVAC business broker. Buy or sell your heating and air conditioning company with our confidential, expert guidance. Contact us today!',
  },
};

import Header from "../views/components/Header";
import Footer from "../views/components/Footer";

import Script from "next/script";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HVAC Exit Advisors",
    "url": "https://www.hvacexitadvisors.com",
    "logo": "https://www.hvacexitadvisors.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-954-864-9161",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isRealGa = gaId && gaId !== 'G-XXXXXXXXXX';
  const gscCode = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  const isRealGsc = gscCode && gscCode !== 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE';

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {isRealGsc && <meta name="google-site-verification" content={gscCode} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Analytics 4 */}
        {isRealGa && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
