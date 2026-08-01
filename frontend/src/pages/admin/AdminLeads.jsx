import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { FiSearch, FiTrash2, FiEdit2, FiMail, FiPhone, FiFilter } from 'react-icons/fi'
import axios from 'axios'
import toast from 'react-hot-toast'

const statusColors = {
  new: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  contacted: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  converted: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  lost: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function AdminLeads() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [editId, setEditId] = useState(null)
  const [editStatus, setEditStatus] = useState('')

  const fetchLeads = async () => {
    try {
      const res = await axios.get('/api/leads')
      setLeads(res.data?.data || [])
    } catch {
      // Demo data if API not connected
      setLeads([
        { _id: '1', name: 'Rajesh Gupta', email: 'rajesh@example.com', phone: '+91 98765 43210', service: 'SEO', budget: '₹25,000–₹50,000/month', message: 'Need SEO for e-commerce site', status: 'new', createdAt: new Date().toISOString() },
        { _id: '2', name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 87654 32109', service: 'Website Development', budget: '₹50,000–₹1,00,000/month', message: 'Need a new website for my business', status: 'contacted', createdAt: new Date(Date.now() - 86400000).toISOString() },
        { _id: '3', name: 'Amit Jain', email: 'amit@jainexports.com', phone: '+91 76543 21098', service: 'Digital Marketing', budget: '₹1,00,000+/month', message: 'Full digital marketing package needed', status: 'converted', createdAt: new Date(Date.now() - 172800000).toISOString() },
      ])
    }
    setLoading(false)
  }

  useEffect(() => { fetchLeads() }, [])

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/leads/${id}`, { status })
      setLeads(leads.map(l => l._id === id ? { ...l, status } : l))
      toast.success('Status updated')
    } catch {
      setLeads(leads.map(l => l._id === id ? { ...l, status } : l))
    }
    setEditId(null)
  }

  const deleteLead = async (id) => {
    if (!confirm('Delete this lead?')) return
    try {
      await axios.delete(`/api/leads/${id}`)
      setLeads(leads.filter(l => l._id !== id))
      toast.success('Lead deleted')
    } catch {
      setLeads(leads.filter(l => l._id !== id))
    }
  }

  const filtered = leads.filter(l =>
    (statusFilter === 'all' || l.status === statusFilter) &&
    (l.name?.toLowerCase().includes(search.toLowerCase()) ||
     l.email?.toLowerCase().includes(search.toLowerCase()) ||
     l.service?.toLowerCase().includes(search.toLowerCase()))
  )

  const counts = { all: leads.length, new: leads.filter(l => l.status === 'new').length, contacted: leads.filter(l => l.status === 'contacted').length, converted: leads.filter(l => l.status === 'converted').length, lost: leads.filter(l => l.status === 'lost').length }

  return (
    <AdminLayout title="Lead Management">
      <div className="space-y-5">
        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.entries(counts).map(([key, val]) => (
            <button key={key} onClick={() => setStatusFilter(key)}
              className={`p-4 rounded-2xl text-center transition-all ${statusFilter === key ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-md' : 'bg-white dark:bg-darkcard border border-gray-100 dark:border-gray-800 hover:border-primary/30'}`}>
              <div className="font-display font-bold text-2xl">{val}</div>
              <div className={`text-sm capitalize ${statusFilter === key ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{key}</div>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-darkcard rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-3 items-center justify-between">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search leads..." className="input-field pl-9 py-2 w-64 text-sm" />
            </div>
            <span className="text-sm text-gray-400">{filtered.length} leads</span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-400">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-10 text-center text-gray-400">No leads found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-gray-100 dark:border-gray-800">
                  <tr className="text-left text-gray-400 text-xs uppercase">
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Contact</th>
                    <th className="px-5 py-3">Service</th>
                    <th className="px-5 py-3">Budget</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <motion.tr key={lead._id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                      className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">{lead.name}</td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-gray-500 hover:text-primary text-xs"><FiMail className="w-3 h-3" />{lead.email}</a>
                          {lead.phone && <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-gray-500 hover:text-primary text-xs"><FiPhone className="w-3 h-3" />{lead.phone}</a>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{lead.service || '—'}</td>
                      <td className="px-5 py-4 text-gray-600 dark:text-gray-400 text-xs">{lead.budget || '—'}</td>
                      <td className="px-5 py-4">
                        {editId === lead._id ? (
                          <select value={editStatus} onChange={e => updateStatus(lead._id, e.target.value)}
                            onBlur={() => setEditId(null)}
                            autoFocus
                            className="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark">
                            {['new', 'contacted', 'converted', 'lost'].map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        ) : (
                          <span className={`text-xs px-3 py-1 rounded-full font-medium cursor-pointer ${statusColors[lead.status] || statusColors.new}`}
                            onClick={() => { setEditId(lead._id); setEditStatus(lead.status || 'new') }}>
                            {lead.status || 'new'}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-gray-400 text-xs">{new Date(lead.createdAt).toLocaleDateString('en-IN')}</td>
                      <td className="px-5 py-4">
                        <button onClick={() => deleteLead(lead._id)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
