import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const myRef = useRef(null);

  return (
    <div id="home" ref={myRef} className="h-dvh w-full overflow-hidden relative bg-transparent">
      {/* Background Video Implementation */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/From KlickPin CF Instagram Growth Tips Inspiration for Fall 31741 - Pin-37788084371845593.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for HUD contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Layout - Optimized Centering */}
      <div className="flex relative flex-col min-h-full w-full items-center justify-start md:justify-center px-4 md:px-10 overflow-y-auto overflow-x-hidden z-10 pt-[15vh] md:pt-0 pb-32 md:pb-0 scrollbar-hide">
        
        {/* Cyberpunk HUD Identity Matrix */}
        <motion.div 
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-[550px] md:absolute md:top-[160px] md:left-[40px] group/cyber cursor-crosshair z-20 shrink-0"
        >
          <div className="relative bg-black/40 backdrop-blur-2xl border-[0.5px] border-white/10 p-4 md:p-6 overflow-hidden transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(255,255,255,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,255,0.01),rgba(0,0,255,0.04))] bg-[length:100%_4px,3px_100%] opacity-20 transition-opacity"></div>
            
            <div className="flex flex-col gap-4 md:gap-6 relative z-10">
              {/* Header: System ID */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                      <span className="text-[7px] md:text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: 'var(--theme-accent)' }}>
                        [ EXECUTING_IDENTITY_SHELL ]
                      </span>
                      <h1 className="text-xl md:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
                        <span style={{ color: 'var(--theme-accent)' }}>{">"}</span>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "linear" }}
                          className="overflow-hidden whitespace-nowrap inline-block"
                        >
                          SAINATH_<span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--theme-accent), #fff)' }}>DUVVURI</span>
                        </motion.span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-2 h-2 md:w-4 md:h-4 ml-2"
                          style={{ backgroundColor: 'var(--theme-accent)', boxShadow: '0 0 10px var(--theme-glow)' }}
                        ></motion.div>
                      </h1>
                      
                      {/* Professional Roles Subtitle */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 md:mt-6 border-l-2 pl-4"
                        style={{ borderColor: 'var(--theme-accent)' }}
                      >
                        {[
                          "FULL_STACK_DEVELOPER",
                          "AI_ML_ENGINEER",
                          "MERN_STACK_DEVELOPER"
                        ].map((role) => (
                          <div key={role} className="flex items-center gap-2">
                            <span className="text-[10px] md:text-sm font-mono font-bold tracking-widest text-white/80">{role}</span>
                            <span className="text-[10px] text-gray-600 font-mono">//</span>
                          </div>
                        ))}
                      </motion.div>
                      
                      {/* Terminal Loading Sequence */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                        className="flex items-center gap-2 mt-2"
                      >
                        <span className="text-[7px] md:text-[9px] text-gray-500 font-mono italic">AUTHENTICATING...</span>
                        <div className="h-[2px] w-20 bg-gray-800 relative overflow-hidden">
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full"
                            style={{ backgroundColor: 'var(--theme-accent)', opacity: 0.5 }}
                          />
                        </div>
                        <span className="text-[7px] md:text-[9px] font-mono" style={{ color: 'var(--theme-accent)' }}>[READY]</span>
                      </motion.div>
                    </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <div className="text-[7px] md:text-[10px] font-mono animate-pulse" style={{ color: 'var(--theme-accent)' }}>● STABLE</div>
                  <div className="text-[7px] md:text-[10px] text-gray-500 font-mono">HYD_IN</div>
                </div>
              </div>

              {/* Core Data Segments */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-white/5 p-2 md:p-3 relative group/seg transition-all border" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.3)' }}>
                  <div className="absolute -top-1.5 -left-1 px-1 bg-black text-[6px] md:text-[8px] font-mono" style={{ color: 'var(--theme-accent)' }}>CLASS_DATA</div>
                  <p className="text-white text-[8px] md:text-xs font-mono leading-tight md:leading-relaxed">
                    FULL_STACK_DEV<br/>
                    PYTHON_MERN<br/>
                    AI_ML_GRAD
                  </p>
                </div>

                <div className="bg-white/5 p-2 md:p-3 relative group/seg transition-all border" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.3)' }}>
                  <div className="absolute -top-1.5 -left-1 px-1 bg-black text-[6px] md:text-[8px] font-mono" style={{ color: 'var(--theme-accent)' }}>CORE_LOCUS</div>
                  <p className="text-white text-[8px] md:text-xs font-mono leading-tight md:leading-relaxed">
                    B.TECH_AI_ML<br/>
                    HYDERABAD_03<br/>
                    READY_TO_SHIP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-1 overflow-x-auto scrollbar-hide">
                {[
                  { label: "GITHUB", url: "https://github.com/sainath9392", icon: <FaGithub /> },
                  { label: "LINKEDIN", url: "https://www.linkedin.com/in/sainath-duvvuri-46ab61292", icon: <FaLinkedin /> },
                  { label: "MAIL", url: "mailto:sainathduvvuri03@gmail.com", icon: <MdEmail /> }
                ].map((item) => (
                  <motion.a 
                    key={item.label} 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: 'var(--theme-accent)' }}
                    className="flex items-center gap-1.5 text-[8px] md:text-xs font-mono text-gray-400 hover:text-white transition-all group/link"
                  >
                    <span className="text-sm" style={{ color: 'var(--theme-accent)' }}>{item.icon}</span>
                    <span className="border-b border-gray-800 group-hover/link:border-accent pb-0.5">{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Footer Stats Strip */}
              <div className="flex justify-between items-center text-[6px] md:text-[10px] font-mono text-gray-600 border-t pt-2" style={{ borderTopColor: 'rgba(var(--theme-accent-rgb), 0.2)' }}>
                <span>STREAMS: MERN_REST_API</span>
                <span className="animate-pulse hidden xs:inline" style={{ color: 'var(--theme-accent)', opacity: 0.3 }}>03_DUVV_SAI</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cyberpunk Core Directives */}
        <div className="mt-6 md:mt-0 flex flex-col gap-4 md:gap-8 w-full max-w-[550px] md:w-auto md:absolute md:top-[350px] lg:top-[300px] md:right-[40px] items-center md:items-end z-20 shrink-0">
          <div className="flex flex-col items-center md:items-end gap-1 px-2">
            <span className="text-[7px] md:text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              [ ACCESSING_CAPABILITIES ]
            </span>
            <h2 className="text-sm md:text-2xl text-white font-mono font-bold tracking-tight flex items-center gap-2">
              <span style={{ color: 'var(--theme-accent)' }}>{">"}</span>
              CORE_<span style={{ color: 'var(--theme-accent)' }}>DIRECTIVES</span>
              <motion.span 
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
                className="w-1.5 h-3 md:w-2 md:h-5 ml-1"
                style={{ backgroundColor: 'var(--theme-accent)' }}
              ></motion.span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-64 px-4 md:px-0">
            {[
              { id: "01", label: "CREATIVE_UI", color: "#22d3ee" }, // Cyan
              { id: "02", label: "SECURE_AUTH", color: "#a3e635" }, // Lime
              { id: "03", label: "SCALABLE_ARCH", color: "#dc2626" } // Red
            ].map((directive, index) => (
              <motion.div 
                key={directive.label}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                className="group relative flex items-center justify-between px-4 py-2.5 md:px-5 md:py-4 bg-black/40 backdrop-blur-xl border w-full transition-all duration-300 hover:translate-x-[-5px] hover:bg-black/60"
                style={{ borderColor: `${directive.color}33` }} // 20% opacity hex
              >
                <div className="flex flex-col">
                  <span className="text-[6px] text-gray-500 font-mono">STREAM_{directive.id}</span>
                  <span className="text-[10px] md:text-base font-mono font-bold tracking-wider" style={{ color: directive.color }}>
                    {directive.label}
                  </span>
                </div>
                <div className="w-1 h-3 md:h-6 opacity-40 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: directive.color }}></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Standardized Scroll Down Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group cursor-pointer flex flex-col items-center gap-2"
        >
          <div className="flex flex-col items-center">
            <span className="text-[7px] md:text-[9px] text-white/40 font-mono tracking-[0.4em] uppercase font-bold">
              [ SCROLL_TO_EXPLORE ]
            </span>
            <span className="text-[10px] md:text-sm text-white font-mono font-bold group-hover:bg-white group-hover:text-black px-4 py-1 transition-all uppercase tracking-tighter border border-white/10" style={{ '--hover-bg': 'var(--theme-accent)' }}>
              INITIATE_EXPLORATION
            </span>
          </div>
          
          <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-all">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-white"
              style={{ borderTopColor: 'rgba(255,255,255,0.8)' }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
