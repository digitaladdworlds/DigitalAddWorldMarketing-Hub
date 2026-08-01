import mongoose from 'mongoose'
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: String, photo: String,
  linkedin: String, twitter: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true })
export default mongoose.model('Team', teamSchema)
