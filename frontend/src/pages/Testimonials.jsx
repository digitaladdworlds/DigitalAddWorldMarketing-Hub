import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const testimonials = [
  { name: 'Rajesh Sharma', role: 'CEO, TechVenture India', avatar: 'RS', color: 'from-blue-500 to-blue-700', rating: 5, text: 'Digital Marketing Hub completely transformed our online presence. Our organic traffic grew by 280% in just 6 months, and lead quality improved dramatically.' },
  { name: 'Priya Agarwal', role: 'Founder, StyleBoutique', avatar: 'PA', color: 'from-purple-500 to-purple-700', rating: 5, text: 'The e-commerce website they built increased our conversion rate by 45%. Their team understood our brand vision perfectly.' },
  { name: 'Amit Jain', role: 'MD, Jain Exports Ltd.', avatar: 'AJ', color: 'from-green-500 to-green-700', rating: 5, text: 'We saw a 3.5x return on our Meta Ads investment within the first month. Outstanding targeting strategy and creative approach.' },
  { name: 'Neha Gupta', role: 'Director, EduTech Solutions', avatar: 'NG', color: 'from-orange-500 to-orange-700', rating: 5, text: 'From branding to social media to paid ads — DMH handles everything seamlessly. Our brand recognition has skyrocketed.' },
  { name: 'Vikram Singh', role: 'Co-Founder, HealthFirst', avatar: 'VS', color: 'from-red-500 to-red-700', rating: 5, text: 'The mobile app they built is absolutely top-tier. User ratings are consistently above 4.8 stars on both platforms.' },
  { name: 'Kavya Reddy', role: 'Marketing Head, FreshBazaar', avatar: 'KR', color: 'from-teal-500 to-teal-700', rating: 5, text: 'Our Google Ads campaigns now generate 200+ leads per month at half the cost per lead compared to our previous agency.' },
]

export default function Testimonials() {
  return (
    <>
      <Helmet><title>Testimonials | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Client Success Stories</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">200+ businesses trust Digital Marketing Hub. Here's what they say.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-darkcard rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => <FiStar key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}>{t.avatar}</div>
                  <div>
                    <div className="font-display font-bold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
