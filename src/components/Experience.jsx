import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    role: "Full Stack Developer",
    company: "TekTree LLC",
    period: "Dec 2025 – Present",
    description: [
      "Designing and shipping end-to-end product features using React, Node.js, Express, MongoDB, and Python APIs.",
      "Building scalable REST APIs, authentication flows, and data models for production systems.",
      "Debugging performance bottlenecks and improving reliability across frontend and backend.",
      "Working closely with product and engineering teams to iterate quickly and deliver user-facing value."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Python"],
    status: "ACTIVE"
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
    tech: ["React", "Node.js", "Telecom APIs", "System Logs"],
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
    tech: ["WebRTC", "Socket.IO", "Flask", "AI Speech"],
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
      "Delivered a complete, deployable analytics solution."
    ],
    tech: ["React", "Prophet", "Data Dashboards", "Automation"],
    status: "COMPLETE"
  }
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen w-full bg-transparent relative overflow-hidden flex flex-col items-center px-4 md:px-10 pt-20 pb-10 transition-all duration-700"
    >
      {/* High-Intensity Red HUD Layer */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      
      {/* Black Grid Overlay on Red */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

      {/* Warning Stripes Top/Bottom */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fbbf24_10px,#fbbf24_20px)] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fbbf24_10px,#fbbf24_20px)] opacity-50"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full text-center md:text-left bg-black/10 backdrop-blur-sm p-4 border-l-4 border-black"
        >
          <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
            <span className="text-[10px] text-black font-black font-mono tracking-[0.5em] uppercase">
              [ ALERT: SERVICE_RECORD_VIBRANT_MODE ]
            </span>
          </div>
          <h2 className="text-xl md:text-5xl font-mono font-bold text-white tracking-tighter flex items-center gap-2 justify-start">
            <span className="animate-pulse" style={{ color: 'var(--theme-accent)' }}>{">"}</span>
            MISSION_<span className="drop-shadow-[0_0_15px_var(--theme-glow)]" style={{ color: 'var(--theme-accent)' }}>HISTORY</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-2 h-6 md:w-3 md:h-12"
              style={{ backgroundColor: 'var(--theme-accent)' }}
            ></motion.span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-4 ml-4 md:ml-10 pl-8 md:pl-16 space-y-8" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.4)' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Heavy Timeline Node */}
              <div className="absolute -left-[44px] md:-left-[78px] top-0 flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white border-4 flex items-center justify-center rotate-45 shadow-xl" style={{ borderColor: 'var(--theme-accent)' }}>
                   <div className={`w-2 h-2 md:w-3 md:h-3 ${exp.status === "ACTIVE" ? "animate-ping" : "bg-black"}`} style={{ backgroundColor: exp.status === "ACTIVE" ? 'var(--theme-accent)' : 'black' }}></div>
                </div>
              </div>

              {/* High-Contrast Card */}
              <div className="relative group">
                <div className="bg-white p-6 md:p-8 border-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" style={{ borderColor: 'var(--theme-accent)' }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b-2 border-black/10 pb-4">
                    <div>
                      <h3 className="text-xl md:text-3xl font-mono font-black text-black uppercase">
                        {exp.role}
                      </h3>
                      <span className="text-xs md:text-sm font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--theme-accent)' }}>
                        // {exp.company}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs md:text-sm text-black/60 font-mono font-bold">
                        {exp.period}
                      </span>
                      <div className="mt-2">
                        <span className={`text-[10px] px-3 py-1 font-black font-mono ${exp.status === "ACTIVE" ? "text-white" : "bg-black text-white"}`} style={{ backgroundColor: exp.status === "ACTIVE" ? 'var(--theme-accent)' : 'black' }}>
                          {exp.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-base text-black/80 leading-tight font-bold">
                        <span style={{ color: 'var(--theme-accent)' }}>■</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[10px] md:text-xs font-mono font-black text-white bg-black px-3 py-1 hover:text-black transition-colors" style={{ '--hover-bg': 'var(--theme-accent)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Visibility Scroll Button */}
        <div className="mt-8 pb-10 w-full flex justify-center z-20">
          <motion.div 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer bg-white border-4 px-8 py-4 flex items-center gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            style={{ borderColor: 'var(--theme-accent)' }}
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-black font-black font-mono leading-none">INITIALIZE</span>
              <span className="text-lg md:text-2xl text-black font-mono font-black leading-none">PROJECT_VAULT</span>
            </div>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px]"
              style={{ borderTopColor: 'var(--theme-accent)' }}
            ></motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
