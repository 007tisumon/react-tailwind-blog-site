import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Navbar from '../components/navbar/Navbar'
import WhatDo from '../components/WhatDo'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testmonial from '../components/Testmonial'
import PortfolioExp from '../components/PortfolioExp'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="md:ml-[250px]">
      <Hero />
      <AboutMe />
      <WhatDo />
      <Resume />
      <Portfolio />
      <Testmonial />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default HomePage