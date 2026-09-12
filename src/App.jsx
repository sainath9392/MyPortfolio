import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import CircularCursor from './components/CircularCursor'
import FlowingBackgroundOrb from './components/FlowingBackgroundOrb'
import { AnimatePresence, motion } from 'framer-motion'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
      };

      const sections = [
        { id: 'hero', color: '#ffffff', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' },
        { id: 'about', color: '#f8fafc', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' },
        { id: 'skills', color: '#ffffff', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' },
        { id: 'experience', color: '#f8fafc', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' }, 
        { id: 'projects', color: '#ffffff', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' }, 
        { id: 'contact', color: '#f8fafc', accent: '#dc2626', cardAccent: '#18181b', glow: 'rgba(220,38,38,0.2)' }
      ];

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: 'top 35%',
          end: 'bottom 35%',
          onEnter: () => updateTheme(section),
          onEnterBack: () => updateTheme(section),
        });
      });

      function updateTheme(section) {
        // Remove all theme classes first
        const themeClasses = ['theme-hero', 'theme-about', 'theme-skills', 'theme-experience', 'theme-projects', 'theme-contact'];
        document.body.classList.remove(...themeClasses);
        
        // Add the new theme class
        document.body.classList.add(`theme-${section.id}`);

        gsap.to('body', {
          backgroundColor: section.color,
          duration: 0.6,
          ease: 'power2.out'
        });
      }

      ScrollTrigger.refresh();
    }
  }, [loading]);

  return (
    <div className="min-h-screen">
      <FlowingBackgroundOrb />
      <CircularCursor />
      <AnimatePresence>

        {loading && (
          <motion.div
            key="loader-wrapper"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999]"
          >
            <Preloader onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Navbar />
        <div id="hero"><Hero /></div>
        <About />
        <Skills />
        <Experience />
        <Projects />

        <Contact />
      </main>
    </div>
  )
}

export default App
