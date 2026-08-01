import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ContactCTA from '../components/home/ContactCTA'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Case Study'
  return (
    <>
      <Helmet><title>{title} | Case Studies | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white">
        <div className="container-custom">
          <Link to="/case-studies" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Back to Case Studies</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{title}</h1>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Full case study content managed from the Admin Panel. Add details about client overview, challenge, strategy, implementation, and results.</p>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
