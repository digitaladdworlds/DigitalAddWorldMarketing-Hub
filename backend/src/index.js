import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.js'
import servicesRoutes from './routes/services.js'
import projectsRoutes from './routes/projects.js'
import blogRoutes from './routes/blog.js'
import teamRoutes from './routes/team.js'
import testimonialsRoutes from './routes/testimonials.js'
import faqRoutes from './routes/faq.js'
import leadsRoutes from './routes/leads.js'
import caseStudiesRoutes from './routes/caseStudies.js'
import settingsRoutes from './routes/settings.js'
import mediaRoutes from './routes/media.js'

const app = express()
const PORT = process.env.PORT || 5000

// Render sits behind a reverse proxy — trust the first hop so
// express-rate-limit reads X-Forwarded-For correctly
app.set('trust proxy', 1)

// Connect DB
connectDB()

// Security middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }))
app.use(cors({
  origin: true,
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200, message: 'Too many requests, please try again later.' })
app.use('/api/', limiter)

// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Logging
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'))

// Static files
app.use('/uploads', express.static('uploads'))

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'DMH API is running', timestamp: new Date().toISOString() }))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/team', teamRoutes)
app.use('/api/testimonials', testimonialsRoutes)
app.use('/api/faq', faqRoutes)
app.use('/api/leads', leadsRoutes)
app.use('/api/case-studies', caseStudiesRoutes)
app.use('/api/settings', settingsRoutes)
app.use('/api/media', mediaRoutes)

// 404
app.use('*', (req, res) => res.status(404).json({ success: false, message: 'Route not found' }))

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.statusCode || 500).json({ success: false, message: err.message || 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`\n🚀 DMH Backend running on port ${PORT}`)
  console.log(`📊 Environment: ${process.env.NODE_ENV}`)
  console.log(`🌐 API: http://localhost:${PORT}/api\n`)
})
