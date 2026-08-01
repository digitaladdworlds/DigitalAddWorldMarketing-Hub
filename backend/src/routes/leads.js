import express from 'express'
import Lead from '../models/Lead.js'
import { protect, adminOnly } from '../middleware/auth.js'
import nodemailer from 'nodemailer'

const router = express.Router()

const sendLeadEmail = async (lead) => {
  if (!process.env.SMTP_USER) return
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      family: 4, // force IPv4 — Render's IPv6 route to Gmail SMTP hangs/times out
      connectionTimeout: 10000,
      greetingTimeout: 10000
    })
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.NOTIFY_EMAIL,
      subject: `🔔 New Lead: ${lead.name} — ${lead.service || 'General Inquiry'}`,
      html: `<h2>New Lead Received</h2>
        <p><b>Name:</b> ${lead.name}</p>
        <p><b>Email:</b> ${lead.email}</p>
        <p><b>Phone:</b> ${lead.phone || 'Not provided'}</p>
        <p><b>Service:</b> ${lead.service || 'General'}</p>
        <p><b>Budget:</b> ${lead.budget || 'Not specified'}</p>
        <p><b>Message:</b> ${lead.message}</p>`
    })
  } catch (e) { console.log('Email notification failed:', e.message) }
}

// Public: Submit a lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body
    if (!name || !email || !message) return res.status(400).json({ success: false, message: 'Name, email and message are required' })
    const lead = await Lead.create({ name, email, phone, service, budget, message })
    sendLeadEmail(lead)
    res.status(201).json({ success: true, message: 'Your message has been received! We\'ll contact you within 24 hours.' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Admin: Get all leads
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query
    const query = status && status !== 'all' ? { status } : {}
    const total = await Lead.countDocuments(query)
    const data = await Lead.find(query).sort('-createdAt').skip((page - 1) * limit).limit(Number(limit))
    res.json({ success: true, data, total })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Admin: Update lead status
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' })
    res.json({ success: true, data: lead })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Admin: Delete lead
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Lead deleted' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
