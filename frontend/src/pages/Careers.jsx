import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiBriefcase, FiArrowRight } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const jobs = [
  { title: 'Senior SEO Specialist', dept: 'Marketing', type: 'Full-time', location: 'Jaipur / Remote', exp: '3+ years' },
  { title: 'React.js Developer', dept: 'Technology', type: 'Full-time', location: 'Jaipur', exp: '2+ years' },
  { title: 'Social Media Manager', dept: 'Marketing', type: 'Full-time', location: 'Jaipur', exp: '2+ years' },
  { title: 'Meta Ads Specialist', dept: 'Paid Media', type: 'Full-time', location: 'Remote', exp: '1+ years' },
  { title: 'UI/UX Designer', dept: 'Design', type: 'Full-time', location: 'Jaipur', exp: '2+ years' },
  { title: 'Content Writer', dept: 'Content', type: 'Full-time / Freelance', location: 'Remote', exp: '1+ years' },
]

export default function Careers() {
  const [active, setActive] = useState(null)
  return (
    <>
      <Helmet><title>Careers | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Build Your Career With Us</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Join a team of passionate digital marketers, developers, and creators building the future of digital growth.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-darkcard rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="flex items-center gap-1 text-gray-400 text-sm"><FiBriefcase className="w-3 h-3" />{job.dept}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm"><FiClock className="w-3 h-3" />{job.type}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm"><FiMapPin className="w-3 h-3" />{job.location}</span>
                      <span className="tag-badge">{job.exp}</span>
                    </div>
                  </div>
                  <button onClick={() => setActive(active === i ? null : i)} className="btn-primary py-2.5 px-5 text-sm">
                    Apply Now <FiArrowRight />
                  </button>
                </div>
                {active === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Application submitted! We\'ll contact you soon.') }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required placeholder="Your Name" className="input-field" />
                        <input required type="email" placeholder="Email Address" className="input-field" />
                        <input required placeholder="Phone Number" className="input-field" />
                        <input placeholder="Portfolio/LinkedIn URL" className="input-field" />
                      </div>
                      <textarea rows={3} placeholder="Why are you the right fit for this role?" className="input-field resize-none" />
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer bg-gray-50 dark:bg-gray-800 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                          📎 Upload Resume
                          <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                        </label>
                        <button type="submit" className="btn-primary py-2.5 px-6 text-sm">Submit Application</button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
