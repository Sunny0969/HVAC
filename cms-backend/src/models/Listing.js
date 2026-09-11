import mongoose from 'mongoose';
import { toSlug as slugify } from '../utils/slug.js';

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, sparse: true, trim: true },
    status: {
      type: String,
      enum: ['Active', 'Under Contract', 'Sold', 'Draft'],
      default: 'Active',
    },
    location: { type: String, trim: true },
    industry: { type: String, trim: true },
    askingPrice: { type: Number },
    revenue: { type: Number },
    cashFlow: { type: Number },
    ebitda: { type: Number },

    description: { type: String },
    realEstate: { type: String },
    ffe: { type: String },
    inventory: { type: String },
    employees: { type: String },
    yearEstablished: { type: String },
    reasonSelling: { type: String },
    supportTraining: { type: String },
    marketCompetition: { type: String },

    coverImage: { type: String, default: '' },
    coverImageAlt: { type: String, default: '' },

    faqs: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],

    seo: {
      metaTitle: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

listingSchema.pre('save', async function (next) {
  if (!this.slug) {
    let base = slugify(this.title);
    let current = base;
    let count = 1;
    while (await mongoose.models.Listing.findOne({ slug: current, _id: { $ne: this._id } })) {
      current = `${base}-${count}`;
      count++;
    }
    this.slug = current;
  }
  next();
});

export default mongoose.models.Listing || mongoose.model('Listing', listingSchema);

