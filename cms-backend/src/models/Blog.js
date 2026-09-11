import mongoose from 'mongoose';
import { toSlug } from '../utils/slug.js';

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
  },
  { _id: true }
);

const seoSchema = new mongoose.Schema(
  {
    metaTitle: { type: String, default: '', trim: true },
    metaDescription: { type: String, default: '', trim: true },
    ogImage: { type: String, default: '', trim: true },
    ogImageAlt: { type: String, default: '', trim: true },
    canonicalUrl: { type: String, default: '', trim: true },
    schemaType: {
      type: String,
      enum: ['Article', 'BlogPosting', 'NewsArticle'],
      default: 'BlogPosting',
    },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    excerpt: {
      type: String,
      default: '',
      trim: true,
    },
    content: {
      type: String,
      default: '',
    },
    coverImage: {
      type: String,
      default: '',
      trim: true,
    },
    coverImageAlt: {
      type: String,
      default: '',
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    tags: {
      type: [String],
      default: [],
    },
    faqs: {
      type: [faqSchema],
      default: [],
    },
    seo: {
      type: seoSchema,
      default: () => ({}),
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
      index: true,
    },
    publishedAt: {
      type: Date,
      default: null,
      index: true,
    },
    author: {
      type: String,
      default: 'HVAC Exit Advisors',
      trim: true,
    },
  },
  { timestamps: true }
);

blogSchema.pre('validate', function preValidate(next) {
  if ((this.isModified('title') || !this.slug) && !this.isModified('slug')) {
    this.slug = toSlug(this.title);
  } else if (this.isModified('slug') && this.slug) {
    this.slug = toSlug(this.slug);
  }

  if (this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  if (this.status === 'draft') {
    // keep publishedAt if previously published (optional history)
  }

  if (Array.isArray(this.tags)) {
    this.tags = this.tags
      .map((t) => String(t).trim())
      .filter(Boolean);
  }

  next();
});

/** Shape used by the existing React frontend (blogListingCards / FullBlogPost). */
blogSchema.methods.toFrontendCard = function toFrontendCard() {
  const categoryName =
    this.category && typeof this.category === 'object' && this.category.name
      ? this.category.name
      : 'Latest';
  const seo = this.seo || {};

  return {
    id: this._id.toString(),
    slug: this.slug,
    title: this.title,
    description: this.excerpt,
    image: this.coverImage,
    imageAlt: this.coverImageAlt || '',
    date: this.publishedAt
      ? this.publishedAt.toISOString().slice(0, 10)
      : this.createdAt?.toISOString?.().slice(0, 10) || '',
    dateModified: this.updatedAt
      ? this.updatedAt.toISOString().slice(0, 10)
      : this.publishedAt
        ? this.publishedAt.toISOString().slice(0, 10)
        : this.createdAt?.toISOString?.().slice(0, 10) || '',
    tags: this.tags || [],
    category: categoryName,
    // Listing must carry CMS SEO so SPA/prerender meta never falls back to placeholders.
    seoTitle: seo.metaTitle || undefined,
    seoDescription: seo.metaDescription || undefined,
  };
};

blogSchema.methods.toFrontendPost = function toFrontendPost() {
  const card = this.toFrontendCard();
  const seo = this.seo || {};

  return {
    ...card,
    content: this.content || '',
    author: this.author || 'HVAC Exit Advisors',
    authorRole: 'Florida HVAC Business Broker',
    authorImage: 'https://www.hvacexitadvisors.com/Images/dummy.webp',
    publishDate: card.date,
    dateModified: this.updatedAt?.toISOString?.().slice(0, 10) || card.date,
    readTime: '',
    tableOfContents: [],
    relatedBlogs: [],
    faqs: (this.faqs || []).map((f, i) => ({
      id: i + 1,
      question: f.question,
      answer: f.answer,
    })),
    seoTitle: seo.metaTitle || undefined,
    seoDescription: seo.metaDescription || undefined,
    keywords: (this.tags || []).join(', ') || undefined,
    seo: {
      metaTitle: seo.metaTitle || '',
      metaDescription: seo.metaDescription || '',
      ogImage: seo.ogImage || this.coverImage || '',
      ogImageAlt: seo.ogImageAlt || this.title || '',
      canonicalUrl: seo.canonicalUrl || `https://www.hvacexitadvisors.com/blog/${this.slug}`,
      schemaType: seo.schemaType || 'BlogPosting',
    },
    status: this.status,
    publishedAt: this.publishedAt,
  };
};

export const Blog = mongoose.model('Blog', blogSchema);
