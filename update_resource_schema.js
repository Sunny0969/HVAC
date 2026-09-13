const fs = require('fs');
const path = 'src/app/resources/[slug]/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// We need to inject schema objects before the return statement of BlogPostPage
const returnStatement = `  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />`;

const schemaInjection = `  // Generate Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.seoTitle || blog.title,
    "description": blog.seoDescription || blog.excerpt,
    "image": blog.seo?.ogImage || blog.image || "https://www.hvacexitadvisors.com/why-sell-with-us.jpg",
    "author": {
      "@type": "Person",
      "name": blog.author || "Sanjay Wadhwani"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    },
    "datePublished": blog.date ? new Date(blog.date).toISOString() : new Date().toISOString(),
    "dateModified": blog.date ? new Date(blog.date).toISOString() : new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": \`https://www.hvacexitadvisors.com/resources/\${slug}\`
    }
  };

  // Generate FAQ Schema if FAQs exist
  let faqSchema = null;
  if (blog.faqs && blog.faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": blog.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  const schemasToRender = faqSchema ? [articleSchema, faqSchema] : [articleSchema];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemasToRender) }}
      />`;

code = code.replace(returnStatement, schemaInjection);
fs.writeFileSync(path, code, 'utf8');
