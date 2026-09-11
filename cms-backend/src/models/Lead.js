import mongoose from 'mongoose';

const LEAD_TYPES = ['form', 'whatsapp'];
const LEAD_STATUSES = ['new', 'read', 'archived'];

const leadSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: LEAD_TYPES,
      required: true,
      index: true,
    },
    source: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
      index: true,
    },
    status: {
      type: String,
      enum: LEAD_STATUSES,
      default: 'new',
      index: true,
    },
    name: {
      type: String,
      default: '',
      trim: true,
      maxlength: 120,
      index: true,
    },
    email: {
      type: String,
      default: '',
      trim: true,
      lowercase: true,
      maxlength: 200,
    },
    phone: {
      type: String,
      default: '',
      trim: true,
      maxlength: 60,
    },
    company: {
      type: String,
      default: '',
      trim: true,
      maxlength: 160,
    },
    /** Page path / placement used as “location” filter (where the action happened). */
    location: {
      type: String,
      default: '',
      trim: true,
      maxlength: 300,
      index: true,
    },
    message: {
      type: String,
      default: '',
      trim: true,
      maxlength: 5000,
    },
    pagePath: {
      type: String,
      default: '',
      trim: true,
      maxlength: 300,
    },
    pageUrl: {
      type: String,
      default: '',
      trim: true,
      maxlength: 500,
    },
    placement: {
      type: String,
      default: '',
      trim: true,
      maxlength: 80,
    },
    extra: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

leadSchema.index({ createdAt: -1 });
leadSchema.index({ type: 1, createdAt: -1 });
leadSchema.index({ status: 1, type: 1, createdAt: -1 });
leadSchema.index({ name: 'text', email: 'text', company: 'text', message: 'text', location: 'text' });

leadSchema.methods.toAdmin = function toAdmin() {
  return {
    _id: this._id.toString(),
    type: this.type,
    source: this.source,
    status: this.status,
    name: this.name,
    email: this.email,
    phone: this.phone,
    company: this.company,
    location: this.location || this.pagePath || '',
    message: this.message,
    pagePath: this.pagePath,
    pageUrl: this.pageUrl,
    placement: this.placement,
    extra: this.extra || {},
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const Lead = mongoose.model('Lead', leadSchema);
export { LEAD_TYPES, LEAD_STATUSES };
