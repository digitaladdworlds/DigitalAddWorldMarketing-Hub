import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TechAndBrands from '../components/home/TechAndBrands'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Hub | Premium Digital Growth Agency — A Digital Add World Brand</title>
        <meta name="description" content="Digital Marketing Hub delivers ROI-driven digital marketing, SEO, web development, and paid advertising services. Grow your business 10x with India's leading digital agency." />
        <meta property="og:title" content="Digital Marketing Hub | Premium Digital Growth Agency" />
        <meta property="og:description" content="Transform your brand with data-driven digital marketing, web development, and growth strategies." />
      </Helmet>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <TechAndBrands />
      <ContactCTA />
    </>
  )
}
