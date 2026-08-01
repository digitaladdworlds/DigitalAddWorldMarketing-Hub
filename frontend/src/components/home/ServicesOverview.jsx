import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMonitor, FiSmartphone, FiTrendingUp, FiSearch, FiShare2, FiTarget, FiShoppingCart, FiPenTool, FiCode, FiLayout } from 'react-icons/fi'
import SectionHeader from '../common/SectionHeader'

const services = [
  { icon: FiMonitor, title: 'Website Development', desc: 'Stunning, fast, and conversion-optimized websites that represent your brand perfectly.', color: 'from-blue-500 to-blue-700', slug: 'website-development' },
  { icon: FiSmartphone, title: 'Mobile App Development', desc: 'Cross-platform mobile apps that engage users and drive business growth.', color: 'from-purple-500 to-purple-700', slug: 'mobile-app-development' },
  { icon: FiTrendingUp, title: 'Digital Marketing', desc: 'Full-funnel digital marketing strategies delivering measurable ROI.', color: 'from-green-500 to-green-700', slug: 'digital-marketing' },
  { icon: FiSearch, title: 'SEO Optimization', desc: 'Rank higher, attract more traffic, and convert visitors into customers.', color: 'from-orange-500 to-orange-700', slug: 'seo' },
  { icon: FiShare2, title: 'Social Media Marketing', desc: 'Build brand authority and engage your audience across all platforms.', color: 'from-pink-500 to-pink-700', slug: 'social-media-marketing' },
  { icon: FiTarget, title: 'Paid Advertising', desc: 'High-ROI Meta Ads and Google Ads campaigns that convert at scale.', color: 'from-red-500 to-red-700', slug: 'paid-advertising' },
  { icon: FiShoppingCart, title: 'E-Commerce Solutions', desc: 'End-to-end e-commerce platforms that maximize sales and customer retention.', color: 'from-teal-500 to-teal-700', slug: 'ecommerce' },
  { icon: FiLayout, title: 'UI/UX Design', desc: 'User-centered design that delights customers and boosts conversions.', color: 'from-indigo-500 to-indigo-700', slug: 'ui-ux-design' },
  { icon: FiPenTool, title: 'Branding', desc: 'Strategic brand identity that sets you apart and resonates with your audience.', color: 'from-yellow-500 to-yellow-700', slug: 'branding' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-darkcard">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Everything Your Business Needs to"
          highlight="Dominate Digitally"
          subtitle="From stunning websites to data-driven marketing campaigns, we provide end-to-end digital solutions tailored to accelerate your growth."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={i} variants={cardVariants}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-white dark:bg-dark rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary dark:text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More <FiArrowRight />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            Explore All Services <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
