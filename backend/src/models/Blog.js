import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: String, thumbnail: String,
  category: String, tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  metaTitle: String, metaDesc: String,
  isPublished: { type: Boolean, default: false },
  publishedAt: Date,
  views: { type: Number, default: 0 },
}, { timestamps: true })
export default mongoose.model('Blog', blogSchema)
