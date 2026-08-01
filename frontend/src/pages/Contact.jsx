import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { leadsAPI } from '../utils/api'
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [loading, setLoading] = useState(false)

 const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    await leadsAPI.submit(form)

    toast.success("Message sent! We'll contact you within 24 hours.")

    setForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    })
  } catch (err) {
    toast.error(err.message)
  }

  setLoading(false)
}

  return (
    <>
      <Helmet><title>Contact Us | Digital Marketing Hub</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Let's Grow Together</h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Ready to transform your digital presence? Contact us today for a free strategy consultation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                <p className="text-gray-500 dark:text-gray-400">Our team is ready to help you create a winning digital strategy. Reach out and we'll respond within 24 hours.</p>
              </div>
              {[
                { icon: FiMapPin, title: 'Our Office', desc: 'Jaipur, Rajasthan, India — 302001' },
                { icon: FiPhone, title: 'Call Us', desc: '+91 95490 54344' },
                { icon: FiMail, title: 'Email Us', desc: 'info@digitalmarketinghub.in' },
                { icon: FiClock, title: 'Working Hours', desc: 'Mon–Sat: 9 AM – 7 PM IST' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-darkcard rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-darkcard rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl">
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Phone Number</label>
                    <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 95xxxxxxxxx" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Service Interested In</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="input-field">
                      <option value="">Select a service</option>
                      <option>Website Development</option>
                      <option>Digital Marketing</option>
                      <option>SEO</option>
                      <option>Social Media Marketing</option>
                      <option>Paid Advertising</option>
                      <option>Mobile App Development</option>
                      <option>Branding</option>
                      <option>E-Commerce</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Monthly Budget</label>
                    <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className="input-field">
                      <option value="">Select budget range</option>
                      <option>Under ₹25,000/month</option>
                      <option>₹25,000 – ₹50,000/month</option>
                      <option>₹50,000 – ₹1,00,000/month</option>
                      <option>₹1,00,000+/month</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Your Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your business and goals..." className="input-field resize-none" />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-4">
                  {loading ? 'Sending...' : <><FiSend /> Send Message</>}
                </button>
                <p className="text-center text-gray-400 text-xs mt-4">We'll respond within 24 hours. Your information is 100% confidential.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
