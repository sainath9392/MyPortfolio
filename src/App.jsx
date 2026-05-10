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
        { id: 'hero', color: '#000000', accent: '#dc2626', cardAccent: '#ffffff', glow: 'rgba(220,38,38,0.5)' },
        { id: 'about', color: '#022c22', accent: '#a3e635', cardAccent: '#a3e635', glow: 'rgba(163,230,53,0.5)' },
        { id: 'skills', color: '#1a0b2e', accent: '#bc13fe', cardAccent: '#bc13fe', glow: 'rgba(188,19,254,0.5)' },
        { id: 'experience', color: '#dc2626', accent: '#000000', cardAccent: '#ffffff', glow: 'rgba(0,0,0,0.5)' }, 
        { id: 'projects', color: '#edff66', accent: '#000000', cardAccent: '#edff66', glow: 'rgba(0,0,0,0.5)' }, 
        { id: 'contact', color: '#000000', accent: '#22d3ee', cardAccent: '#22d3ee', glow: 'rgba(34,211,238,0.5)' }
      ];

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: 'top 25%',
          end: 'bottom 25%',
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
          duration: 0,
          ease: 'none'
        });
      }

      ScrollTrigger.refresh();
    }
  }, [loading]);

  return (
    <div className="min-h-screen">
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

      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-[1500ms] ease-in-out relative z-10`}>
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
