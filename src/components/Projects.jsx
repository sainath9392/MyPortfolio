import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Fashnior (E-commerce)",
      tag: "RETAIL_CORE",
      description: [
        "Modern MERN e-commerce platform with Razorpay payment integration.",
        "Built a secure Admin Panel for managing products, categories, and orders.",
        "Features dynamic cart updates, category filtering, and order history tracking."
      ],
      tech: [
        { name: "React", icon: "/svg/icons8-react-24.png" },
        { name: "Node", icon: "/svg/icons8-nodejs-48.png" },
        { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
        { name: "Tailwind", icon: "/svg/icons8-tailwindcss-48.png" }
      ],
      live: "https://fashnior.vercel.app",
      github: "https://github.com/sainath9392/fashnior-ecommerce-app",
      align: "left"
    },
    {
      id: "02",
      title: "Task Manager (MERN)",
      tag: "LOGISTICS_MODULE",
      description: [
        "Full-featured MERN system with PDF/CSV report exporting capabilities.",
        "Implemented group-based task delegation and real-time status monitoring.",
        "Handling 200+ tasks with secure JWT authentication and admin dashboards."
      ],
      tech: [
        { name: "React", icon: "/svg/icons8-react-24.png" },
        { name: "Node.js", icon: "/svg/icons8-nodejs-48.png" },
        { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
        { name: "Express", icon: "/svg/icons8-express-js-50.png" }
      ],
      live: "https://task-manager-chi-ochre.vercel.app/",
      github: "https://github.com/sainath9392/Task-Manager",
      align: "right"
    },
    {
      id: "03",
      title: "Zentry Gaming Web",
      tag: "CINEMATIC_INTERFACE",
      description: [
        "Immersive landing page featuring advanced GSAP and ScrollTrigger animations.",
        "High-performance visual effects with responsive layout and smooth transitions.",
        "Custom cursor and interactive canvas elements for a premium gaming feel."
      ],
      tech: [
        { name: "React", icon: "/svg/icons8-react-24.png" },
        { name: "GSAP", icon: "/svg/greensock-icon-logo-512.png" },
        { name: "Tailwind", icon: "/svg/icons8-tailwindcss-48.png" }
      ],
      live: "https://zentry-gaming-website-gilt.vercel.app/",
      github: "https://github.com/sainath9392/Zentry-gaming-website",
      align: "left"
    },
    {
      id: "04",
      title: "Campaign Scheduler",
      tag: "AUTOMATION_LOG",
      description: [
        "Robust system for scheduling and managing email marketing campaigns.",
        "Integrated analytics dashboard for tracking open rates and engagement.",
        "Optimized backend logic for automated delivery and performance."
      ],
      tech: [
        { name: "Node.js", icon: "/svg/icons8-nodejs-48.png" },
        { name: "Express", icon: "/svg/icons8-express-js-50.png" },
        { name: "MongoDB", icon: "/svg/icons8-mongodb-24.png" },
        { name: "REST API", icon: "/svg/icons8-rest-api-50.png" }
      ],
      live: "https://email-campaign-scheduler.vercel.app/",
      github: "https://github.com/sainath9392/email-campaign-scheduler",
      align: "right"
    },
    {
      id: "05",
      title: "TinyLink (Next.js 14)",
      tag: "NETWORK_NODE",
      description: [
        "High-performance URL shortener with real-time analytics and custom aliases.",
        "Built with Next.js App Router, Tailwind CSS, and PostgreSQL (Neon).",
        "Features 'Invisible Auth' using browser tokens and smart 302 redirects."
      ],
      tech: [
        { name: "Next.js 14", icon: "/svg/icons8-react-24.png" },
        { name: "TypeScript", icon: "/svg/icons8-tailwindcss-48.png" },
        { name: "PostgreSQL", icon: "/svg/icons8-rest-api-50.png" }
      ],
      live: "https://tinylink-tau.vercel.app/",
      github: "https://github.com/sainath9392/tinylink",
      align: "left"
    }
  ];

  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-transparent overflow-hidden relative py-20"
    >
      {/* Black Grit & Grid Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(255,255,255,0),rgba(0,0,0,0.1))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      {/* Section Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-10 mb-10">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-3xl group/cyber cursor-crosshair"
        >
          <div className="relative bg-black backdrop-blur-2xl border-2 p-5 md:p-8 overflow-hidden shadow-[10px_10px_0px_0px_rgba(var(--theme-card-accent-rgb),1)]" style={{ borderColor: 'var(--theme-card-accent)' }}>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.02)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(0,0,0,0),rgba(255,255,255,0.01))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
            
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[8px] md:text-[10px] font-mono tracking-[0.4em] uppercase font-bold" style={{ color: 'var(--theme-card-accent)' }}>
                [ INITIALIZING_PROJECT_VAULT_v3.0 ]
              </span>
              <h2 className="text-3xl md:text-7xl font-mono font-bold tracking-tighter flex items-center gap-3 justify-start uppercase uppercase" style={{ color: 'var(--theme-card-accent)' }}>
                <span className="animate-pulse">{">"}</span>
                PROJECT_ARCHIVE
                <span className="w-1.5 h-6 md:w-2 md:h-12 animate-pulse" style={{ backgroundColor: 'var(--theme-card-accent)' }}></span>
              </h2>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full relative z-10 flex flex-col items-center lg:items-start lg:pl-20 gap-10 md:gap-14 mt-10 lg:mt-20 mb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: project.align === "left" ? -50 : 50,
              y: 20
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              y: 0 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className={`rounded-xl relative group bg-black/95 p-6 w-[320px] md:w-[550px] lg:w-[600px] shadow-2xl border-2 transition-all duration-300 overflow-hidden ${
              project.align === "right" ? "self-center lg:self-end lg:mr-20" : ""
            }`}
            style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.1)' }}
          >
            <div className="absolute inset-0 pointer-events-none bg-[length:100%_8px] opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(var(--theme-accent-rgb), 0.03) 50%, transparent 50%)' }}></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-xl md:text-2xl font-mono font-extrabold uppercase tracking-tighter" style={{ color: 'var(--theme-card-accent)' }}>
                  {project.title}
                </h1>
                <span className="font-mono text-[10px] mt-1 tracking-widest" style={{ color: 'rgba(var(--theme-card-accent-rgb), 0.2)' }}>{project.tag}</span>
              </div>

              <div className="text-slate-300 text-xs md:text-sm font-sans space-y-2 mb-6 border-l-2 pl-4 py-1" style={{ borderLeftColor: 'rgba(var(--theme-card-accent-rgb), 0.3)' }}>
                {project.description.map((point, pIndex) => (
                  <p key={pIndex}>◦ {point}</p>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest block mb-2 underline underline-offset-4" style={{ color: 'var(--theme-card-accent)', textDecorationColor: 'rgba(var(--theme-card-accent-rgb), 0.3)' }}>System_Core:</span>
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.tech.map((skill, sIndex) => (
                      <motion.div 
                        key={sIndex}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10 transition-colors"
                      >
                        <img className="w-4 h-4 invert" src={skill.icon} alt={skill.name} />
                        <span className="text-[10px] text-white/70 font-mono uppercase">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <motion.a 
                    whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                    whileTap={{ scale: 0.98 }}
                    href={project.live} 
                    target="_blank" 
                    className="text-black px-6 py-2 font-mono font-bold text-xs uppercase transition-all"
                    style={{ backgroundColor: 'var(--theme-card-accent)' }}
                  >
                    LIVE_ACCESS
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02, backgroundColor: 'var(--theme-card-accent)', color: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github} 
                    target="_blank" 
                    className="border px-6 py-2 font-mono font-bold text-xs uppercase transition-all"
                    style={{ borderColor: 'var(--theme-card-accent)', color: 'var(--theme-card-accent)' }}
                  >
                    SOURCE_CODE
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Decorative HUD lines that appear on hover */}
            <div 
              className="absolute top-0 right-0 w-32 h-px transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"
              style={{ backgroundImage: 'linear-gradient(to left, rgba(var(--theme-accent-rgb), 0.5), transparent)' }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-32 h-px transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(var(--theme-accent-rgb), 0.5), transparent)' }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Standardized Scroll Down Button */}
      <div className="relative z-20 flex flex-col items-center justify-center pb-10 mt-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group cursor-pointer flex flex-col items-center gap-2"
        >
          <div className="flex flex-col items-center">
            <span className="text-[7px] md:text-[9px] text-black/40 font-mono tracking-[0.4em] uppercase font-bold">
              [ SEQUENCE_COMPLETE ]
            </span>
            <span className="text-[10px] md:text-sm text-black font-mono font-black px-4 py-1 transition-all uppercase tracking-tighter border border-black/20" style={{ '--hover-bg': 'var(--theme-accent)' }}>
              ACCESS_CONTACT_PROTOCOL
            </span>
          </div>
          
          <div className="w-8 h-8 md:w-10 md:h-10 border border-black/20 flex items-center justify-center relative overflow-hidden group-hover:border-black transition-all">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-black"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
