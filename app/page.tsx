'use client'
import React, { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'


const HomePage = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Nav openNav={openNav} />
        <Hero />
      </div>
      <div id="about"><About /></div>
      <div id="work"><Experience /></div>
      <div id="tech"><Tech /></div>
      <div id="project"><Works /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default HomePage