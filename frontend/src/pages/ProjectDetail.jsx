import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

export default function ProjectDetail() {
  const { slug } = useParams()
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Project'

  return (
    <>
      <Helmet><title>{title} | Projects | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white">
        <div className="container-custom">
          <Link to="/projects" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Back to Projects</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag-badge bg-white/20 text-white mb-4">Case Study</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{title}</h1>
            <p className="text-white/80 text-lg max-w-2xl">A comprehensive digital transformation delivering measurable results.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[{ label: 'Traffic Growth', value: '+280%' }, { label: 'Lead Generation', value: '+150%' }, { label: 'Revenue Increase', value: '+95%' }].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white text-center">
                <div className="font-display font-bold text-4xl mb-1">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {['Client Overview', 'The Challenge', 'Our Solution', 'Results Achieved'].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-darkcard rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">{section}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This section contains the detailed {section.toLowerCase()} for the {title} project. Our team worked closely with the client to understand their unique challenges and delivered a tailored solution that exceeded all KPIs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
