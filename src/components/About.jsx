import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-transparent relative overflow-hidden flex flex-col items-center px-4 pt-20 pb-10 transition-colors duration-700"
    >
      {/* Background Grid Overlay - Deep Green Mode */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0)_50%,rgba(0,255,65,0.08)_50%),linear-gradient(90deg,rgba(0,255,65,0.1),rgba(0,0,0,0),rgba(0,255,65,0.1))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00ff41 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-10">
        
        {/* Terminal Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-2 md:mb-10 w-full text-center md:text-left"
        >
          <span className="text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase mb-1 block opacity-80" style={{ color: 'var(--theme-accent)' }}>
            [ INITIALIZING_BIO_PROTOCOL ]
          </span>
          <h2 className="text-3xl md:text-6xl font-mono font-bold text-white tracking-tighter flex items-center gap-3 justify-start uppercase">
            <span className="animate-pulse" style={{ color: 'var(--theme-accent)' }}>{">"}</span>
            BIO_<span style={{ color: 'var(--theme-accent)' }}>PROTOCOL</span>
            <span className="w-1.5 h-6 md:w-2 md:h-12 animate-pulse" style={{ backgroundColor: 'var(--theme-accent)', boxShadow: '0 0 10px var(--theme-glow)' }}></span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 w-full items-center">
          
          {/* Narrative Layer */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 animate-pulse shadow-[0_0_5px_var(--theme-glow)]" style={{ backgroundColor: 'var(--theme-accent)' }}></div>
                <span className="text-[9px] md:text-sm font-mono uppercase tracking-widest italic" style={{ color: 'var(--theme-accent)' }}>
                  ( data_stream // optimized )
                </span>
              </div>
              
              <p className="text-emerald-50 text-base md:text-xl font-light leading-relaxed tracking-wide text-justify md:text-left">
                <span className="text-white font-semibold">Strategic Full-Stack Developer</span> with elite proficiency in the <span className="text-white border-b" style={{ borderBottomColor: 'rgba(var(--theme-accent-rgb), 0.3)' }}>MERN stack and FastAPI</span>. Architecting <span className="text-white">scalable backend systems</span> and <span className="text-white">real-time features</span>, bridging <span className="text-white font-mono italic text-[10px] md:text-base" style={{ color: 'var(--theme-accent)' }}>AI_DRIVEN_CAPABILITIES</span> with robust, user-centric web architecture.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-1 pt-3 border-t border-white/10">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] font-mono uppercase" style={{ color: 'rgba(var(--theme-accent-rgb), 0.5)' }}>Status</span>
                  <span className="text-[10px] md:text-sm font-mono font-bold uppercase" style={{ color: 'var(--theme-accent)' }}>Stable</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] font-mono uppercase" style={{ color: 'rgba(var(--theme-accent-rgb), 0.5)' }}>Node</span>
                  <span className="text-[8px] md:text-xs text-white font-mono uppercase">Emerald</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Layer */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[140px] md:max-w-[220px] h-auto max-h-[400px]">
              {/* HUD Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 z-10" style={{ borderColor: 'var(--theme-accent)' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 z-10" style={{ borderColor: 'var(--theme-accent)' }}></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden border-2 p-2 shadow-2xl transition-all duration-500" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.2)' }}>
                <img 
                  src="/img/download.png" 
                  alt="Profile Visual" 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Scanning Bar Animation */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] z-30 opacity-70"
                  style={{ backgroundColor: 'var(--theme-accent)', boxShadow: '0 0 15px var(--theme-glow)' }}
                ></motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Button */}
        <div className="mt-4 pb-6 w-full flex justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer flex flex-col items-center gap-2"
          >
            <div className="flex flex-col items-center">
              <span className="text-[9px] md:text-[11px] font-mono tracking-[0.4em] uppercase font-bold" style={{ color: 'rgba(var(--theme-accent-rgb), 0.4)' }}>
                [ NEXT_MODULE ]
              </span>
              <span className="text-[12px] md:text-base font-mono font-bold group-hover:bg-white group-hover:text-black px-6 py-2 transition-all uppercase tracking-tighter border" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.2)', color: 'var(--theme-accent)' }}>
                ACCESS_SKILL_MANIFEST
              </span>
            </div>

            
            <div className="w-8 h-8 md:w-10 md:h-10 border flex items-center justify-center relative overflow-hidden group-hover:border-white transition-all" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.2)' }}>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px]"
                style={{ borderTopColor: 'var(--theme-accent)' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
