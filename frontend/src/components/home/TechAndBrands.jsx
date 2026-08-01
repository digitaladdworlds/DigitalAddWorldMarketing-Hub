import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Next.js', icon: '▲' },
  { name: 'AWS', icon: '☁️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'Flutter', icon: '💙' },
  { name: 'WordPress', icon: '🔵' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'Google Ads', icon: '🎯' },
  { name: 'Meta Ads', icon: '📘' },
]

const brands = [
  { name: 'Digital Add World', url: 'https://digitaladdworld.in', desc: 'Technology & Business Solutions' },
  { name: 'KheloExchange', url: '#', desc: 'Online Gaming & Sports' },
  { name: 'StoreMarket', url: 'https://storemarket.in', desc: 'E-Commerce & Marketplace' },
  { name: 'DPK Pay', url: '#', desc: 'Digital Payment & FinTech' },
  { name: 'Digital Marketing Hub', url: '#', desc: 'Digital Marketing Solutions' },
]

export default function TechAndBrands() {
  return (
    <>
      {/* Tech Stack */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="container-custom">
          <SectionHeader badge="Technology" title="Powered by" highlight="Cutting-Edge Tech" subtitle="We leverage the most modern and battle-tested technologies to build scalable, high-performance digital solutions." />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="bg-gray-50 dark:bg-darkcard rounded-2xl p-4 flex flex-col items-center gap-2 border border-gray-100 dark:border-gray-800 cursor-default"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Portfolio */}
      <section className="py-16 bg-gray-50 dark:bg-darkcard">
        <div className="container-custom">
          <SectionHeader badge="Our Group" title="Brands Under" highlight="Digital Add World" subtitle="A portfolio of innovative brands across technology, e-commerce, gaming, and financial services." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-4">
                  {brand.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{brand.name}</h3>
                <p className="text-gray-400 text-xs">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
