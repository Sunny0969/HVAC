import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BreadcrumbSchema from "@/views/components/BreadcrumbSchema";
import TableOfContents from "@/views/components/TableOfContents";
import ContactForm from "@/views/components/ContactForm";

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

async function getBlog(slug: string) {
  try {
    const res = await fetch(`${API_URL}/blogs/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.blog;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
    _rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
    const res = await fetch(`${_rootUrl}/api/public/blogs`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.blogs || []).map((blog: any) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    alternates: { canonical: (blog.seo?.canonicalUrl || "").replace("/blog/", "/seller-guides/").replace("/resources/", "/seller-guides/") || `https://www.hvacexitadvisors.com/seller-guides/${slug}` },
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: (blog.seo?.ogImage || blog.image) ? [{ url: blog.seo?.ogImage || blog.image }] : [],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const breadcrumbs = [
    { name: "Home", item: "https://www.hvacexitadvisors.com/" },
    { name: "Seller Guides", item: "https://www.hvacexitadvisors.com/seller-guides" },
    { name: blog.title, item: `https://www.hvacexitadvisors.com/seller-guides/${slug}` },
  ];

  // Extract and Inject IDs for H2 and H3 tags
  const tocItems: { id: string; title: string; level: number }[] = [];
  
  let modifiedContent = blog.content || "";
  const headingRegex = /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi;

  modifiedContent = modifiedContent.replace(headingRegex, (fullMatch, tag, attributes, innerHtml) => {
    const level = tag.toLowerCase() === 'h2' ? 2 : 3;
    const idMatch = attributes.match(/id="([^"]+)"/i);
    let id = '';
    const cleanTitle = innerHtml.replace(/<[^>]+>/g, '').trim();

    if (idMatch) {
      id = idMatch[1];
    } else {
      id = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (!id) id = 'heading-' + Math.random().toString(36).substr(2, 9);
      attributes = ` id="${id}"${attributes}`;
    }

    if (id && cleanTitle) {
      tocItems.push({ id, title: cleanTitle, level });
    }

    return `<${tag}${attributes}>${innerHtml}</${tag}>`;
  });
  
  blog.content = modifiedContent;

  // Generate Article Schema
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
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.hvacexitadvisors.com/resources/${slug}`
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
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen font-sans pb-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 flex justify-between items-center">
            <Link href="/seller-guides" className="inline-flex items-center text-sm font-bold text-[#EE5B2C] hover:text-[#c44922] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Resources
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Left Content Area */}
            <div className="lg:w-[65%] xl:w-[70%]">
              
              <article className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                <header className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                      {blog.category || "Resource"}
                    </span>
                    {blog.date && (
                      <span className="text-sm text-gray-500 font-medium">
                        Published: {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-6 leading-tight tracking-tight">{blog.title}</h1>
                  {blog.excerpt && <p className="text-xl text-gray-600 leading-relaxed font-medium">{blog.excerpt}</p>}
                  <div className="mt-6 flex items-center gap-3 text-gray-500 text-sm border-t border-gray-100 pt-6">
                    <span className="font-bold text-[#022B3A]">{blog.author || "HVAC Exit Advisors"}</span>
                    {blog.authorRole && <><span>|</span><span className="font-medium">{blog.authorRole}</span></>}
                  </div>
                </header>

                {blog.image && (
                  <div className="mb-12 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                    <img src={blog.image} alt={blog.imageAlt || blog.title} className="w-full max-h-[500px] object-cover object-center" />
                  </div>
                )}
                
                <div
                  className="prose prose-lg max-w-none text-gray-800 prose-headings:text-[#022B3A] prose-headings:font-black prose-a:text-[#EE5B2C] prose-a:font-bold prose-img:rounded-xl prose-li:marker:text-[#EE5B2C]"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {blog.faqs && blog.faqs.length > 0 && (
                  <section className="mt-16 border-t border-gray-200 pt-12">
                    <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {blog.faqs.map((faq: { question: string; answer: string }, i: number) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                          <h3 className="text-xl font-bold text-[#022B3A] mb-4">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
              </article>
              
              {/* Contact Form at the end of the article */}
              <div className="mt-12 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Have More Questions?</h2>
                  <p className="text-lg text-gray-600 font-medium">Contact our Florida HVAC experts for a confidential discussion.</p>
                </div>
                <ContactForm buttonText="Send Confidential Message" />
              </div>
            </div>

            {/* Right Sidebar - Sticky TOC */}
            <aside className="hidden lg:block lg:w-[35%] xl:w-[30%] relative">
              <div className="sticky top-28 max-h-[85vh] overflow-y-auto custom-scrollbar space-y-8 pb-10">
                {tocItems && tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>
            
          </div>
        </div>
      </main>
    </>
  );
}