import express from 'express'
import Settings from '../models/Settings.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const settings = await Settings.find()
    const obj = {}
    settings.forEach(s => { obj[s.key] = s.value })
    res.json({ success: true, data: obj })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.put('/', protect, adminOnly, async (req, res) => {
  try {
    const updates = req.body
    const ops = Object.entries(updates).map(([key, value]) => ({
      updateOne: { filter: { key }, update: { $set: { key, value } }, upsert: true }
    }))
    await Settings.bulkWrite(ops)
    res.json({ success: true, message: 'Settings updated' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
