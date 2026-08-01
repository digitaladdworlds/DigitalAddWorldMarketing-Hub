import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiTrendingUp, FiUsers, FiZap, FiShield, FiHeadphones, FiBarChart2 } from 'react-icons/fi'
import SectionHeader from '../common/SectionHeader'

const reasons = [
  { icon: FiTrendingUp, title: 'ROI-Focused Strategy', desc: 'Every campaign and project we deliver is optimized for measurable return on investment — not vanity metrics.' },
  { icon: FiBarChart2, title: 'Data-Driven Decisions', desc: 'We back every strategy with real-time analytics, A/B testing, and performance insights to maximize results.' },
  { icon: FiUsers, title: 'Dedicated Expert Team', desc: 'Our team of 50+ certified digital marketing experts, designers, and developers are committed to your success.' },
  { icon: FiZap, title: 'Fast Turnaround', desc: 'We deliver without cutting corners — fast execution, agile workflows, and consistent quality every time.' },
  { icon: FiShield, title: 'Transparent Reporting', desc: 'You\'ll always know what\'s happening — weekly reports, dashboard access, and regular strategy calls.' },
  { icon: FiHeadphones, title: '24/7 Support', desc: 'Our support team is always available to address your concerns and keep your campaigns running smoothly.' },
]

const stats = [
  { value: '98%', label: 'Client Retention Rate' },
  { value: '3.2x', label: 'Average ROAS' },
  { value: '180%', label: 'Avg. Organic Traffic Boost' },
  { value: '40%', label: 'Avg. Cost per Lead Reduction' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              badge="Why Choose Us"
              title="Results That Speak"
              highlight="For Themselves"
              subtitle="We don't just run campaigns — we build digital growth engines that consistently deliver exceptional results for businesses of all sizes."
              center={false}
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 text-white"
                >
                  <div className="font-display font-bold text-3xl mb-1">{stat.value}</div>
                  <div className="text-white/75 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {['ISO Certified Agency', 'Google Partner', 'Meta Business Partner', 'Award-Winning Campaigns'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-darkcard rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
