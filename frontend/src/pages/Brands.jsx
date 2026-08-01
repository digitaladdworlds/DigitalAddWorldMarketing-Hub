import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiGlobe, FiSend } from 'react-icons/fi'
import ContactCTA from '../components/home/ContactCTA'

const brands = [
  { name: 'Digital Add World', tagline: 'Technology, Software, Marketing and Business Solutions', color: 'from-blue-600 to-indigo-700', website: 'https://digitaladdworld.in', instagram: 'https://www.instagram.com/digitaladdworldtech/', facebook: 'https://www.facebook.com/digitaladdworldtech/', desc: 'The parent company powering innovation across technology, software, marketing, and business solutions for startups and enterprises alike.' },
  { name: 'KheloExchange', tagline: 'Online Gaming and Sports Platform', color: 'from-green-500 to-emerald-700', instagram: 'https://www.instagram.com/kheloexchange/', facebook: 'https://www.facebook.com/kheloexchange/', telegram: 'https://t.me/kheloexchange', desc: 'A dynamic online gaming and sports betting platform delivering exciting experiences to millions of users across India.' },
  { name: 'StoreMarket', tagline: 'E-Commerce and Marketplace Platform', color: 'from-orange-500 to-red-600', website: 'https://storemarket.in/', instagram: 'https://www.instagram.com/storemarket.in/', facebook: 'https://www.facebook.com/storemarket.in/', desc: 'A comprehensive e-commerce marketplace connecting sellers and buyers, offering a seamless shopping experience with wide product variety.' },
  { name: 'DPK Pay', tagline: 'Digital Payment and Financial Technology', color: 'from-purple-500 to-violet-700', instagram: 'https://www.instagram.com/dpkpayofficial/', facebook: 'https://www.facebook.com/dpkpayofficial/', desc: 'A cutting-edge digital payment and fintech platform enabling fast, secure, and convenient financial transactions for individuals and businesses.' },
  { name: 'Digital Marketing Hub', tagline: 'Digital Marketing and Growth Solutions', color: 'from-cyan-500 to-blue-700', instagram: 'https://www.instagram.com/digitalmarketinghub.in/', facebook: 'https://www.facebook.com/digitalmarketinghub.in/', desc: 'Our flagship marketing brand delivering premium digital marketing, SEO, web development, and growth solutions to businesses across India.' },
]

export default function Brands() {
  return (
    <>
      <Helmet><title>Our Brands | Digital Marketing Hub — Digital Add World Group</title></Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Digital Add World Group</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">A portfolio of innovative brands spanning technology, e-commerce, gaming, digital payments, and marketing — all united by a vision to transform digital India.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom space-y-8">
          {brands.map((brand, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-darkcard rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className={`bg-gradient-to-br ${brand.color} p-10 flex flex-col justify-center text-white`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center font-display font-bold text-2xl mb-4">{brand.name.charAt(0)}</div>
                  <h2 className="font-display font-bold text-2xl mb-2">{brand.name}</h2>
                  <p className="text-white/75 text-sm">{brand.tagline}</p>
                </div>
                <div className="lg:col-span-3 p-10">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{brand.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {brand.website && <a href={brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors"><FiGlobe className="w-4 h-4" /> Website</a>}
                    {brand.instagram && <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-pink-50 hover:text-pink-600 transition-colors"><FiInstagram className="w-4 h-4" /> Instagram</a>}
                    {brand.facebook && <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 transition-colors"><FiFacebook className="w-4 h-4" /> Facebook</a>}
                    {brand.telegram && <a href={brand.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-sky-50 hover:text-sky-600 transition-colors"><FiSend className="w-4 h-4" /> Telegram</a>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
