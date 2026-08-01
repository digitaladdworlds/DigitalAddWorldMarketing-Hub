import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const faqs = [
  { q: 'What services does Digital Marketing Hub offer?', a: 'We offer a comprehensive suite of digital services including website development, mobile app development, SEO, social media marketing, Meta Ads, Google Ads, branding, UI/UX design, e-commerce solutions, and CRM development.' },
  { q: 'How long does it take to see results from digital marketing?', a: 'Paid advertising campaigns show results within days. SEO and organic strategies typically show significant improvement in 3–6 months. We provide monthly reports so you can track progress throughout.' },
  { q: 'What is your pricing structure?', a: 'We offer flexible pricing based on your requirements and budget. Our packages start from ₹15,000/month for basic services. Contact us for a custom quote tailored to your specific needs.' },
  { q: 'Do you work with businesses outside of Rajasthan?', a: 'Absolutely! We work with clients across India and internationally. Our team operates 100% digitally, making geography irrelevant.' },
  { q: 'What makes Digital Marketing Hub different from other agencies?', a: 'We are ROI-obsessed and treat your business as our own. Our transparent reporting, dedicated account managers, and data-driven approach consistently deliver above-industry-average results.' },
  { q: 'Do you offer a free consultation?', a: 'Yes! We offer a complimentary 30-minute strategy consultation for all new clients. Use the contact form or WhatsApp to schedule yours today.' },
  { q: 'How do you measure campaign success?', a: 'We track KPIs aligned with your business goals — leads generated, cost per acquisition, ROAS, organic traffic growth, conversion rates, and revenue impact. You get a detailed monthly report.' },
  { q: 'Can you handle my complete digital presence?', a: 'Yes. Many of our clients rely on us as their complete digital partner — from website to SEO to social media to paid ads. We can manage everything under one roof.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <Helmet><title>FAQ | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Everything you need to know about working with Digital Marketing Hub.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-darkcard rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  {open === i ? <FiMinus className="w-5 h-5 text-primary dark:text-accent flex-shrink-0" /> : <FiPlus className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
