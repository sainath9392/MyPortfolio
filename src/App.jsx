import { main } from 'framer-motion/client'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
   
  )
}

export default App