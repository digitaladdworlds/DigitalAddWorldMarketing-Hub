import React from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const services = [
  'Website Development', 'Digital Marketing', 'SEO Optimization',
  'Social Media Marketing', 'Google & Meta Ads', 'UI/UX Design',
  'Mobile App Development', 'E-Commerce Solutions'
]

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Our Brands', path: '/brands' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'FAQ', path: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 dark:bg-dark text-white">
      {/* Top CTA */}
      <div className="bg-gradient-to-r from-primary-800 via-secondary to-primary-800 py-12">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Partner with Digital Marketing Hub and unlock exponential digital growth for your brand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Get Free Consultation <FiArrowRight />
            </Link>
            <a href="https://wa.me/9549054344" className="btn-outline">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <span className="text-white font-display font-bold">DM</span>
            </div>
            <div>
              <div className="font-display font-bold text-white leading-tight">Digital Marketing Hub</div>
              <div className="text-accent text-xs font-semibold tracking-wider">A Digital Add World Brand</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We are a premium digital marketing and technology agency helping businesses achieve extraordinary growth through innovative strategies, creative excellence, and data-driven campaigns.
          </p>
          <div className="flex gap-3">
            {[
              { icon: FiInstagram, href: 'https://www.instagram.com/dpkpayofficial/' },
              { icon: FiFacebook, href: 'https://www.facebook.com/digitaladdworld.in/' },
              { icon: FiMail, href: 'mailto:digitaladdworld799@gmail.com' },
              { icon: FiYoutube, href: 'https://www.youtube.com/@DigitalMarketingHub-dn2wc' },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-white mb-5 text-base">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className="text-gray-400 hover:text-accent text-sm flex items-center gap-2 group transition-colors">
                  <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-bold text-white mb-5 text-base">Our Services</h3>
          <ul className="space-y-2.5">
            {services.map(s => (
              <li key={s}>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-white mb-5 text-base">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FiMapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">Jaipur, Rajasthan, India — 302001</span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+919549054344" className="text-gray-400 hover:text-accent text-sm transition-colors">+91 95490 54344</a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="mailto:info@digitalmarketinghub.in" className="text-gray-400 hover:text-accent text-sm transition-colors">digitaladdworld799@gmail.com</a>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark rounded-xl text-white text-sm font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Digital Marketing Hub — A <a href="https://digitaladdworld.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Digital Add World</a> Brand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-accent text-sm transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-accent text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
