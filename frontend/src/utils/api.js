import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('dmh-admin-token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  res => res.data,
  err => {
    const message = err.response?.data?.message || 'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

export const servicesAPI = {
  getAll: () => api.get('/services'),
  getOne: (slug) => api.get(`/services/${slug}`),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`)
}

export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getOne: (slug) => api.get(`/projects/${slug}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`)
}

export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getOne: (slug) => api.get(`/blog/${slug}`),
  create: (data) => api.post('/blog', data),
  update: (id, data) => api.put(`/blog/${id}`, data),
  delete: (id) => api.delete(`/blog/${id}`)
}

export const teamAPI = {
  getAll: () => api.get('/team'),
  create: (data) => api.post('/team', data),
  update: (id, data) => api.put(`/team/${id}`, data),
  delete: (id) => api.delete(`/team/${id}`)
}

export const testimonialsAPI = {
  getAll: () => api.get('/testimonials'),
  create: (data) => api.post('/testimonials', data),
  update: (id, data) => api.put(`/testimonials/${id}`, data),
  delete: (id) => api.delete(`/testimonials/${id}`)
}

export const faqAPI = {
  getAll: () => api.get('/faq'),
  create: (data) => api.post('/faq', data),
  update: (id, data) => api.put(`/faq/${id}`, data),
  delete: (id) => api.delete(`/faq/${id}`)
}

export const leadsAPI = {
  getAll: () => api.get('/leads'),
  submit: (data) => api.post('/leads', data),
  update: (id, data) => api.put(`/leads/${id}`, data),
  delete: (id) => api.delete(`/leads/${id}`)
}

export const caseStudiesAPI = {
  getAll: () => api.get('/case-studies'),
  getOne: (slug) => api.get(`/case-studies/${slug}`),
  create: (data) => api.post('/case-studies', data),
  update: (id, data) => api.put(`/case-studies/${id}`, data),
  delete: (id) => api.delete(`/case-studies/${id}`)
}

export const settingsAPI = {
  get: () => api.get('/settings'),
  update: (data) => api.put('/settings', data)
}

export const mediaAPI = {
  upload: (formData) => api.post('/media/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getAll: () => api.get('/media'),
  delete: (id) => api.delete(`/media/${id}`)
}

export default api
