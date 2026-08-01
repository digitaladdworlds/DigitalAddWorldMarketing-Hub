import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const serviceData = {
  'website-development': {
    title: 'Website Development',
    tagline: 'Websites That Convert Visitors Into Customers',
    desc: 'We design and develop high-performance, SEO-optimized websites that represent your brand perfectly and drive real business results.',
    benefits: ['Increase online visibility by 300%', 'Boost conversion rates by 45%', 'Mobile-first, blazing-fast performance', 'SEO-ready architecture from day one', 'Secure, scalable, and easy to manage'],
    features: ['Custom Design & Development', 'React / Next.js Architecture', 'CMS Integration', 'E-Commerce Capabilities', 'API Integrations', 'Performance Optimization', 'Security Hardening', 'Analytics Setup'],
    process: [
      { step: '01', title: 'Discovery', desc: 'We analyze your business, audience, and competitors to define the perfect strategy.' },
      { step: '02', title: 'Design', desc: 'Our designers create stunning wireframes and UI mockups aligned with your brand.' },
      { step: '03', title: 'Development', desc: 'Expert developers build your site with clean, scalable, production-ready code.' },
      { step: '04', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and performance benchmarks.' },
      { step: '05', title: 'Launch', desc: 'Smooth deployment with monitoring and post-launch support.' },
    ],
    faqs: [
      { q: 'How long does website development take?', a: 'Typically 4–8 weeks depending on complexity. We provide a detailed timeline after discovery.' },
      { q: 'Do you provide hosting?', a: 'Yes, we offer managed hosting solutions on AWS and Vercel with 99.9% uptime SLA.' },
      { q: 'Will I be able to update the website myself?', a: 'Absolutely. We build with user-friendly CMS systems so you can manage content without technical skills.' },
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    tagline: 'Full-Funnel Marketing That Drives Revenue',
    desc: 'We build integrated digital marketing ecosystems that attract, engage, and convert your ideal customers at scale.',
    benefits: ['3x average return on marketing spend', 'Consistent lead flow every month', 'Brand authority across all channels', 'Reduced customer acquisition cost', 'Measurable, transparent results'],
    features: ['SEO & Content Strategy', 'Paid Advertising (Meta & Google)', 'Social Media Management', 'Email Marketing', 'Conversion Rate Optimization', 'Marketing Automation', 'Analytics & Reporting', 'Competitor Analysis'],
    process: [
      { step: '01', title: 'Audit', desc: 'Comprehensive analysis of your current digital presence and market opportunity.' },
      { step: '02', title: 'Strategy', desc: 'Custom growth roadmap aligned with your business goals and budget.' },
      { step: '03', title: 'Execute', desc: 'Launch campaigns across all channels with precise targeting.' },
      { step: '04', title: 'Optimize', desc: 'Continuous A/B testing and optimization for maximum performance.' },
      { step: '05', title: 'Scale', desc: 'Scale what works to compound your growth month over month.' },
    ],
    faqs: [
      { q: 'How soon will I see results?', a: 'Paid campaigns show results within days. SEO and organic growth typically shows significant lift in 3–6 months.' },
      { q: 'What\'s the minimum budget?', a: 'We work with budgets starting from ₹30,000/month. We\'ll help you allocate it for maximum impact.' },
      { q: 'Do you provide monthly reports?', a: 'Yes, you get detailed monthly reports with a transparent breakdown of every rupee spent and result achieved.' },
    ]
  }
}

const defaultService = {
  title: 'Our Service',
  tagline: 'Driving Digital Growth for Your Business',
  desc: 'We deliver specialized digital services designed to elevate your brand, attract customers, and accelerate your business growth.',
  benefits: ['Proven strategies that deliver results', 'Dedicated expert team', 'Transparent reporting', 'Scalable solutions', 'Ongoing support'],
  features: ['Strategy & Planning', 'Expert Execution', 'Performance Tracking', 'Regular Reporting', 'Continuous Optimization'],
  process: [
    { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and challenges in depth.' },
    { step: '02', title: 'Strategy', desc: 'Build a customized action plan tailored to your objectives.' },
    { step: '03', title: 'Execute', desc: 'Our experts implement the strategy with precision.' },
    { step: '04', title: 'Optimize', desc: 'Continuous improvement based on data and results.' },
    { step: '05', title: 'Report', desc: 'Transparent reporting on all key performance metrics.' },
  ],
  faqs: [
    { q: 'How do we get started?', a: 'Book a free consultation call and our team will guide you through the entire process.' },
    { q: 'Do you offer packages?', a: 'Yes, we have flexible packages for startups, growing businesses, and enterprises.' },
  ]
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceData[slug] || { ...defaultService, title: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Service' }

  return (
    <>
      <Helmet>
        <title>{service.title} | Digital Marketing Hub</title>
        <meta name="description" content={service.desc} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/services" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Back to Services</Link>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">{service.title}</h1>
            <p className="text-accent text-xl font-semibold mb-4">{service.tagline}</p>
            <p className="text-white/80 text-lg max-w-2xl">{service.desc}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-accent">Get Free Quote <FiArrowRight /></Link>
              <a href="https://wa.me/919999999999" className="btn-outline">Chat on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
                Why Our <span className="gradient-text">{service.title}</span> Delivers Results
              </h2>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-gray-50 dark:bg-darkcard rounded-2xl p-4 border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50 dark:bg-darkcard">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white text-center mb-12">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center relative">
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4 relative z-10 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white text-center mb-10">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-darkcard rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
