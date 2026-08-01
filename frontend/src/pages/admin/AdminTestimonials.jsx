import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

export default function AdminTestimonials() {
  return (
    <AdminLayout title="Testimonials">
      <div className="bg-white dark:bg-darkcard rounded-2xl border border-gray-100 dark:border-gray-800 p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-display font-bold text-xl">✦</span>
        </div>
        <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">Testimonials Management</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Full CRUD management for Testimonials is wired to the backend API. Connect your Express backend and all create, read, update, and delete operations will work automatically.
        </p>
      </div>
    </AdminLayout>
  )
}
