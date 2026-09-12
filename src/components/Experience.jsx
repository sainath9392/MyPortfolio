import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Radio, Terminal, Mic, TrendingUp, LayoutDashboard, Zap } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFlask,
  SiSocketdotio,
  SiWebrtc
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "01",
    role: "Full Stack Developer",
    company: "TekTree LLC",
    period: "Dec 2025 – June 30",
    description: [
      "Designed and shipped end-to-end product features using React, Node.js, Express, MongoDB, and Python APIs.",
      "Built scalable REST APIs, authentication flows, and data models for production systems.",
      "Debugged performance bottlenecks and improved reliability across frontend and backend.",
      "Collaborated closely with product and engineering teams to iterate quickly and deliver user-facing value."
    ],
    tech: [
      { name: "React", icon: <SiReact className="w-3 h-3 text-[#087ea4]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3 text-[#5FA04E]" /> },
      { name: "Express", icon: <SiExpress className="w-3 h-3 text-zinc-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-3 h-3 text-[#47A248]" /> },
      { name: "Python", icon: <SiPython className="w-3 h-3 text-[#3776AB]" /> }
    ],
    status: "COMPLETE"
  },
  {
    id: "02",
    role: "Technical Solution Engineer",
    company: "Deepija Telecom Pvt Ltd",
    period: "Sep 2025 – Dec 2025",
    description: [
      "Built internal product tools and dashboards using React and Node.js, improving operational visibility.",
      "Integrated backend services and APIs supporting telecom-scale systems.",
      "Diagnosed and resolved system-level issues using logs, API analysis, and code fixes.",
      "Contributed to delivering stable, production-ready features in a cross-functional environment."
    ],
    tech: [
      { name: "React", icon: <SiReact className="w-3 h-3 text-[#087ea4]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3 text-[#5FA04E]" /> },
      { name: "Telecom APIs", icon: <Radio className="w-3 h-3 text-blue-600" /> },
      { name: "System Logs", icon: <Terminal className="w-3 h-3 text-zinc-700" /> }
    ],
    status: "COMPLETE"
  },
  {
    id: "03",
    role: "AI Variant Developer Intern",
    company: "Naventra AI Variant",
    period: "May 2025 – Aug 2025",
    description: [
      "Built AI-powered product prototypes with real-time speech recognition, translation, and captions.",
      "Developed multi-user video meeting features using React, Flask, Socket.IO, and WebRTC.",
      "Focused on real-time data flow, latency reduction, and scalability."
    ],
    tech: [
      { name: "WebRTC", icon: <SiWebrtc className="w-3 h-3 text-zinc-800" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="w-3 h-3 text-zinc-800" /> },
      { name: "Flask", icon: <SiFlask className="w-3 h-3 text-zinc-800" /> },
      { name: "AI Speech", icon: <Mic className="w-3 h-3 text-red-500" /> }
    ],
    status: "COMPLETE"
  },
  {
    id: "04",
    role: "Full Stack Developer Intern",
    company: "Infosys Springboard 5.0",
    period: "Feb 2025 – Apr 2025",
    description: [
      "Built React-based data dashboards integrated with Prophet forecasting models.",
      "Automated forecasting workflows, reducing manual effort by 60%.",
      "Delivered a complete, deployable analytics solution with automated model training."
    ],
    tech: [
      { name: "React", icon: <SiReact className="w-3 h-3 text-[#087ea4]" /> },
      { name: "Prophet", icon: <TrendingUp className="w-3 h-3 text-emerald-600" /> },
      { name: "Data Dashboards", icon: <LayoutDashboard className="w-3 h-3 text-indigo-600" /> },
      { name: "Automation", icon: <Zap className="w-3 h-3 text-amber-500" /> }
    ],
    status: "COMPLETE"
  }
];

const Experience = () => {
  const [activeId, setActiveId] = useState("01");
  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade in
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="w-full min-h-screen md:h-screen md:max-h-screen bg-transparent relative overflow-x-hidden md:overflow-hidden flex flex-col justify-between px-4 md:px-10 pt-16 sm:pt-20 lg:pt-20 pb-4 transition-colors duration-700 select-none"
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
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase block">
              [ CAREER // MILESTONES ]
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Opportunities
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-zinc-950 tracking-tight flex items-center gap-2 justify-start">
            <span style={{ color: "var(--theme-accent)" }}>{">"}</span>
            WORK_<span style={{ color: "var(--theme-accent)" }}>EXPERIENCE</span>
            <span 
              className="w-1.5 h-5 md:w-2 md:h-8 animate-pulse ml-1"
              style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 10px var(--theme-glow)" }}
            ></span>
          </h2>
        </motion.div>

        {/* 2-Column Split: Milestone Selector (Left) & Active Detail View (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch w-full">
          
          {/* Left: Interactive Timeline Selector (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-2">
            {experiences.map((exp) => {
              const isSelected = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  onMouseEnter={() => setActiveId(exp.id)}
                  className={`group relative text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-white border-zinc-300 shadow-md ring-1 ring-zinc-200"
                      : "bg-white/80 border-zinc-200/80 shadow-sm hover:border-zinc-300 hover:bg-white"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeExpIndicator"
                      className="absolute left-0 top-1.5 bottom-1.5 w-1.5 rounded-r-full"
                      style={{ backgroundColor: "var(--theme-accent)" }}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-2">
                    <span className="font-mono text-xs text-zinc-400">
                      {exp.id}
                    </span>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                        isSelected ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                      }`}>
                        {exp.company}
                      </h4>
                      <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      exp.status === "ACTIVE"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-zinc-100 text-zinc-600 border-zinc-200"
                    }`}>
                      {exp.status === "ACTIVE" ? "ACTIVE" : exp.period.split(" – ")[0]}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "text-zinc-900 translate-x-0.5" : "text-zinc-400 group-hover:text-zinc-700"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Role Detail Showcase (7 cols) */}
          <div className="md:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
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
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" style={{ color: "var(--theme-accent)" }} />
                        <h3 className="text-base sm:text-lg font-mono font-bold text-zinc-950">
                          {activeExp.role}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-zinc-600 mt-0.5 block">
                        @ <strong className="text-zinc-950">{activeExp.company}</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        <span>{activeExp.period}</span>
                      </span>
                      <span 
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                          activeExp.status === "ACTIVE"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-zinc-100 text-zinc-600 border-zinc-200"
                        }`}
                      >
                        {activeExp.status === "ACTIVE" ? "● ACTIVE ROLE" : "COMPLETED"}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4">
                    {activeExp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--theme-accent)" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="pt-3 border-t border-zinc-100">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 block mb-1.5">
                    Stack & Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeExp.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 text-[10.5px] font-mono px-2.5 py-1 rounded-lg bg-zinc-50/90 border border-zinc-200/80 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100 transition-all shadow-2xs"
                      >
                        <span className="shrink-0 flex items-center justify-center">
                          {t.icon}
                        </span>
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Section Navigation Link */}
      <div className="relative z-20 w-full hidden md:flex justify-center pb-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer flex flex-col items-center gap-1"
        >
          <div 
            className="px-4 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider border border-zinc-300 bg-white group-hover:bg-zinc-950 group-hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            style={{ color: "var(--theme-accent)" }}
          >
            <span>Featured Projects</span>
            <span>↓</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
