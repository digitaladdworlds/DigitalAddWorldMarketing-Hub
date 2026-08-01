import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiClock, FiUser } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const posts = [
  { title: '10 SEO Strategies That Will Dominate Search Rankings in 2025', category: 'SEO', author: 'Priya Sharma', date: 'Jan 15, 2025', readTime: '8 min read', slug: 'seo-strategies-2025', color: 'from-blue-500 to-indigo-600' },
  { title: 'How to Build a High-Converting Landing Page', category: 'Conversion', author: 'Rahul Verma', date: 'Jan 22, 2025', readTime: '6 min read', slug: 'high-converting-landing-page', color: 'from-green-500 to-teal-600' },
  { title: 'Meta Ads vs Google Ads: Which is Right for Your Business?', category: 'Paid Ads', author: 'Mohit Jain', date: 'Feb 5, 2025', readTime: '10 min read', slug: 'meta-ads-vs-google-ads', color: 'from-purple-500 to-pink-600' },
  { title: 'The Complete Guide to Social Media Marketing in India', category: 'Social Media', author: 'Sneha Patel', date: 'Feb 18, 2025', readTime: '12 min read', slug: 'social-media-marketing-guide-india', color: 'from-orange-500 to-red-600' },
  { title: 'Why Every Business Needs a Mobile-First Website', category: 'Web Development', author: 'Rahul Verma', date: 'Mar 2, 2025', readTime: '7 min read', slug: 'mobile-first-website', color: 'from-teal-500 to-cyan-600' },
  { title: 'Building Brand Authority Through Content Marketing', category: 'Content', author: 'Priya Sharma', date: 'Mar 10, 2025', readTime: '9 min read', slug: 'brand-authority-content-marketing', color: 'from-indigo-500 to-violet-600' },
]
const categories = ['All', 'SEO', 'Paid Ads', 'Social Media', 'Web Development', 'Content', 'Conversion']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')
  const filtered = posts.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
  )
  return (
    <>
      <Helmet><title>Blog | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Digital Marketing Insights</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">Expert tips, strategies, and industry insights to grow your business online.</p>
            <div className="max-w-md mx-auto relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent" />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${cat === c ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' : 'bg-gray-100 dark:bg-darkcard text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary'}`}>{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.slug}`} className="group block bg-white dark:bg-darkcard rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                  <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                    <span className="absolute top-4 left-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><FiUser className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><FiClock className="w-3 h-3" />{post.readTime}</span>
                      <span>{post.date}</span>
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
