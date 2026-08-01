import mongoose from 'mongoose'
const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  client: String, industry: String, category: String,
  challenge: String, solution: String, results: String,
  metrics: [{ label: String, value: String }],
  thumbnail: String, gallery: [String],
  isPublished: { type: Boolean, default: true },
}, { timestamps: true })
export default mongoose.model('CaseStudy', caseStudySchema)
