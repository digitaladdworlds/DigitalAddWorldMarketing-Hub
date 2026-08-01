import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import Loader from './components/common/Loader'
import ScrollToTop from './components/common/ScrollToTop'
import ProtectedRoute from './components/common/ProtectedRoute'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Brands = lazy(() => import('./pages/Brands'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Pricing = lazy(() => import('./pages/Pricing'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminServices = lazy(() => import('./pages/admin/AdminServices'))
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'))
const AdminProjects = lazy(() => import('./pages/admin/AdminProjects'))
const AdminTeam = lazy(() => import('./pages/admin/AdminTeam'))
const AdminTestimonials = lazy(() => import('./pages/admin/AdminTestimonials'))
const AdminLeads = lazy(() => import('./pages/admin/AdminLeads'))
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'))
const AdminFAQ = lazy(() => import('./pages/admin/AdminFAQ'))

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Toaster position="top-right" toastOptions={{
              style: { borderRadius: '12px', fontFamily: 'Inter' }
            }} />
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<><Navbar /><Home /><Footer /><WhatsAppButton /></>} />
                <Route path="/about" element={<><Navbar /><About /><Footer /><WhatsAppButton /></>} />
                <Route path="/services" element={<><Navbar /><Services /><Footer /><WhatsAppButton /></>} />
                <Route path="/services/:slug" element={<><Navbar /><ServiceDetail /><Footer /><WhatsAppButton /></>} />
                <Route path="/projects" element={<><Navbar /><Projects /><Footer /><WhatsAppButton /></>} />
                <Route path="/projects/:slug" element={<><Navbar /><ProjectDetail /><Footer /><WhatsAppButton /></>} />
                <Route path="/case-studies" element={<><Navbar /><CaseStudies /><Footer /><WhatsAppButton /></>} />
                <Route path="/case-studies/:slug" element={<><Navbar /><CaseStudyDetail /><Footer /><WhatsAppButton /></>} />
                <Route path="/blog" element={<><Navbar /><Blog /><Footer /><WhatsAppButton /></>} />
                <Route path="/blog/:slug" element={<><Navbar /><BlogDetail /><Footer /><WhatsAppButton /></>} />
                <Route path="/brands" element={<><Navbar /><Brands /><Footer /><WhatsAppButton /></>} />
                <Route path="/careers" element={<><Navbar /><Careers /><Footer /><WhatsAppButton /></>} />
                <Route path="/contact" element={<><Navbar /><Contact /><Footer /><WhatsAppButton /></>} />
                <Route path="/faq" element={<><Navbar /><FAQ /><Footer /><WhatsAppButton /></>} />
                <Route path="/testimonials" element={<><Navbar /><Testimonials /><Footer /><WhatsAppButton /></>} />
                <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /><WhatsAppButton /></>} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/admin/services" element={<ProtectedRoute><AdminServices /></ProtectedRoute>} />
                <Route path="/admin/blog" element={<ProtectedRoute><AdminBlog /></ProtectedRoute>} />
                <Route path="/admin/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
                <Route path="/admin/team" element={<ProtectedRoute><AdminTeam /></ProtectedRoute>} />
                <Route path="/admin/testimonials" element={<ProtectedRoute><AdminTestimonials /></ProtectedRoute>} />
                <Route path="/admin/leads" element={<ProtectedRoute><AdminLeads /></ProtectedRoute>} />
                <Route path="/admin/faq" element={<ProtectedRoute><AdminFAQ /></ProtectedRoute>} />
                <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
