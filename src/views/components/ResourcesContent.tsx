"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface StaticArticle {
  title: string;
  category: string;
  description: string;
  href: string;
  readTime: string;
}

interface CmsBlog {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
}

interface Props {
  staticArticles: StaticArticle[];
  cmsBlogs: CmsBlog[];
}

export default function ResourcesContent({ staticArticles, cmsBlogs }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Merge both sources for unified filtering
  const allItems = useMemo(() => [
    ...staticArticles.map((a) => ({
      id: a.href,
      slug: a.href,
      title: a.title,
      description: a.description,
      image: "",
      imageAlt: "",
      date: "",
      category: a.category,
      readTime: a.readTime,
      isStatic: true,
      href: a.href,
    })),
    ...cmsBlogs.map((b) => ({
      id: b.id,
      slug: `/blog/${b.slug}`,
      title: b.title,
      description: b.description,
      image: b.image,
      imageAlt: b.imageAlt,
      date: b.date,
      category: b.category || "Blog",
      readTime: "",
      isStatic: false,
      href: `/blog/${b.slug}`,
    })),
  ], [staticArticles, cmsBlogs]);

  // All unique categories
  const categories = useMemo(() => {
    const cats = new Set(allItems.map((i) => i.category));
    return Array.from(cats).sort();
  }, [allItems]);

  // Recent posts (latest 5 CMS blogs)
  const recentPosts = useMemo(() =>
    [...cmsBlogs]
      .sort((a, b) => (b.date > a.date ? 1 : -1))
      .slice(0, 5),
    [cmsBlogs]
  );

  // Filtered results
  const filtered = useMemo(() => {
    let items = allItems;
    if (activeCategory) {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [allItems, search, activeCategory]);

  return (
    <section className="w-full bg-[#F7F5F0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">
            All <span className="text-[#EE5B2C]">Guides & Articles</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Expert knowledge on buying, selling, and valuing Florida HVAC businesses.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT - Article Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-[#022B3A] mb-2">No results found</p>
                <p className="text-gray-500">Try a different search term or category.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory(null); }}
                  className="mt-6 px-6 py-2 bg-[#EE5B2C] text-white rounded-xl font-bold hover:bg-orange-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-8">
                {filtered.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Thumbnail */}
                    {item.image ? (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-[#022B3A] to-[#0a4a63] flex items-center justify-center px-6">
                        <span className="text-white/90 font-bold text-base text-center leading-snug line-clamp-3">
                          {item.title}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-50 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        {item.readTime && (
                          <span className="text-xs text-gray-400 font-medium">{item.readTime}</span>
                        )}
                        {item.date && !item.readTime && (
                          <span className="text-xs text-gray-400">
                            {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-grow line-clamp-3">
                        {item.description}
                      </p>
                      <span className="mt-4 text-sm font-bold text-[#EE5B2C] flex items-center gap-1">
                        Read Article
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Sticky Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-28 space-y-6">

            {/* Search Box */}
            <div className="bg-[#EFF6FF] rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="relative">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-blue-200 bg-white text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] placeholder-gray-400 shadow-sm"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {search && (
                <p className="mt-2 text-xs text-gray-500">
                  Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
                </p>
              )}
            </div>

            {/* Categories */}
            <div className="bg-[#EFF6FF] rounded-2xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-lg font-black text-[#022B3A] mb-4 pb-3 border-b border-blue-100">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`text-sm font-semibold w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                      activeCategory === null
                        ? "bg-[#EE5B2C] text-white"
                        : "text-[#022B3A] hover:bg-white hover:text-[#EE5B2C]"
                    }`}
                  >
                    All Categories
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeCategory === null ? "bg-white/20 text-white" : "bg-orange-100 text-[#EE5B2C]"}`}>
                      {allItems.length}
                    </span>
                  </button>
                </li>
                {categories.map((cat) => {
                  const count = allItems.filter((i) => i.category === cat).length;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                        className={`text-sm font-semibold w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between ${
                          activeCategory === cat
                            ? "bg-[#EE5B2C] text-white"
                            : "text-[#022B3A] hover:bg-white hover:text-[#EE5B2C]"
                        }`}
                      >
                        {cat}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeCategory === cat ? "bg-white/20 text-white" : "bg-orange-100 text-[#EE5B2C]"}`}>
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Recent Posts - only CMS blogs */}
            {recentPosts.length > 0 && (
              <div className="bg-[#EFF6FF] rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-black text-[#022B3A] mb-4 pb-3 border-b border-blue-100">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-bold text-[#022B3A] hover:text-[#EE5B2C] transition-colors leading-snug block"
                      >
                        {post.title}
                      </Link>
                      {post.date && (
                        <span className="text-xs text-gray-400 mt-1 block">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Widget */}
            <div className="bg-[#022B3A] rounded-2xl p-6 text-white shadow-md">
              <h3 className="font-black text-lg mb-2">Free Business Valuation</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Find out what your Florida HVAC business is worth - confidentially.
              </p>
              <Link
                href="/free-valuation"
                className="block w-full text-center px-5 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm"
              >
                Get Free Valuation ?
              </Link>
            </div>

          </aside>
        </div>

        {/* CTA Band */}
        <div className="mt-20 bg-[#022B3A] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want an Estimate for Your Specific Business?</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Try our interactive Florida HVAC valuation calculator to see what your cash flow, maintenance agreement base, and team structure are worth.
            </p>
          </div>
          <Link
            href="/hvac-business-valuation-calculator"
            className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all whitespace-nowrap"
          >
            Open Valuation Calculator ?
          </Link>
        </div>
      </div>
    </section>
  );
}
