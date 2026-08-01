import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiGrid, FiFileText, FiBriefcase, FiUsers, FiMessageSquare,
  FiHelpCircle, FiSettings, FiLogOut, FiMenu, FiX,
  FiTrendingUp, FiStar, FiImage, FiBarChart2
} from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: FiGrid },
  { label: 'Leads', path: '/admin/leads', icon: FiTrendingUp },
  { label: 'Services', path: '/admin/services', icon: FiBriefcase },
  { label: 'Projects', path: '/admin/projects', icon: FiBarChart2 },
  { label: 'Blog Posts', path: '/admin/blog', icon: FiFileText },
  { label: 'Team', path: '/admin/team', icon: FiUsers },
  { label: 'Testimonials', path: '/admin/testimonials', icon: FiStar },
  { label: 'FAQ', path: '/admin/faq', icon: FiHelpCircle },
  { label: 'Media', path: '/admin/media', icon: FiImage },
  { label: 'Settings', path: '/admin/settings', icon: FiSettings },
]

export default function AdminLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/admin/login')
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">DM</span>
          </div>
          <div>
            <div className="font-display font-bold text-sm text-gray-900 dark:text-white">DMH Admin</div>
            <div className="text-xs text-gray-400">Control Panel</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          const active = location.pathname === item.path
          return (
            <Link key={item.path} to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-accent'
              }`}>
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <button onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors">
          <FiLogOut className="w-4 h-4" />
          Logout
        </button>
        <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-primary mt-1">
          ← View Website
        </Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-white dark:bg-darkcard border-r border-gray-100 dark:border-gray-800 flex-shrink-0 fixed top-0 bottom-0 left-0 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40" />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 30 }}
              className="lg:hidden fixed top-0 bottom-0 left-0 w-64 bg-white dark:bg-darkcard z-50 flex flex-col">
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white dark:bg-darkcard border-b border-gray-100 dark:border-gray-800 px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500">
              <FiMenu className="w-5 h-5" />
            </button>
            <h1 className="font-display font-bold text-xl text-gray-900 dark:text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">A</div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
