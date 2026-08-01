import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import SectionHeader from '../components/common/SectionHeader'
import ContactCTA from '../components/home/ContactCTA'

const categories = ['All', 'Web Development', 'App Development', 'Digital Marketing', 'Branding']

const projects = [
  { title: 'StoreMarket E-Commerce Platform', category: 'Web Development', desc: 'Full-stack e-commerce marketplace with 500+ vendors and real-time inventory management.', tags: ['React', 'Node.js', 'MongoDB'], color: 'from-blue-500 to-indigo-600', slug: 'storemarket' },
  { title: 'HealthFirst Mobile App', category: 'App Development', desc: 'Healthcare appointment booking app with 50,000+ downloads and 4.8★ rating.', tags: ['Flutter', 'Firebase'], color: 'from-green-500 to-teal-600', slug: 'healthfirst-app' },
  { title: 'TechVenture SEO Campaign', category: 'Digital Marketing', desc: 'Organic traffic grew 280% in 6 months through strategic content and link building.', tags: ['SEO', 'Content'], color: 'from-orange-500 to-red-600', slug: 'techventure-seo' },
  { title: 'StyleBoutique Brand Identity', category: 'Branding', desc: 'Complete brand overhaul including logo, guidelines, packaging, and social assets.', tags: ['Branding', 'Design'], color: 'from-pink-500 to-purple-600', slug: 'styleboutique-brand' },
  { title: 'Jain Exports Web App', category: 'Web Development', desc: 'B2B export management portal with real-time order tracking and client dashboard.', tags: ['Next.js', 'PostgreSQL'], color: 'from-purple-500 to-violet-600', slug: 'jain-exports' },
  { title: 'EduTech Meta Ads Campaign', category: 'Digital Marketing', desc: 'Generated 1,200 qualified leads in 30 days at ₹180 cost per lead for EdTech brand.', tags: ['Meta Ads', 'Lead Gen'], color: 'from-cyan-500 to-blue-600', slug: 'edutech-ads' },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <Helmet>
        <title>Our Projects | Digital Marketing Hub</title>
        <meta name="description" content="Explore our portfolio of websites, apps, marketing campaigns, and branding projects delivering measurable results." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Our Work Speaks for Itself</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Real projects. Real results. Explore our portfolio of successful digital solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${active === cat ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' : 'bg-gray-100 dark:bg-darkcard text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div key={project.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/projects/${project.slug}`}
                  className="group block bg-white dark:bg-darkcard rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                    <span className="text-white font-display font-bold text-xl text-center px-6">{project.title}</span>
                  </div>
                  <div className="p-6">
                    <span className="tag-badge mb-3">{project.category}</span>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{project.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">{tag}</span>)}
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
