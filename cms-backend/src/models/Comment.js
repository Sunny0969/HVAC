import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      default: null,
      index: true,
    },
    blogSlug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    blogTitle: {
      type: String,
      default: '',
      trim: true,
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
  },
  { timestamps: true }
);

commentSchema.index({ blogSlug: 1, createdAt: -1 });

commentSchema.methods.toPublic = function toPublic() {
  return {
    id: this._id.toString(),
    authorName: this.authorName,
    body: this.body,
    createdAt: this.createdAt,
  };
};

commentSchema.methods.toAdmin = function toAdmin() {
  const blogDoc = this.blog && typeof this.blog === 'object' && this.blog._id ? this.blog : null;
  return {
    _id: this._id.toString(),
    blog: blogDoc
      ? { _id: blogDoc._id.toString(), title: blogDoc.title, slug: blogDoc.slug }
      : this.blog
        ? { _id: String(this.blog) }
        : null,
    blogSlug: this.blogSlug,
    blogTitle: blogDoc?.title || this.blogTitle || this.blogSlug,
    authorName: this.authorName,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const Comment = mongoose.model('Comment', commentSchema);
