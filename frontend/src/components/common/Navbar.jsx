import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services', path: '/services',
    children: [
      { label: 'Website Development', path: '/services/website-development' },
      { label: 'Web App Development', path: '/services/web-app-development' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'Digital Marketing', path: '/services/digital-marketing' },
      { label: 'SEO Optimization', path: '/services/seo' },
      { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { label: 'Meta & Google Ads', path: '/services/paid-advertising' },
      { label: 'UI/UX Design', path: '/services/ui-ux-design' },
      { label: 'E-Commerce Solutions', path: '/services/ecommerce' },
      { label: 'Branding', path: '/services/branding' },
    ]
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Brands', path: '/brands' },
  { label: 'Blog', path: '/blog' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-lg shadow-lg shadow-primary/5'
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-white font-display font-bold text-sm">DM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-base ${scrolled || darkMode ? 'text-primary dark:text-white' : 'text-white'}`}>
                Digital Marketing
              </span>
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.children ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      scrolled || darkMode
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <FiChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary dark:text-accent font-semibold'
                        : scrolled || darkMode
                          ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent'
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full left-0 mt-1 w-64 bg-white dark:bg-darkcard rounded-2xl shadow-xl shadow-primary/10 border border-gray-100 dark:border-gray-800 py-2 transition-all duration-200 ${
                      activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-colors ${
                scrolled || darkMode
                  ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            <Link
              to="/contact"
              className="hidden md:flex btn-primary text-sm py-2.5 px-5"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl ${
                scrolled || darkMode ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map(item => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/5 dark:text-accent dark:bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map(child => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
