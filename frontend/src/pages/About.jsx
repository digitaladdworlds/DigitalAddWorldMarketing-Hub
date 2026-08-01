import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import SectionHeader from '../components/common/SectionHeader'
import ContactCTA from '../components/home/ContactCTA'

const values = [
  { icon: FiTarget, title: 'Results-Driven', desc: 'Every strategy we implement is tied to measurable outcomes. We don\'t celebrate effort — we celebrate results.' },
  { icon: FiHeart, title: 'Client-First', desc: 'Your success is our success. We invest deeply in understanding your business and treating your goals as our own.' },
  { icon: FiAward, title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality in every campaign, design, and line of code we deliver.' },
  { icon: FiUsers, title: 'Collaboration', desc: 'We believe the best outcomes emerge from open communication and genuine partnership with our clients.' },
]

const timeline = [
  { year: '2016', title: 'Founded', desc: 'Digital Add World established with a vision to democratize digital growth for Indian businesses.' },
  { year: '2018', title: 'Digital Marketing Hub Launched', desc: 'Launched our dedicated digital marketing vertical to serve businesses seeking comprehensive growth.' },
  { year: '2020', title: 'Expanded Services', desc: 'Expanded into mobile app development and advanced tech solutions, serving 50+ clients.' },
  { year: '2022', title: 'Multi-Brand Portfolio', desc: 'Built a portfolio of 5 brands — StoreMarket, KheloExchange, DPK Pay, and more.' },
  { year: '2024', title: '200+ Clients Milestone', desc: 'Crossed 200 active clients and ₹50Cr+ in revenue generated for clients through our campaigns.' },
  { year: '2025', title: 'National Recognition', desc: 'Recognized as one of India\'s fastest-growing digital agencies with expansion across 15+ industries.' },
]

const team = [
  { name: 'Deepak Kumar', role: 'Founder & CEO', avatar: 'DK', color: 'from-blue-500 to-blue-700' },
  { name: 'Priya Sharma', role: 'Head of Marketing', avatar: 'PS', color: 'from-purple-500 to-purple-700' },
  { name: 'Rahul Verma', role: 'Lead Developer', avatar: 'RV', color: 'from-green-500 to-green-700' },
  { name: 'Anjali Singh', role: 'Creative Director', avatar: 'AS', color: 'from-pink-500 to-pink-700' },
  { name: 'Mohit Jain', role: 'SEO Head', avatar: 'MJ', color: 'from-orange-500 to-orange-700' },
  { name: 'Sneha Patel', role: 'Social Media Manager', avatar: 'SP', color: 'from-teal-500 to-teal-700' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Digital Marketing Hub</title>
        <meta name="description" content="Learn about Digital Marketing Hub — India's premium digital growth agency. Our mission, vision, team, and journey since 2016." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag-badge bg-white/20 text-white border-white/30 mb-6">About Us</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              We Are Digital Marketing Hub
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              A premium digital growth agency born from passion, built on data, and driven by the relentless pursuit of extraordinary results for every client we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader badge="Our Story" title="More Than an Agency —" highlight="A Growth Partner" center={false} />
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Digital Marketing Hub was born from a simple belief: every business deserves access to world-class digital marketing that delivers real, measurable results. As a brand under Digital Add World, we bring together years of expertise in technology, marketing, and business strategy.</p>
                <p>We started with a handful of local businesses and a big dream. Today, we manage digital growth for 200+ brands across India — from startups to established enterprises — in industries ranging from e-commerce to healthcare, education to real estate.</p>
                <p>What sets us apart isn't just our results — it's our approach. We embed ourselves in your business, understand your customers deeply, and build campaigns that create lasting, compounding growth.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: '200+', label: 'Clients Served', icon: FiUsers },
                { value: '₹50Cr+', label: 'Revenue Generated', icon: FiTrendingUp },
                { value: '8+', label: 'Years Experience', icon: FiAward },
                { value: '50+', label: 'Team Members', icon: FiHeart },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                    <Icon className="w-8 h-8 mb-3 text-white/70" />
                    <div className="font-display font-bold text-3xl">{stat.value}</div>
                    <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="section-padding bg-gray-50 dark:bg-darkcard">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white">
              <FiTarget className="w-12 h-12 text-white/70 mb-5" />
              <h2 className="font-display font-bold text-3xl mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To empower businesses of every size with innovative digital strategies, cutting-edge technology, and data-driven insights that deliver measurable growth and lasting competitive advantage in the digital era.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white dark:bg-dark rounded-3xl p-10 border-2 border-primary/20">
              <FiEye className="w-12 h-12 text-primary dark:text-accent mb-5" />
              <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                To become India's most trusted digital growth partner — a company that transforms the way businesses connect with their customers online, setting new benchmarks for creativity, performance, and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Our Values" title="Principles That" highlight="Drive Everything We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/20 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary dark:text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{val.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{val.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-darkcard">
        <div className="container-custom">
          <SectionHeader badge="Our Journey" title="How We" highlight="Got Here" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pl-16 relative">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {i + 1}
                  </div>
                  <div className="bg-white dark:bg-dark rounded-2xl p-6 flex-1 border border-gray-100 dark:border-gray-800">
                    <span className="text-accent text-sm font-bold">{item.year}</span>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Our Team" title="The Experts Behind" highlight="Your Growth" subtitle="A passionate team of marketers, developers, designers, and strategists committed to your success." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{member.name}</h3>
                <p className="text-gray-400 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
