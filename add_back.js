const fs = require('fs');
const file = 'src/app/listings/[slug]/page.tsx';
let text = fs.readFileSync(file, 'utf8');

if (!text.includes("import Link from 'next/link';") && !text.includes('import Link from "next/link";')) {
  text = text.replace('import { notFound } from \'next/navigation\';', "import { notFound } from 'next/navigation';\nimport Link from 'next/link';");
}

const backButtonHtml = `<div className="mb-6">
            <Link href="/listings" className="inline-flex items-center text-sm font-bold text-[#EE5B2C] hover:text-[#c44922] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Listings
            </Link>
          </div>`;

text = text.replace('<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-8">', '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          ' + backButtonHtml + '\n          <div className="flex flex-col lg:flex-row gap-8">');

fs.writeFileSync(file, text, 'utf8');
