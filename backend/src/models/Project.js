import mongoose from 'mongoose'
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, enum: ['Web Development', 'App Development', 'Digital Marketing', 'Branding'], required: true },
  client: String, challenge: String, solution: String, results: String,
  tags: [String], gallery: [String], thumbnail: String,
  metrics: [{ label: String, value: String }],
  isPublished: { type: Boolean, default: true },
}, { timestamps: true })
export default mongoose.model('Project', projectSchema)
