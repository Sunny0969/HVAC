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

export const metadata: Metadata = {
  title: "HVAC Next.js App",
  description: "A fully responsive, SEO-optimized application built with Next.js",
  keywords: ["HVAC", "Next.js", "React", "SEO", "Responsive"],
  openGraph: {
    title: "HVAC Next.js App",
    description: "A fully responsive, SEO-optimized application built with Next.js",
    type: "website",
  },
};

import Header from "../views/components/Header";
import Footer from "../views/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
