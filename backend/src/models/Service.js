import mongoose from 'mongoose'
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String },
  icon: { type: String },
  features: [String],
  benefits: [String],
  process: [{ step: String, title: String, desc: String }],
  faqs: [{ q: String, a: String }],
  metaTitle: String, metaDesc: String,
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true })
export default mongoose.model('Service', serviceSchema)
