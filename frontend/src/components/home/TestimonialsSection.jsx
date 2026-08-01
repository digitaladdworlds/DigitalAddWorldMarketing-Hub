import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeader from '../common/SectionHeader'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO, TechVenture India',
    avatar: 'RS',
    color: 'from-blue-500 to-blue-700',
    rating: 5,
    text: 'Digital Marketing Hub completely transformed our online presence. Our organic traffic grew by 280% in just 6 months, and lead quality improved dramatically. Their SEO and content strategy is truly world-class.'
  },
  {
    name: 'Priya Agarwal',
    role: 'Founder, StyleBoutique',
    avatar: 'PA',
    color: 'from-purple-500 to-purple-700',
    rating: 5,
    text: 'The e-commerce website they built for us increased our conversion rate by 45%. Their team understood our brand vision perfectly and delivered a shopping experience that our customers absolutely love.'
  },
  {
    name: 'Amit Jain',
    role: 'MD, Jain Exports Ltd.',
    avatar: 'AJ',
    color: 'from-green-500 to-green-700',
    rating: 5,
    text: 'We saw a 3.5x return on our Meta Ads investment within the first month. The DMH team\'s targeting strategy and creative approach is outstanding. They genuinely care about your results.'
  },
  {
    name: 'Neha Gupta',
    role: 'Director, EduTech Solutions',
    avatar: 'NG',
    color: 'from-orange-500 to-orange-700',
    rating: 5,
    text: 'From branding to social media to paid ads — Digital Marketing Hub handles everything seamlessly. Our brand recognition has skyrocketed and we\'re getting inbound leads every single day now.'
  },
  {
    name: 'Vikram Singh',
    role: 'Co-Founder, HealthFirst',
    avatar: 'VS',
    color: 'from-red-500 to-red-700',
    rating: 5,
    text: 'The mobile app they built for us is absolutely top-tier. User ratings are consistently above 4.8 stars on both platforms. Their development process was smooth, transparent, and delivered on time.'
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (dir) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + testimonials.length) % testimonials.length)
  }

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-darkcard">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients"
          highlight="Say About Us"
          subtitle="Don't take our word for it — hear directly from the businesses we've helped achieve extraordinary digital growth."
        />

        {/* Featured */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-dark rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800 relative"
            >
              <div className="text-6xl text-primary/10 dark:text-primary/20 font-display absolute top-6 left-8">"</div>
              <div className="flex mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                {testimonials[current].text}
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 dark:text-white">{testimonials[current].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => navigate(-1)} className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors dark:border-primary/40 dark:text-accent">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-primary dark:bg-accent' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
            <button onClick={() => navigate(1)} className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors dark:border-primary/40 dark:text-accent">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white dark:bg-dark rounded-2xl p-5 border ${i === 1 ? 'border-primary dark:border-accent shadow-md' : 'border-gray-100 dark:border-gray-800'}`}
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => <FiStar key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">{t.text}</p>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>{t.avatar}</div>
                <div>
                  <div className="text-gray-900 dark:text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
