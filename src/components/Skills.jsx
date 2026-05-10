import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      id: "01",
      title: "WEB_SYSTEMS_MATRIX",
      description: "Engineering high-performance MERN ecosystems. Specializing in scalable architecture, JWT security, and real-time data flows across production-grade web systems.",
      skills: [
        { name: "React.js / Node.js", icon: "/svg/icons8-react-24.png" },
        { name: "Express / MongoDB", icon: "/svg/icons8-mongodb-24.png" },
        { name: "Tailwind / JS_ES6+", icon: "/svg/icons8-tailwindcss-48.png" },
        { name: "Mongoose / REST", icon: "/svg/icons8-rest-api-50.png" }
      ]
    },
    {
      id: "02",
      title: "AI_NEURAL_LOGIC",
      description: "Developing AI-powered product prototypes. Proficient in neural networks (CNN/LSTM), predictive modeling, and Python-based FastAPI architecture.",
      skills: [
        { name: "Python / FastAPI", icon: "/svg/icons8-javascript-48.png" },
        { name: "TensorFlow / CNN", icon: "/svg/icons8-react-24.png" },
        { name: "Pandas / Scikit", icon: "/svg/icons8-rest-api-50.png" },
        { name: "Flask / WebRTC", icon: "/svg/icons8-express-js-50.png" }
      ]
    },
    {
      id: "03",
      title: "SYSTEM_DEVOPS_OPS",
      description: "Orchestrating cloud deployments and CI/CD pipelines. Maintaining system reliability across Vercel, Render, and Dockerized environments.",
      skills: [
        { name: "Docker / Git", icon: "/svg/icons8-docker-48.png" },
        { name: "Postman / GitHub", icon: "/svg/icons8-postman-api-64.png" },
        { name: "Vercel / Render", icon: "/svg/vercel.png" },
        { name: "JWT / Microservices", icon: "/svg/icons8-github-30.png" }
      ]
    }
  ];

  return (
    <div
      id="skills"
      className="min-h-screen w-full bg-transparent relative overflow-hidden flex flex-col items-center px-4 md:px-10 pt-20 pb-10 transition-colors duration-700"
    >
      {/* Background Overlays - Cyber Purple Mode */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(188,19,254,0)_50%,rgba(188,19,254,0.05)_50%),linear-gradient(90deg,rgba(188,19,254,0.05),rgba(0,0,0,0),rgba(188,19,254,0.05))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #bc13fe 1px, transparent 0)', backgroundSize: '35px 35px' }}></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-8 md:gap-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full text-left"
        >
          <span className="text-[8px] md:text-[10px] text-purple-400 font-mono tracking-[0.4em] uppercase mb-2 block opacity-80">
            [ INITIALIZING_SKILL_MANIFEST_v3.0 ]
          </span>
          <h2 className="text-xl md:text-5xl font-mono font-bold text-white tracking-tighter flex items-center gap-2 justify-start">
            <span className="animate-pulse" style={{ color: 'var(--theme-accent)' }}>{">"}</span>
            CORE_<span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--theme-accent), #f472b6)' }}>COMPETENCIES</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(1)" }}
              className="w-1.5 h-4 md:w-2 md:h-8 ml-2"
              style={{ backgroundColor: 'var(--theme-accent)', boxShadow: '0 0 10px var(--theme-glow)' }}
            ></motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative group flex"
            >
              {/* Technical Frame */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.5)' }}></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(244, 114, 182, 0.5)' }}></div>
              
              <div className="bg-purple-950/20 backdrop-blur-xl border p-5 md:p-7 flex-1 relative overflow-hidden group-hover:bg-purple-950/30 transition-all duration-500 flex flex-col" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.1)' }}>
                <div className="flex flex-col h-full gap-4 relative z-10">
                  <div className="flex items-center justify-between border-b pb-3" style={{ borderBottomColor: 'rgba(var(--theme-accent-rgb), 0.1)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 animate-ping" style={{ backgroundColor: 'var(--theme-accent)' }}></div>
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--theme-accent)' }}>
                        Node::{category.id}
                      </span>
                    </div>
                    <span className="text-[8px] font-mono" style={{ color: 'rgba(var(--theme-accent-rgb), 0.4)' }}>ENCRYPTED</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-mono font-bold text-white group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-purple-100/60 text-xs md:text-sm font-light leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 mt-auto pt-4">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center gap-3 p-2 bg-white/5 border border-white/5 md:hover:border-white/20 transition-all group/item"
                      >
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center grayscale group-hover/item:grayscale-0 transition-all">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain opacity-50 group-hover/item:opacity-100" />
                        </div>
                        <span className="text-[9px] md:text-xs text-purple-200/80 font-mono group-hover/item:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Internal Decorative Data Lines */}
                <div className="absolute bottom-2 right-4 flex gap-1 opacity-10">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--theme-accent)' }}></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standardized Scroll Down Button - Compacted */}
        <div className="mt-4 pb-6 w-full flex justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer flex flex-col items-center gap-2"
          >
            <div className="flex flex-col items-center">
              <span className="text-[7px] md:text-[9px] font-mono tracking-[0.4em] uppercase font-bold" style={{ color: 'rgba(var(--theme-accent-rgb), 0.4)' }}>
                [ INITIALIZATION ]
              </span>
              <span className="text-[10px] md:text-sm font-mono font-bold group-hover:bg-white group-hover:text-black px-4 py-1 transition-all uppercase tracking-tighter border" style={{ borderColor: 'rgba(var(--theme-accent-rgb), 0.2)', color: 'var(--theme-accent)' }}>
                INITIALIZE_SERVICE_RECORD
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

export default Skills;
