import mongoose from 'mongoose'
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String, company: String, photo: String,
  text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  videoUrl: String,
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true })
export default mongoose.model('Testimonial', testimonialSchema)
