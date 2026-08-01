import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, highlight, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
          light
            ? 'bg-white/20 text-white border border-white/30'
            : 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent border border-primary/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${light ? 'bg-accent' : 'bg-primary dark:bg-accent'}`} />
          {badge}
        </span>
      )}
      <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
        light ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/75' : 'text-gray-500 dark:text-gray-400'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
