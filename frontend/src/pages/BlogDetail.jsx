import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ContactCTA from '../components/home/ContactCTA'

export default function BlogDetail() {
  const { slug } = useParams()
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Blog Post'
  return (
    <>
      <Helmet><title>{title} | Blog | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white">
        <div className="container-custom">
          <Link to="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Back to Blog</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="tag-badge bg-white/20 text-white mb-4">Article</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{title}</h1>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Full blog content is managed dynamically from the Admin Panel. Admins can create rich articles with formatting, images, and SEO metadata.</p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
