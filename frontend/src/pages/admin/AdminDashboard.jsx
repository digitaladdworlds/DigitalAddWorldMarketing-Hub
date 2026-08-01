import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { FiUsers, FiFileText, FiBriefcase, FiTrendingUp, FiMail, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../utils/api'

const statCards = [
  { label: 'Total Leads', icon: FiUsers, color: 'from-blue-500 to-blue-700', key: 'leads', link: '/admin/leads' },
  { label: 'Blog Posts', icon: FiFileText, color: 'from-purple-500 to-purple-700', key: 'blogs', link: '/admin/blog' },
  { label: 'Active Services', icon: FiBriefcase, color: 'from-green-500 to-green-700', key: 'services', link: '/admin/services' },
  { label: 'Projects', icon: FiTrendingUp, color: 'from-orange-500 to-orange-700', key: 'projects', link: '/admin/projects' },
]

const quickActions = [
  { label: 'Add New Blog', path: '/admin/blog', icon: FiFileText, desc: 'Publish a new article' },
  { label: 'View Leads', path: '/admin/leads', icon: FiUsers, desc: 'Check new inquiries' },
  { label: 'Manage Services', path: '/admin/services', icon: FiBriefcase, desc: 'Edit service content' },
  { label: 'Site Settings', path: '/admin/settings', icon: FiEye, desc: 'Update company info' },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState({ leads: 0, blogs: 0, services: 0, projects: 0 })
  const [recentLeads, setRecentLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.get('/leads').catch(() => ({ data: [] })),
      api.get('/blog').catch(() => ({ data: [] })),
      api.get('/services').catch(() => ({ data: [] })),
      api.get('/projects').catch(() => ({ data: [] })),
    ]).then(([leads, blogs, services, projects]) => {
      const l = leads?.data || []
      const b = blogs?.data || []
      const s = services?.data || []
      const p = projects?.data || []
      setStats({ leads: l.length, blogs: b.length, services: s.length, projects: p.length })
      setRecentLeads(l.slice(0, 5))
    }).finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={card.link} className={`block bg-gradient-to-br ${card.color} rounded-2xl p-5 text-white hover:shadow-lg hover:-translate-y-1 transition-all`}>
                  <Icon className="w-6 h-6 text-white/70 mb-3" />
                  <div className="font-display font-bold text-3xl">{loading ? '...' : stats[card.key]}</div>
                  <div className="text-white/70 text-sm mt-1">{card.label}</div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Leads */}
          <div className="lg:col-span-2 bg-white dark:bg-darkcard rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-lg text-gray-900 dark:text-white">Recent Leads</h2>
              <Link to="/admin/leads" className="text-primary dark:text-accent text-sm hover:underline">View All →</Link>
            </div>
            {loading ? (
              <div className="space-y-3">
                {[1,2,3].map(i => <div key={i} className="h-14 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}
              </div>
            ) : recentLeads.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <FiMail className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p>No leads yet. They'll appear here when someone contacts you.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentLeads.map((lead, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{lead.name}</div>
                      <div className="text-gray-400 text-xs">{lead.email} · {lead.service || 'General'}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lead.status === 'converted' ? 'bg-green-100 text-green-700' :
                      lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{lead.status || 'new'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-darkcard rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-5">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, i) => {
                const Icon = action.icon
                return (
                  <Link key={i} to={action.path}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 text-primary dark:text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{action.label}</div>
                      <div className="text-xs text-gray-400">{action.desc}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
