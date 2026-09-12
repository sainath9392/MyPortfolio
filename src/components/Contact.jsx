import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, FileText, CheckCircle2, AlertCircle, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup triggers if needed
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "b05a3780-eadc-4f8f-bed0-2878c42b4a58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage("TRANSMISSION_SUCCESS: Message delivered successfully.");
        event.target.reset();
      } else {
        setMessage("TRANSMISSION_ERROR: Uplink failed. Please try again.");
      }
    } catch {
      setMessage("TRANSMISSION_ERROR: Network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="contact" 
      ref={sectionRef} 
      className="w-full min-h-screen md:h-screen md:max-h-screen relative overflow-x-hidden md:overflow-hidden bg-transparent font-sans flex flex-col justify-between px-4 md:px-10 pt-16 sm:pt-20 lg:pt-20 pb-4 select-none"
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
        
        {/* Header */}
        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-left"
        >
          <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase block mb-1 text-zinc-500">
            [ CONTACT // COMM_CHANNEL ]
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-zinc-950 tracking-tight flex items-center gap-2 justify-start uppercase">
            <span style={{ color: "var(--theme-accent)" }}>{">"}</span>
            GET_IN_<span style={{ color: "var(--theme-accent)" }}>TOUCH</span>
            <span 
              className="w-1.5 h-5 md:w-2 md:h-8 animate-pulse ml-1" 
              style={{ backgroundColor: "var(--theme-accent)", boxShadow: "0 0 10px var(--theme-glow)" }}
            ></span>
          </h2>
        </motion.div>

        {/* 2-Column Split: Uplink Info & Socials (Left 5 cols) + Form Card (Right 7 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch w-full">
          
          {/* Left Column: Direct Uplink Info + Quick Social Links (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-3">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }}></div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                  Transmissions Online
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Open for high-impact Full-Stack engineering roles, backend microservice architecture, and AI-driven web systems.
              </p>
              
              <div className="flex flex-col gap-1.5 pt-2 border-t border-zinc-100 text-xs font-mono text-zinc-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" style={{ color: "var(--theme-accent)" }} />
                  <span>Hyderabad, India (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Remote / Hybrid Available</span>
                </div>
              </div>
            </div>

            {/* Quick Link Buttons (2x2) */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Email Me", url: "mailto:sainathduvvuri03@gmail.com", icon: <MdEmail className="w-4 h-4" /> },
                { label: "Resume PDF", url: "https://drive.google.com/file/d/1zoE7vafskvA1iqPpm66c7GLKzFFFibM2/view?usp=sharing", icon: <FileText className="w-4 h-4" /> },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/sainath-duvvuri-46ab61292", icon: <FaLinkedin className="w-4 h-4" /> },
                { label: "GitHub", url: "https://github.com/sainath9392", icon: <FaGithub className="w-4 h-4" /> }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50 shadow-sm transition-all text-xs font-mono text-zinc-800 hover:text-zinc-950"
                >
                  <span style={{ color: "var(--theme-accent)" }}>{item.icon}</span>
                  <span className="font-semibold truncate">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Card (7 cols) */}
          <div 
            ref={formCardRef} 
            className="md:col-span-7 relative group rounded-2xl bg-white border border-zinc-200/80 p-4 sm:p-5 shadow-lg overflow-hidden flex flex-col justify-between"
          >
            {/* Top Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--theme-accent), transparent)" }}
            ></div>

            <form onSubmit={onSubmit} className="relative z-10 space-y-2.5">
              <div className="flex justify-between items-center border-b border-zinc-100 pb-1.5 text-[11px] font-mono text-zinc-500">
                <span className="uppercase">Direct Uplink</span>
                <span style={{ color: "var(--theme-accent)" }}>● ACTIVE_RECEIVER</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider block mb-1 text-zinc-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 text-sm sm:text-xs focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider block mb-1 text-zinc-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 text-sm sm:text-xs focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider block mb-1 text-zinc-700">Message</label>
                <textarea
                  name="message"
                  rows="2"
                  required
                  placeholder="Write your transmission..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 text-sm sm:text-xs focus:outline-none focus:border-red-500 focus:bg-white transition-all resize-none placeholder:text-zinc-400"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full py-2.5 rounded-xl font-mono font-bold uppercase text-xs tracking-wider text-white shadow-md shadow-red-500/20 bg-red-600 hover:bg-red-700 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                <Send className="w-3 h-3" />
              </motion.button>

              {message && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-1.5 text-[11px] font-mono pt-1"
                  style={{ color: message.includes("SUCCESS") ? "#059669" : "var(--theme-accent)" }}
                >
                  {message.includes("SUCCESS") ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  <span>{message}</span>
                </motion.div>
              )}
            </form>
          </div>

        </div>

      </div>

      {/* Footer Technical Stamp */}
      <div className="relative z-10 w-full flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-widest uppercase border-t border-zinc-200 pt-2 max-w-6xl mx-auto">
        <span>© {new Date().getFullYear()} SAINATH DUVVURI</span>
        <span className="hidden sm:inline font-semibold">FULL STACK & AI SPECIALIST</span>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-zinc-950 text-zinc-700 transition-colors cursor-pointer"
        >
          [ BACK_TO_TOP ↑ ]
        </button>
      </div>
    </div>
  );
};

export default Contact;
