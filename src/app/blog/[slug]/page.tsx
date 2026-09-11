import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BreadcrumbSchema from "@/views/components/BreadcrumbSchema";

const API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000/api/public";

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    alternates: { canonical: blog.seo?.canonicalUrl || `https://www.hvacexitadvisors.com/blog/${slug}` },
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
    { name: "Resources", item: "https://www.hvacexitadvisors.com/resources" },
    { name: blog.title, item: `https://www.hvacexitadvisors.com/blog/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen bg-[#F7F5F0] pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#EE5B2C] hover:underline mb-8 block">
            Back to Resources
          </Link>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-50 px-3 py-1 rounded-full">
                {blog.category || "Blog"}
              </span>
              {blog.date && (
                <span className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-6 leading-tight">{blog.title}</h1>
            {blog.excerpt && <p className="text-xl text-gray-600 leading-relaxed">{blog.excerpt}</p>}
            <div className="mt-6 flex items-center gap-3 text-gray-500 text-sm border-t border-gray-200 pt-6">
              <span className="font-semibold text-[#022B3A]">{blog.author || "HVAC Exit Advisors"}</span>
              {blog.authorRole && <><span>·</span><span>{blog.authorRole}</span></>}
            </div>
          </header>
          {blog.image && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img src={blog.image} alt={blog.imageAlt || blog.title} className="w-full h-[400px] object-cover" />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#022B3A] prose-headings:font-black prose-a:text-[#EE5B2C] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mt-16 border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog.faqs.map((faq: { question: string; answer: string }, i: number) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-[#022B3A] mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className="mt-16 bg-[#022B3A] text-white p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Your <span className="text-[#EE5B2C]">HVAC Exit?</span></h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Get a confidential consultation with our Florida HVAC brokerage team.</p>
            <Link href="/free-valuation" className="inline-block px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all">
              Get Free Valuation
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}