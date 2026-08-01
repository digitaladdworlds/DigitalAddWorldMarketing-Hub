import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMonitor, FiSmartphone, FiTrendingUp, FiSearch, FiShare2, FiTarget, FiShoppingCart, FiPenTool, FiCode, FiLayout, FiDatabase, FiCreditCard, FiUsers } from 'react-icons/fi'
import SectionHeader from '../components/common/SectionHeader'
import ContactCTA from '../components/home/ContactCTA'

const services = [
  { icon: FiMonitor, title: 'Website Development', slug: 'website-development', color: 'from-blue-500 to-blue-700', desc: 'High-performance, SEO-optimized websites that convert visitors into customers. Built with React, Next.js and modern tech stack.' },
  { icon: FiCode, title: 'Web Application Development', slug: 'web-app-development', color: 'from-indigo-500 to-indigo-700', desc: 'Scalable, feature-rich web applications for SaaS, portals, and business tools with robust backend architecture.' },
  { icon: FiSmartphone, title: 'Mobile App Development', slug: 'mobile-app-development', color: 'from-purple-500 to-purple-700', desc: 'Native and cross-platform mobile apps for iOS and Android with stunning UX and enterprise-grade performance.' },
  { icon: FiTrendingUp, title: 'Digital Marketing', slug: 'digital-marketing', color: 'from-green-500 to-green-700', desc: 'Full-funnel digital marketing strategies combining SEO, paid ads, social media, and content for maximum ROI.' },
  { icon: FiSearch, title: 'SEO Optimization', slug: 'seo', color: 'from-orange-500 to-orange-700', desc: 'Technical SEO, on-page optimization, link building, and content strategies that dominate search engine rankings.' },
  { icon: FiShare2, title: 'Social Media Marketing', slug: 'social-media-marketing', color: 'from-pink-500 to-pink-700', desc: 'Strategic social media management and content creation that builds brand authority and drives engagement.' },
  { icon: FiTarget, title: 'Meta Ads', slug: 'paid-advertising', color: 'from-red-500 to-red-700', desc: 'High-converting Facebook and Instagram ad campaigns with precision targeting and creative optimization.' },
  { icon: FiTarget, title: 'Google Ads', slug: 'google-ads', color: 'from-yellow-500 to-yellow-700', desc: 'PPC campaigns, Shopping Ads, and YouTube Ads that capture high-intent traffic and maximize conversions.' },
  { icon: FiPenTool, title: 'Branding', slug: 'branding', color: 'from-teal-500 to-teal-700', desc: 'Strategic brand identity design — logos, guidelines, brand voice, and visual systems that leave lasting impressions.' },
  { icon: FiUsers, title: 'Lead Generation', slug: 'lead-generation', color: 'from-cyan-500 to-cyan-700', desc: 'Systematic lead generation funnels using paid ads, SEO, and content marketing to fill your sales pipeline.' },
  { icon: FiShoppingCart, title: 'E-Commerce Development', slug: 'ecommerce', color: 'from-emerald-500 to-emerald-700', desc: 'Complete e-commerce solutions on Shopify, WooCommerce, or custom platforms optimized for maximum sales.' },
  { icon: FiLayout, title: 'UI/UX Design', slug: 'ui-ux-design', color: 'from-violet-500 to-violet-700', desc: 'User research, wireframing, prototyping and pixel-perfect design that delights users and drives conversions.' },
  { icon: FiDatabase, title: 'Software Development', slug: 'software-development', color: 'from-slate-500 to-slate-700', desc: 'Custom software solutions, automation tools, and business systems built to scale with your organization.' },
  { icon: FiCreditCard, title: 'CRM Development', slug: 'crm-development', color: 'from-rose-500 to-rose-700', desc: 'Custom CRM and business management systems that streamline operations and supercharge your sales team.' },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Digital Marketing Hub</title>
        <meta name="description" content="Explore our comprehensive digital services — Website Development, Digital Marketing, SEO, Paid Ads, Branding, Mobile Apps and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 text-white/90 text-xs font-bold tracking-widest uppercase mb-6">
              Our Services
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              End-to-End Digital Solutions
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Everything your business needs to dominate the digital landscape — under one roof, backed by proven expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="What We Offer" title="Services Designed for" highlight="Measurable Growth" subtitle="14 specialized services crafted to drive real business outcomes across every digital channel." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`}
                    className="group block bg-white dark:bg-darkcard rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary dark:text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                      Explore Service <FiArrowRight />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
