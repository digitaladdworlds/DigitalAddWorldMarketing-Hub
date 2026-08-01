import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { protect, adminOnly } from '../middleware/auth.js'

const router = express.Router()

const uploadDir = 'uploads/'
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage,
  limits: { fileSize: Number(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg|pdf|mp4/
    if (allowed.test(path.extname(file.originalname).toLowerCase())) cb(null, true)
    else cb(new Error('File type not allowed'))
  }
})

router.post('/upload', protect, adminOnly, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' })
  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  res.json({ success: true, url, filename: req.file.filename, size: req.file.size })
})

router.get('/', protect, adminOnly, (req, res) => {
  try {
    const files = fs.readdirSync(uploadDir).map(name => ({
      name, url: `${req.protocol}://${req.get('host')}/uploads/${name}`,
      size: fs.statSync(path.join(uploadDir, name)).size
    }))
    res.json({ success: true, data: files })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.delete('/:filename', protect, adminOnly, (req, res) => {
  try {
    const filePath = path.join(uploadDir, req.params.filename)
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    res.json({ success: true, message: 'File deleted' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
