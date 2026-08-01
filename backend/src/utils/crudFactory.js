import express from 'express'
import { protect, adminOnly } from '../middleware/auth.js'

export const createCRUD = (Model, options = {}) => {
  const router = express.Router()
  const { publicGet = true, slugField = 'slug', populate = '' } = options

  // GET ALL
  router.get('/', async (req, res) => {
    try {
      const { page = 1, limit = 50, category, search, isPublished } = req.query
      const query = {}
      if (category) query.category = category
      if (isPublished !== undefined) query.isPublished = isPublished === 'true'
      if (search) query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } }
      ]
      let q = Model.find(query).sort(options.sort || '-createdAt')
      if (populate) q = q.populate(populate)
      const total = await Model.countDocuments(query)
      const data = await q.skip((page - 1) * limit).limit(Number(limit))
      res.json({ success: true, data, total, page: Number(page), pages: Math.ceil(total / limit) })
    } catch (err) {
      res.status(500).json({ success: false, message: err.message })
    }
  })

  // GET ONE
  router.get('/:id', async (req, res) => {
    try {
      const query = req.params.id.match(/^[0-9a-fA-F]{24}$/)
        ? { _id: req.params.id }
        : { [slugField]: req.params.id }
      let q = Model.findOne(query)
      if (populate) q = q.populate(populate)
      const doc = await q
      if (!doc) return res.status(404).json({ success: false, message: 'Not found' })
      res.json({ success: true, data: doc })
    } catch (err) {
      res.status(500).json({ success: false, message: err.message })
    }
  })

  // CREATE (protected)
  router.post('/', protect, adminOnly, async (req, res) => {
    try {
      const doc = await Model.create(req.body)
      res.status(201).json({ success: true, data: doc })
    } catch (err) {
      res.status(400).json({ success: false, message: err.message })
    }
  })

  // UPDATE (protected)
  router.put('/:id', protect, adminOnly, async (req, res) => {
    try {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      if (!doc) return res.status(404).json({ success: false, message: 'Not found' })
      res.json({ success: true, data: doc })
    } catch (err) {
      res.status(400).json({ success: false, message: err.message })
    }
  })

  // DELETE (protected)
  router.delete('/:id', protect, adminOnly, async (req, res) => {
    try {
      const doc = await Model.findByIdAndDelete(req.params.id)
      if (!doc) return res.status(404).json({ success: false, message: 'Not found' })
      res.json({ success: true, message: 'Deleted successfully' })
    } catch (err) {
      res.status(500).json({ success: false, message: err.message })
    }
  })

  return router
}
