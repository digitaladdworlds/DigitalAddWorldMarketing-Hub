import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeader from '../components/common/SectionHeader'
import ContactCTA from '../components/home/ContactCTA'

const cases = [
  { title: 'How We Grew TechVenture\'s Traffic by 280%', category: 'SEO Success', color: 'from-blue-500 to-indigo-600', slug: 'techventure-seo', metrics: [{ label: 'Traffic Growth', val: '+280%' }, { label: 'Leads', val: '+190%' }, { label: 'Revenue', val: '+120%' }] },
  { title: 'Meta Ads That Generated 1,200 Leads in 30 Days', category: 'Paid Advertising', color: 'from-purple-500 to-pink-600', slug: 'edutech-leads', metrics: [{ label: 'Leads Generated', val: '1,200' }, { label: 'Cost Per Lead', val: '₹180' }, { label: 'ROAS', val: '4.2x' }] },
  { title: 'StoreMarket: 45% Conversion Rate Boost', category: 'E-Commerce', color: 'from-green-500 to-teal-600', slug: 'storemarket-conversion', metrics: [{ label: 'Conversion Rate', val: '+45%' }, { label: 'Revenue', val: '+₹2Cr' }, { label: 'Bounce Rate', val: '-38%' }] },
]

export default function CaseStudies() {
  return (
    <>
      <Helmet><title>Case Studies | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Real Results, Real Stories</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">In-depth case studies showcasing how we've transformed businesses with digital marketing and technology.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {cases.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/case-studies/${c.slug}`}
                  className="group block bg-white dark:bg-darkcard rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className={`bg-gradient-to-br ${c.color} p-10 flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <span className="block text-white/70 text-sm font-semibold mb-2">{c.category}</span>
                        <h2 className="font-display font-bold text-2xl">{c.title}</h2>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-10">
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        {c.metrics.map((m, j) => (
                          <div key={j} className="text-center">
                            <div className="font-display font-bold text-3xl text-primary dark:text-accent mb-1">{m.val}</div>
                            <div className="text-gray-500 text-sm">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">This case study details our comprehensive approach, strategies deployed, and measurable outcomes achieved for this campaign.</p>
                      <span className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold group-hover:gap-4 transition-all">
                        Read Full Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
