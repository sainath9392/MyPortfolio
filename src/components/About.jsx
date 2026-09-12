import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Cpu, Rocket, FileText, MapPin, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true
          }
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 20,
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
      className="w-full min-h-screen md:h-screen md:max-h-screen bg-transparent relative overflow-x-hidden md:overflow-hidden flex flex-col justify-between px-4 md:px-10 pt-16 sm:pt-20 lg:pt-20 pb-4 select-none"
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
        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-left"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase mb-1 block text-zinc-500">
            [ PROFILE // EXECUTIVE_SUMMARY ]
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

        {/* 2-Column Balanced Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center w-full">
          
          {/* Left: Narrative Bio & Engineering Pillars (7 cols) */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-3">
            
            {/* Lead Bio Headline */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  OPEN TO WORK • ACTIVELY SEEKING OPPORTUNITIES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed text-left">
                Engineering scalable web platforms, backend microservices, and AI-powered interfaces. With a core focus on the <strong className="text-zinc-950">MERN stack and Python/FastAPI</strong>, I build robust, production-ready systems that handle high traffic, secure authentication, and real-time data flows.
              </p>
            </div>

            {/* 3 Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-[11px] font-mono font-bold text-zinc-900">Web Architect</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-snug">
                  Scalable MERN apps, REST/GraphQL APIs, and clean component systems.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-[11px] font-mono font-bold text-zinc-900">AI & Real-Time</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-snug">
                  WebSockets, WebRTC video calling, and predictive Python neural nets.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-[11px] font-mono font-bold text-zinc-900">Production Ready</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-snug">
                  Clean code, automated testing, and CI/CD deployments.
                </p>
              </div>
            </div>

            {/* Professional Quick Fact Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-200 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 block mb-0.5">Experience</span>
                <span className="text-xs text-zinc-900 font-semibold">Ex-TekTree • Deepija • Infosys</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 block mb-0.5">Education</span>
                <span className="text-xs text-zinc-900 font-semibold">B.Tech in AI & ML</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 block mb-0.5">Availability</span>
                <span className="text-xs text-emerald-600 font-bold">Immediately Available</span>
              </div>
            </div>

          </div>

          {/* Right: Executive Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div 
              ref={cardRef} 
              className="relative w-full max-w-[280px] sm:max-w-[310px] rounded-2xl bg-white border border-zinc-200/80 p-3 shadow-xl flex flex-col gap-3 group hover:border-zinc-300 transition-all duration-300"
            >
              {/* Photo Wrapper */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-xl bg-zinc-100 border border-zinc-100">
                <img 
                  src="/img/sainath-portrait.png" 
                  alt="Sainath Duvvuri" 
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Floating location tag */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-200/80 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-700 font-medium">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>Hyderabad, India</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold">● Available Immediately</span>
                </div>
              </div>

              {/* Action Credentials */}
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href="https://drive.google.com/file/d/1zoE7vafskvA1iqPpm66c7GLKzFFFibM2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-950 text-white text-[11px] font-mono font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-red-400" />
                  <span>Resume PDF</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sainath-duvvuri-46ab61292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[11px] font-mono font-semibold border border-zinc-200 transition-all cursor-pointer"
                >
                  <FaLinkedin className="w-3 h-3 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Section Navigation Link */}
      <div className="relative z-20 w-full hidden md:flex justify-center pb-2">
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
