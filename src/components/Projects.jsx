import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Fashnior (E-Commerce)",
    tag: "RETAIL_PLATFORM",
    description: [
      "Modern MERN e-commerce platform with Razorpay secure payment gateway.",
      "Engineered a comprehensive Admin Panel for managing products, inventory, and orders.",
      "Features dynamic cart updates, category filtering, and complete order history tracking."
    ],
    tech: [
      { name: "React.js", icon: "/svg/icons8-react-24.png" },
      { name: "Node.js", icon: "/svg/icons8-nodejs-48.png" },
      { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
      { name: "Tailwind CSS", icon: "/svg/icons8-tailwindcss-48.png" }
    ],
    live: "https://fashnior.vercel.app",
    github: "https://github.com/sainath9392/fashnior-ecommerce-app"
  },
  {
    id: "02",
    title: "Task Manager (MERN)",
    tag: "WORKFLOW_ENGINE",
    description: [
      "Full-featured productivity system with automated PDF/CSV report exporting.",
      "Implemented group-based task delegation, role access control, and real-time status tracking.",
      "Built to handle high concurrency with secure JWT authentication and admin analytics."
    ],
    tech: [
      { name: "React.js", icon: "/svg/icons8-react-24.png" },
      { name: "Node.js", icon: "/svg/icons8-nodejs-48.png" },
      { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
      { name: "Express.js", icon: "/svg/icons8-express-js-50.png" }
    ],
    live: "https://task-manager-chi-ochre.vercel.app/",
    github: "https://github.com/sainath9392/Task-Manager"
  },
  {
    id: "03",
    title: "Zentry Cinematic Web",
    tag: "CREATIVE_UI",
    description: [
      "Immersive web experience featuring advanced GSAP and ScrollTrigger animations.",
      "High-performance visual effects with responsive layout and fluid micro-interactions.",
      "Custom cursor dynamics and interactive canvas elements for a luxury gaming aesthetic."
    ],
    tech: [
      { name: "React.js", icon: "/svg/icons8-react-24.png" },
      { name: "GSAP", icon: "/svg/greensock-icon-logo-512.png" },
      { name: "Tailwind CSS", icon: "/svg/icons8-tailwindcss-48.png" }
    ],
    live: "https://zentry-gaming-website-gilt.vercel.app/",
    github: "https://github.com/sainath9392/Zentry-gaming-website"
  },
  {
    id: "04",
    title: "Campaign Scheduler",
    tag: "AUTOMATION_ENGINE",
    description: [
      "Robust system for scheduling, queueing, and dispatching targeted email campaigns.",
      "Integrated analytics dashboard for tracking open rates, bounce rates, and engagement.",
      "Optimized backend worker queues for reliable delivery and zero downtime."
    ],
    tech: [
      { name: "Node.js", icon: "/svg/icons8-nodejs-48.png" },
      { name: "Express.js", icon: "/svg/icons8-express-js-50.png" },
      { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
      { name: "REST APIs", icon: "/svg/icons8-rest-api-50.png" }
    ],
    live: "https://email-campaign-scheduler.vercel.app/",
    github: "https://github.com/sainath9392/email-campaign-scheduler"
  },
  {
    id: "05",
    title: "TinyLink (Next.js 14)",
    tag: "CLOUD_SERVICE",
    description: [
      "High-performance URL shortener with real-time click tracking and custom vanity aliases.",
      "Built with Next.js App Router, Tailwind CSS, and serverless PostgreSQL (Neon).",
      "Features 'Invisible Auth' utilizing lightweight browser tokens and ultra-fast 302 redirects."
    ],
    tech: [
      { name: "Next.js 14", icon: "/svg/icons8-react-24.png" },
      { name: "TypeScript", icon: "/svg/icons8-tailwindcss-48.png" },
      { name: "PostgreSQL", icon: "/svg/icons8-rest-api-50.png" }
    ],
    live: "https://tinylink-tau.vercel.app/",
    github: "https://github.com/sainath9392/tinylink"
  }
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = projects[selectedIndex];
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup triggers if needed
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen md:h-screen md:max-h-screen bg-transparent relative overflow-hidden flex flex-col justify-between px-4 md:px-10 pt-16 sm:pt-20 lg:pt-20 pb-3 transition-colors duration-700 select-none"
    >
      {/* Delicate Light Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center gap-3 sm:gap-5">
        
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase mb-1 block">
              [ PORTFOLIO // SELECTED_WORKS ]
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-zinc-950 tracking-tight flex items-center gap-2 justify-start uppercase">
              <span style={{ color: "var(--theme-accent)" }}>{">"}</span>
              PROJECT_<span style={{ color: "var(--theme-accent)" }}>ARCHIVE</span>
              <span 
                className="w-1.5 h-5 md:w-2 md:h-8 animate-pulse ml-1" 
                style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 10px var(--theme-glow)" }}
              ></span>
            </h2>
          </motion.div>

          {/* Quick Prev / Next Controls */}
          <div className="hidden sm:flex items-center gap-2 font-mono">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 shadow-sm transition-all cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-zinc-500 px-1 font-semibold">
              {selectedIndex + 1} / {projects.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 shadow-sm transition-all cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Project List (Left 5 cols) & Project Showcase (Right 7 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch w-full">
          
          {/* Left: Interactive Project List (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-1.5">
            {projects.map((proj, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-white border-zinc-300 shadow-md ring-1 ring-zinc-200"
                      : "bg-white/80 border-zinc-200/80 shadow-sm hover:border-zinc-300 hover:bg-white"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute left-0 top-1.5 bottom-1.5 w-1.5 rounded-r-full"
                      style={{ backgroundColor: "var(--theme-accent)" }}
                    />
                  )}

                  <div className="flex items-center gap-2.5 pl-2">
                    <span className="font-mono text-xs text-zinc-400">
                      {proj.id}
                    </span>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                        isSelected ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                      }`}>
                        {proj.title}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                        {proj.tag}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? "text-zinc-900 translate-x-0.5" : "text-zinc-400 group-hover:text-zinc-700"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Project Showcase (7 cols) */}
          <div className="md:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl bg-white border border-zinc-200/80 p-4 sm:p-6 shadow-lg flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--theme-accent), transparent)" }}
                ></div>

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start border-b border-zinc-100 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-0.5">
                        Project_{activeProject.id}
                      </span>
                      <h3 className="text-lg sm:text-xl font-mono font-bold text-zinc-950">
                        {activeProject.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] px-2.5 py-0.5 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 font-semibold">
                      {activeProject.tag}
                    </span>
                  </div>

                  {/* Bullet Descriptions */}
                  <div className="text-zinc-700 text-xs sm:text-[13px] font-sans space-y-2 mb-4 border-l-2 pl-3 py-1" style={{ borderLeftColor: "var(--theme-accent)" }}>
                    {activeProject.description.map((point, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">◦ {point}</p>
                    ))}
                  </div>
                </div>

                {/* Tech Stack and Action Links */}
                <div className="space-y-3 pt-3 border-t border-zinc-100">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest block mb-1.5 text-zinc-400">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {activeProject.tech.map((skill, sIndex) => (
                        <div 
                          key={sIndex}
                          className="flex items-center gap-1.5 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-200/80"
                        >
                          <img className="w-3 h-3 object-contain opacity-85" src={skill.icon} alt={skill.name} />
                          <span className="text-[10px] text-zinc-700 font-mono">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live & Source CTAs */}
                  <div className="flex gap-2.5 pt-2">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={activeProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 rounded-xl font-mono font-semibold text-xs uppercase transition-all flex items-center gap-1.5 shadow-md shadow-red-500/20 bg-red-600 hover:bg-red-700 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={activeProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-zinc-300 bg-white hover:bg-zinc-50 px-4 py-2 rounded-xl font-mono font-semibold text-xs uppercase text-zinc-800 hover:text-black transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Source Code</span>
                      <FaGithub className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Section Navigation Link */}
      <div className="relative z-20 w-full flex justify-center pb-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer flex flex-col items-center gap-1"
        >
          <div 
            className="px-4 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider border border-zinc-300 bg-white group-hover:bg-zinc-950 group-hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            style={{ color: "var(--theme-accent)" }}
          >
            <span>Initiate Contact</span>
            <span>↓</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
