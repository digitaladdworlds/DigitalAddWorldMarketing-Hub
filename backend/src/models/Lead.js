import mongoose from 'mongoose'
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String, service: String, budget: String, message: String,
  source: { type: String, default: 'website' },
  status: { type: String, enum: ['new', 'contacted', 'converted', 'lost'], default: 'new' },
  notes: String,
}, { timestamps: true })
export default mongoose.model('Lead', leadSchema)
