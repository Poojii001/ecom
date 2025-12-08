import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturesPage from './Pages/FeaturesPage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import TestimonialPage from './Pages/TestimonialPAge'
import FaqPage from './Pages/FaqPage'
import ContactUsPage from './Pages/ContactUsPage'
import Error404Page from './Pages/Error404Page'

import PrivicyPolicyPage from './Pages/Policies/PrivicyPolicyPage'
import TermsAndConditions from './Pages/Policies/TermsAndConditions'

import SignupPage from './Pages/User/SignupPage'
import LoginPage from './Pages/User/LoginPage'
import ProfilePage from './Pages/User/ProfilePage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/privicy-policy' element={<PrivicyPolicyPage />} />
        <Route path='/terms-conditions' element={<TermsAndConditions />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />

        <Route path='/*' element={<Error404Page />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
