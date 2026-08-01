import 'dotenv/config'
import mongoose from 'mongoose'
import User from '../models/User.js'
import Service from '../models/Service.js'
import FAQ from '../models/FAQ.js'
import Settings from '../models/Settings.js'

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/digital-marketing-hub')
  console.log('Connected to MongoDB')

  // Create admin user
  const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL || 'admin@digitalmarketinghub.in' })
  if (!existingAdmin) {
    await User.create({
      name: 'DMH Admin',
      email: process.env.ADMIN_EMAIL || 'admin@digitalmarketinghub.in',
      password: process.env.ADMIN_PASSWORD || 'Admin@DMH2025',
      role: 'admin'
    })
    console.log('✅ Admin user created')
  } else {
    console.log('ℹ️  Admin user already exists')
  }

  // Seed services
  const serviceCount = await Service.countDocuments()
  if (serviceCount === 0) {
    await Service.insertMany([
      { title: 'Website Development', slug: 'website-development', description: 'High-performance, SEO-optimized websites built with modern tech stack.', features: ['Custom Design', 'React/Next.js', 'SEO Optimized', 'Mobile First'], order: 1 },
      { title: 'Digital Marketing', slug: 'digital-marketing', description: 'Full-funnel digital marketing strategies delivering measurable ROI.', features: ['SEO', 'Paid Ads', 'Social Media', 'Email Marketing'], order: 2 },
      { title: 'SEO Optimization', slug: 'seo', description: 'Rank higher and drive more organic traffic with our proven SEO strategies.', features: ['Technical SEO', 'On-Page SEO', 'Link Building', 'Content Strategy'], order: 3 },
      { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Build brand authority and engage your audience across all platforms.', features: ['Content Creation', 'Community Management', 'Analytics', 'Growth Strategy'], order: 4 },
      { title: 'Mobile App Development', slug: 'mobile-app-development', description: 'Native and cross-platform mobile apps for iOS and Android.', features: ['Flutter/React Native', 'iOS & Android', 'API Integration', 'App Store Optimization'], order: 5 },
    ])
    console.log('✅ Services seeded')
  }

  // Seed FAQs
  const faqCount = await FAQ.countDocuments()
  if (faqCount === 0) {
    await FAQ.insertMany([
      { question: 'What services does Digital Marketing Hub offer?', answer: 'We offer website development, mobile app development, SEO, social media marketing, paid advertising, branding, UI/UX design, e-commerce solutions, and more.', order: 1 },
      { question: 'How long does it take to see results from digital marketing?', answer: 'Paid advertising shows results within days. SEO and organic strategies show significant improvement in 3–6 months.', order: 2 },
      { question: 'What is the minimum budget to work with you?', answer: 'We offer packages starting from ₹15,000/month for basic services. Contact us for a custom quote.', order: 3 },
    ])
    console.log('✅ FAQs seeded')
  }

  // Seed settings
  const settingsCount = await Settings.countDocuments()
  if (settingsCount === 0) {
    await Settings.insertMany([
      { key: 'company_name', value: 'Digital Marketing Hub', group: 'general' },
      { key: 'company_tagline', value: 'Premium Digital Growth Agency', group: 'general' },
      { key: 'company_phone', value: '+91 99999 99999', group: 'contact' },
      { key: 'company_email', value: 'info@digitalmarketinghub.in', group: 'contact' },
      { key: 'company_address', value: 'Jaipur, Rajasthan, India — 302001', group: 'contact' },
      { key: 'whatsapp_number', value: '919999999999', group: 'contact' },
      { key: 'instagram', value: 'https://www.instagram.com/digitalmarketinghub.in/', group: 'social' },
      { key: 'facebook', value: 'https://www.facebook.com/digitalmarketinghub.in/', group: 'social' },
    ])
    console.log('✅ Settings seeded')
  }

  console.log('\n🎉 Seed complete!')
  console.log(`\nAdmin Login:\n  Email: ${process.env.ADMIN_EMAIL || 'admin@digitalmarketinghub.in'}\n  Password: ${process.env.ADMIN_PASSWORD || 'Admin@DMH2025'}\n`)
  process.exit(0)
}

seed().catch(err => { console.error(err); process.exit(1) })
