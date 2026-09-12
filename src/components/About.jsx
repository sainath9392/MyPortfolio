import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on profile image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // Smooth staggered entrance for text blocks
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 25,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            once: true
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
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

      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center gap-4 sm:gap-6">
        
        {/* Header */}
        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-left"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase mb-1 block text-zinc-500">
            [ IDENTITY // SYSTEM_PROFILE ]
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-zinc-950 tracking-tight flex items-center gap-2 justify-start uppercase">
            <span style={{ color: "var(--theme-accent)" }}>{">"}</span>
            ABOUT_<span style={{ color: "var(--theme-accent)" }}>SAINATH</span>
            <span 
              className="w-1.5 h-5 md:w-2 md:h-8 animate-pulse ml-1" 
              style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 10px var(--theme-glow)" }}
            ></span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 w-full items-center">
          
          {/* Narrative Layer (7 cols) */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }}></div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                ( verified // engineering_profile )
              </span>
            </div>
            
            <p className="text-zinc-700 text-xs sm:text-sm lg:text-base font-light leading-relaxed text-justify md:text-left">
              <span className="text-zinc-950 font-semibold">Strategic Full-Stack Developer</span> at <span className="text-zinc-950 font-medium underline decoration-zinc-300 underline-offset-4">TekTree LLC</span> with verified mastery in the <span className="text-zinc-950 border-b border-red-300">MERN stack and FastAPI/Python</span>. I specialize in architecting <span className="text-zinc-950 font-medium">high-throughput backend microservices</span> and <span className="text-zinc-950 font-medium">real-time communications</span>, connecting <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-200">AI_DRIVEN_CAPABILITIES</span> with robust, production web applications.
            </p>

            <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-zinc-200">
              <div className="flex flex-col gap-0.5 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <span className="text-[9px] font-mono uppercase text-zinc-400">Status</span>
                <span className="text-xs font-mono font-bold uppercase text-red-600">Available</span>
              </div>
              <div className="flex flex-col gap-0.5 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <span className="text-[9px] font-mono uppercase text-zinc-400">Location</span>
                <span className="text-xs text-zinc-900 font-mono uppercase font-semibold">Hyderabad, IN</span>
              </div>
              <div className="flex flex-col gap-0.5 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <span className="text-[9px] font-mono uppercase text-zinc-400">Degree</span>
                <span className="text-xs text-zinc-900 font-mono uppercase font-semibold">B.Tech AI/ML</span>
              </div>
            </div>
          </div>

          {/* Visual Layer (5 cols) with Parallax */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div ref={imageRef} className="relative group w-full max-w-[180px] sm:max-w-[210px] md:max-w-[230px]">
              {/* HUD Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 z-10" style={{ borderColor: "var(--theme-accent)" }}></div>
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 z-10" style={{ borderColor: "var(--theme-accent)" }}></div>
              
              {/* Image Card Container */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-white border border-zinc-200/80 p-2.5 shadow-xl transition-all duration-500 group-hover:border-zinc-300">
                <img 
                  src="/img/download.png" 
                  alt="Profile Visual" 
                  className="w-full h-auto rounded-xl object-contain grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                />
                {/* Laser Scanning Bar */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] z-30 opacity-75"
                  style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 12px var(--theme-glow)" }}
                ></motion.div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Section Navigation Link */}
      <div className="relative z-20 w-full flex justify-center pb-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer flex flex-col items-center gap-1"
        >
          <div 
            className="px-4 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider border border-zinc-300 bg-white group-hover:bg-zinc-950 group-hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            style={{ color: "var(--theme-accent)" }}
          >
            <span>Core Technical Skills</span>
            <span>↓</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
