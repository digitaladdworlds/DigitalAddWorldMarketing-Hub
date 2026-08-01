import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiTrendingUp, FiUsers, FiAward, FiGlobe } from 'react-icons/fi'

const stats = [
  { icon: FiTrendingUp, value: '500+', label: 'Projects Delivered' },
  { icon: FiUsers, value: '200+', label: 'Happy Clients' },
  { icon: FiAward, value: '8+', label: 'Years Experience' },
  { icon: FiGlobe, value: '15+', label: 'Industries Served' },
]

const floatingBadges = [
  { text: '📈 300% Traffic Growth', top: '20%', left: '5%', delay: 0 },
  { text: '🏆 Award-Winning Agency', top: '65%', right: '4%', delay: 0.5 },
  { text: '⚡ ROI-Driven Results', bottom: '25%', left: '3%', delay: 1 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient BG */}
      <div className="absolute inset-0 gradient-bg opacity-95" />

      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Floating badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block glass-card px-4 py-2 text-white text-sm font-semibold whitespace-nowrap z-10"
          style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: badge.delay + 1.5, duration: 0.6 }}
        >
          {badge.text}
        </motion.div>
      ))}

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-5 py-2 text-white/90 text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            🚀 India's Fastest Growing Digital Agency
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Transform Your Brand with{' '}
            <span className="relative">
              <span className="text-accent">Digital Excellence</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We craft data-driven digital strategies, stunning web experiences, and high-impact marketing campaigns that skyrocket your business growth and ROI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link to="/contact" className="btn-accent text-base px-8 py-4">
              Start Your Growth Journey <FiArrowRight />
            </Link>
            <Link to="/projects" className="btn-outline text-base px-8 py-4">
              <FiPlay className="w-4 h-4" /> View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 text-center"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
                <div className="text-white/60 text-xs">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 80 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="white" className="dark:fill-dark" />
        </svg>
      </div>
    </section>
  )
}
