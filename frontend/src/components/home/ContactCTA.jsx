import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 text-white/90 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Limited Slots Available
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to 10x Your<br />Digital Growth?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join 200+ businesses that trust Digital Marketing Hub to deliver extraordinary results. Get your free strategy consultation today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-base px-8 py-4">
              Get Free Consultation <FiArrowRight />
            </Link>
            <a href="tel:+919999999999" className="btn-outline text-base px-8 py-4">
              <FiPhone /> Call Us Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 justify-center text-white/70 text-sm">
            {['✅ No Setup Fee', '✅ Free Strategy Session', '✅ Results in 30 Days', '✅ Cancel Anytime'].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
