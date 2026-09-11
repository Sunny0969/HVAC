import mongoose from 'mongoose';
import { toSlug } from '../utils/slug.js';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
  },
  { timestamps: true }
);

categorySchema.pre('validate', function preValidate(next) {
  if (this.isModified('name') || !this.slug) {
    this.slug = toSlug(this.name);
  }
  next();
});

export const Category = mongoose.model('Category', categorySchema);
