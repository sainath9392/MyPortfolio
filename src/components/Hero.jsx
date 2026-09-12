import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Send, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  MapPin
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const myRef = useRef(null);

  // Rotating specialties in the hero intro
  const specialties = [
    "Full Stack Developer",
    "AI & ML Engineer",
    "MERN Stack Specialist",
    "FastAPI & Python Architect"
  ];
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="home" 
      ref={myRef} 
      className="relative w-full min-h-screen md:h-screen md:max-h-screen overflow-hidden flex flex-col justify-between bg-transparent text-zinc-900 select-none"
    >
      {/* Subtle Background Pattern & Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(ellipse 65% 45% at 50% 15%, rgba(var(--theme-accent-rgb), 0.12), transparent 70%)"
          }}
        ></div>

        {/* Clean subtle dot matrix grid */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        ></div>

        {/* Delicate linear grid accent */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "96px 96px"
          }}
        ></div>
      </div>

      {/* Main Container - Centered and strictly fitted for screen size */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-20 pb-2 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Identity, Executive Pitch & Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/90 border border-zinc-200/90 shadow-xs mb-2.5 group hover:border-zinc-300 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                ></span>
                <span 
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                ></span>
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wide text-zinc-700">
                Available for New Roles
              </span>
              <span className="text-zinc-300 font-mono text-[10px]">|</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                <MapPin className="w-2.5 h-2.5 text-zinc-400" />
                Hyderabad, IN
              </span>
            </motion.div>

            {/* Sub-label */}
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3 h-3" style={{ color: "var(--theme-accent)" }} />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-zinc-500 font-medium">
                Full-Stack Software Engineer & AI Specialist
              </span>
            </div>

            {/* Name / Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12] mb-2">
              Building scalable systems with{" "}
              <span 
                className="text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage: "linear-gradient(135deg, #09090b 20%, var(--theme-accent) 100%)"
                }}
              >
                modern code.
              </span>
            </h1>

            {/* Animated Specialty Carousel */}
            <div className="h-6 mb-2 flex items-center overflow-hidden">
              <span className="text-xs font-mono text-zinc-500 mr-2">Focus:</span>
              <motion.span
                key={specialtyIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded border border-zinc-200 bg-zinc-100"
                style={{ color: "var(--theme-accent)" }}
              >
                {specialties[specialtyIndex]}
              </motion.span>
            </div>

            {/* Executive Bio */}
            <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl mb-3.5">
              Hi, I'm <strong className="text-zinc-900 font-semibold">Sainath Duvvuri</strong> — Full Stack Developer formerly at <span className="text-zinc-900 font-semibold underline decoration-zinc-300 underline-offset-2">TekTree LLC</span>, actively seeking new opportunities. 
              I design and ship end-to-end production web applications using the <span className="text-zinc-900 font-medium">MERN stack</span>, <span className="text-zinc-900 font-medium">FastAPI/Python</span>, and real-time architectures with high performance and intuitive UX.
            </p>

            {/* Primary & Secondary Action CTAs + Social Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundColor: "var(--theme-accent)",
                  boxShadow: "0 6px 18px -4px var(--theme-glow)"
                }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span>Explore Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm text-zinc-800 bg-zinc-100 hover:bg-zinc-200/90 border border-zinc-300/80 shadow-xs flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer hover:border-zinc-400"
              >
                <span>Get In Touch</span>
                <Send className="w-3 h-3 text-zinc-500" />
              </motion.button>
            </div>

            {/* Social Connection Badges */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Connect:
              </span>
              {[
                { label: "GitHub", url: "https://github.com/sainath9392", icon: <FaGithub className="w-3 h-3" /> },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/sainath-duvvuri-46ab61292", icon: <FaLinkedin className="w-3 h-3" /> },
                { label: "Email", url: "mailto:sainathduvvuri03@gmail.com", icon: <MdEmail className="w-3 h-3" /> }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1, scale: 1.03 }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100/90 hover:bg-zinc-200/80 border border-zinc-200/90 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all text-[11px] font-mono shadow-2xs"
                >
                  <span style={{ color: "var(--theme-accent)" }}>{social.icon}</span>
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Engineering Dossier / Interactive Card */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-xl bg-white/95 border border-zinc-200/90 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] p-4 sm:p-5 overflow-hidden">
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  backgroundImage: "linear-gradient(90deg, transparent, var(--theme-accent), transparent)"
                }}
              ></div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="ml-1.5 text-[11px] font-mono text-zinc-500 font-medium">
                    engineering_overview.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  AVAILABLE_IMMEDIATELY
                </div>
              </div>

              {/* Verified Experience Snapshot */}
              <div className="space-y-2 mb-2.5">
                <div className="p-2.5 rounded-lg bg-zinc-50/90 border border-zinc-200/70 hover:border-zinc-300 transition-all">
                  <div className="flex items-start justify-between mb-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 font-medium">Recent Experience</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-200/60 text-zinc-600">Until June 30</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 flex items-center gap-1">
                    Full Stack Developer
                    <span className="text-zinc-500 font-normal">@ TekTree LLC</span>
                  </h4>
                  <p className="text-[10.5px] text-zinc-500 mt-0.5 leading-snug">
                    Architected production systems with React, Node.js, Express, MongoDB, and Python APIs.
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-zinc-50/90 border border-zinc-200/70 hover:border-zinc-300 transition-all">
                  <div className="flex items-start justify-between mb-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 font-medium">Credentials</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-200/60 text-zinc-600">Graduated</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-900">
                    B.Tech in Artificial Intelligence & ML
                  </h4>
                  <p className="text-[10.5px] text-zinc-500 mt-0.5 leading-snug">
                    Specialized in data structures, algorithms, neural networks, and scalable system design.
                  </p>
                </div>
              </div>

              {/* Core Engineering Capabilities */}
              <div className="mb-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Cpu className="w-3 h-3" style={{ color: "var(--theme-accent)" }} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 font-semibold">
                    Core Architectural Pillars
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { title: "MERN Stack Systems", desc: "React 19, Node.js, MongoDB" },
                    { title: "AI & Fast APIs", desc: "Python, FastAPI, ML" },
                    { title: "Real-Time Comms", desc: "WebSockets, WebRTC" },
                    { title: "Clean UI/UX", desc: "TailwindCSS, Framer Motion" }
                  ].map((pillar) => (
                    <div 
                      key={pillar.title}
                      className="p-1.5 rounded-md bg-zinc-50/80 border border-zinc-200/60 hover:border-zinc-300 transition-colors"
                    >
                      <div className="flex items-center gap-1 text-[10px] font-medium text-zinc-800">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{pillar.title}</span>
                      </div>
                      <div className="text-[8.5px] font-mono text-zinc-400 pl-3.5 truncate">
                        {pillar.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-3 h-3" style={{ color: "var(--theme-accent)" }} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 font-semibold">
                    Primary Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    "React.js",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "FastAPI",
                    "Express.js",
                    "Tailwind CSS",
                    "REST APIs"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 rounded text-[9.5px] font-mono bg-zinc-100 border border-zinc-200/80 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/60 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Micro Status Terminal Footer */}
              <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between text-[9px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <Terminal className="w-2.5 h-2.5 text-zinc-400" />
                  <span>sai.status: ready_to_deploy</span>
                </span>
                <span className="text-zinc-400">v2.5.0</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator - Compact */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="relative z-10 w-full hidden md:flex flex-col items-center justify-center pb-2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-0.5 group">
          <span className="text-[8.5px] font-mono uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-700 transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 2.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-6 rounded-full border border-zinc-300 flex items-start justify-center p-0.5 group-hover:border-zinc-400 transition-colors"
          >
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.8 h-1 rounded-full"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
