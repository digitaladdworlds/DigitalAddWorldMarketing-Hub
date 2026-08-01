# Digital Marketing Hub — Full Stack Website

> A premium, fully dynamic digital marketing agency website.  
> **Parent Company:** Digital Add World | **Tech Stack:** React + Express + MongoDB

---

## 📁 Project Structure

```
dmh-project/
├── frontend/          ← React.js (Vite) + Tailwind CSS + Framer Motion
└── backend/           ← Express.js + MongoDB + JWT Auth
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

---

### 1. Backend Setup

```bash
cd backend

# Copy env file
cp .env.example .env

# Edit .env with your MongoDB URI and SMTP credentials
nano .env

# Install dependencies
npm install

# Seed admin user + sample data
npm run seed

# Start dev server
npm run dev
```

Backend runs on: `http://localhost:5000`

**Admin Credentials (after seed):**
- Email: `admin@digitalmarketinghub.in`
- Password: `Admin@DMH2025`

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 🔑 Admin Panel

Access the admin panel at: `/admin/login`

**Features:**
- Dashboard with lead stats
- Lead Management (CRM-style)
- Services CRUD
- Projects CRUD
- Blog Management
- Team Members
- Testimonials
- FAQs
- Media Upload
- Site Settings

---

## 📄 Pages

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Service Detail | `/services/:slug` |
| Projects | `/projects` |
| Case Studies | `/case-studies` |
| Blog | `/blog` |
| Brands | `/brands` |
| Pricing | `/pricing` |
| Careers | `/careers` |
| Testimonials | `/testimonials` |
| FAQ | `/faq` |
| Contact | `/contact` |
| Admin Login | `/admin/login` |
| Admin Dashboard | `/admin` |

---

## 🌐 API Endpoints

### Public
```
GET    /api/services
GET    /api/services/:slug
GET    /api/projects
GET    /api/blog
GET    /api/testimonials
GET    /api/faq
GET    /api/case-studies
GET    /api/settings
POST   /api/leads         ← Contact form submission
```

### Protected (Admin)
```
POST   /api/auth/login
GET    /api/auth/me

POST/PUT/DELETE  /api/services/:id
POST/PUT/DELETE  /api/projects/:id
POST/PUT/DELETE  /api/blog/:id
POST/PUT/DELETE  /api/team/:id
POST/PUT/DELETE  /api/testimonials/:id
POST/PUT/DELETE  /api/faq/:id
GET/PUT/DELETE   /api/leads/:id
PUT              /api/settings
POST             /api/media/upload
```

---

## 🚢 Deployment

### Frontend → Vercel
```bash
cd frontend
npm run build
# Deploy /dist to Vercel
```

### Backend → VPS/AWS
```bash
cd backend
NODE_ENV=production npm start
# Use PM2 for process management
pm2 start src/index.js --name dmh-backend
```

---

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Primary (Deep Blue) | `#1a237e` |
| Secondary (Purple) | `#7b1fa2` |
| Accent (Cyan) | `#00bcd4` |

---

## 📦 Tech Stack

**Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, React Router v6  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Multer  
**Email:** Nodemailer  
**Fonts:** Sora (Display), Inter (Body)

---

© 2025 Digital Marketing Hub — A Digital Add World Brand
