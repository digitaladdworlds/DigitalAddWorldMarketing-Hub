import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const plans = [
  { name: 'Startup', price: { monthly: 15000, yearly: 12000 }, color: 'from-blue-500 to-indigo-600', popular: false,
    features: ['Website Audit & Strategy', 'On-Page SEO (10 pages)', 'Social Media Management (2 platforms)', 'Monthly Performance Report', 'Email Support', '5 Social Posts/Month', 'Basic Google Analytics Setup'] },
  { name: 'Business', price: { monthly: 35000, yearly: 28000 }, color: 'from-primary to-secondary', popular: true,
    features: ['Everything in Startup', 'Full SEO Campaign', 'Meta Ads Management (₹20k budget incl)', 'Google Ads Management', 'Social Media (4 platforms)', '15 Social Posts/Month', 'Monthly Strategy Call', 'Competitor Analysis', 'Landing Page Design', 'WhatsApp Marketing'] },
  { name: 'Enterprise', price: { monthly: 75000, yearly: 60000 }, color: 'from-secondary to-accent', popular: false,
    features: ['Everything in Business', 'Dedicated Account Manager', 'Unlimited Ad Campaigns', 'Weekly Reporting & Calls', 'Custom Content Creation', 'Influencer Marketing', 'CRM Integration', 'Advanced Analytics', 'Priority 24/7 Support', 'Custom Software Solutions'] },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <>
      <Helmet><title>Pricing | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">No hidden fees. No surprises. Choose the plan that fits your growth goals.</p>
            <div className="inline-flex items-center gap-3 glass-card p-1 rounded-full">
              <button onClick={() => setYearly(false)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? 'bg-white text-primary' : 'text-white/70'}`}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${yearly ? 'bg-white text-primary' : 'text-white/70'}`}>Yearly <span className="text-accent ml-1">Save 20%</span></button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 ${plan.popular ? `bg-gradient-to-br ${plan.color} text-white shadow-2xl shadow-primary/20 scale-105` : 'bg-white dark:bg-darkcard border border-gray-100 dark:border-gray-800'}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</div>}
                <h3 className={`font-display font-bold text-xl mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                <div className={`font-display font-bold text-4xl mb-1 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  ₹{(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString()}
                  <span className={`text-sm font-normal ml-1 ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}>/mo</span>
                </div>
                {yearly && <p className={`text-sm mb-6 ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}>Billed annually</p>}
                <div className="space-y-3 my-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <FiCheck className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-accent'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold transition-all ${plan.popular ? 'bg-white text-primary hover:bg-white/90' : 'btn-primary'}`}>
                  Get Started <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-10 text-sm">All plans include free onboarding & setup. Need a custom plan? <Link to="/contact" className="text-primary dark:text-accent hover:underline">Contact us</Link></p>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
