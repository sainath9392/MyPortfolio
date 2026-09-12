import React, { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: "01",
      title: "FULL_STACK_SYSTEMS",
      subtitle: "Web Architecture & APIs",
      description: "Engineering high-performance MERN ecosystems with scalable architecture, JWT security, and real-time data flows.",
      skills: [
        { name: "React.js / Next.js", icon: "/svg/icons8-react-24.png" },
        { name: "Node.js / Express", icon: "/svg/icons8-nodejs-48.png" },
        { name: "MongoDB / Mongoose", icon: "/svg/icons8-mongodb-24.png" },
        { name: "Tailwind / Modern CSS", icon: "/svg/icons8-tailwindcss-48.png" }
      ]
    },
    {
      id: "02",
      title: "AI_&_DATA_LOGIC",
      subtitle: "ML, Neural Nets & Fast APIs",
      description: "Developing AI product prototypes with neural networks (CNN/LSTM), predictive modeling, and FastAPI services.",
      skills: [
        { name: "Python / FastAPI", icon: "/svg/icons8-javascript-48.png" },
        { name: "TensorFlow / CNN", icon: "/svg/icons8-react-24.png" },
        { name: "Pandas / Scikit-Learn", icon: "/svg/icons8-rest-api-50.png" },
        { name: "Flask / WebSockets", icon: "/svg/icons8-express-js-50.png" }
      ]
    },
    {
      id: "03",
      title: "CLOUD_&_DEVOPS",
      subtitle: "Deployment, CI/CD & Scale",
      description: "Orchestrating cloud deployments and CI/CD pipelines across Vercel, Render, and Dockerized microservices.",
      skills: [
        { name: "Docker / Git", icon: "/svg/icons8-docker-48.png" },
        { name: "Postman / REST APIs", icon: "/svg/icons8-postman-api-64.png" },
        { name: "Vercel / Cloud Platforms", icon: "/svg/vercel.png" },
        { name: "JWT Auth / Microservices", icon: "/svg/icons8-github-30.png" }
      ]
    }
  ];

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="w-full min-h-screen md:h-screen md:max-h-screen bg-transparent relative overflow-hidden flex flex-col justify-between px-4 md:px-10 pt-16 sm:pt-20 lg:pt-20 pb-3 transition-colors duration-700 select-none"
    >
      {/* Background Overlays - Delicate Light Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center gap-4 sm:gap-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-left"
        >
          <span className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase mb-1 block">
            [ CAPABILITIES // TECHNICAL_MATRIX ]
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-zinc-950 tracking-tight flex items-center gap-2 justify-start">
            <span style={{ color: "var(--theme-accent)" }}>{">"}</span>
            TECHNICAL_<span style={{ color: "var(--theme-accent)" }}>STACK</span>
            <span 
              className="w-1.5 h-5 md:w-2 md:h-8 animate-pulse ml-1"
              style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 10px var(--theme-glow)" }}
            ></span>
          </h2>
        </motion.div>

        {/* 3 Columns of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="relative group flex flex-col rounded-2xl bg-white border border-zinc-200/80 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--theme-accent), transparent)" }}
              ></div>

              <div className="flex flex-col h-full gap-3 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }}></div>
                    <span className="text-[11px] font-mono uppercase tracking-widest font-semibold" style={{ color: "var(--theme-accent)" }}>
                      Cluster_{category.id}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400">VERIFIED</span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-mono font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">
                    {category.subtitle}
                  </span>
                </div>
                
                <p className="text-zinc-600 text-[11px] sm:text-xs font-light leading-snug">
                  {category.description}
                </p>

                {/* Skill Item Pills */}
                <div className="grid grid-cols-1 gap-1.5 mt-auto pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50/80 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-100 transition-all group/item"
                    >
                      <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain opacity-85 group-hover/item:opacity-100" />
                      </div>
                      <span className="text-[11px] text-zinc-800 font-mono group-hover/item:text-zinc-950 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Section Navigation Link */}
      <div className="relative z-20 w-full flex justify-center pb-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer flex flex-col items-center gap-1"
        >
          <div 
            className="px-4 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider border border-zinc-300 bg-white group-hover:bg-zinc-950 group-hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            style={{ color: "var(--theme-accent)" }}
          >
            <span>Career Milestones</span>
            <span>↓</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
