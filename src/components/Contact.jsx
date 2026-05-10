import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [messege, setMessage] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b05a3780-eadc-4f8f-bed0-2878c42b4a58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("PROTOCOL_SUCCESS: TRANSMISSION_RECEIVED");
      event.target.reset();
    } else {
      setMessage("PROTOCOL_ERROR: UPLINK_FAILURE");
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full relative overflow-hidden bg-transparent font-mono">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/back.mp4" type="video/mp4" />
      </video>

      {/* Grid Overlay for Tactical Feel */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_50%),linear-gradient(90deg,rgba(255,255,255,0.05),rgba(0,0,0,0),rgba(255,255,255,0.05))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-2">
        
        {/* Header Message - Compacted */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-[7px] tracking-[0.5em] uppercase animate-pulse block mb-1" style={{ color: 'var(--theme-accent)' }}>
            [ ESTABLISHING_COMM_LINK ]
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-white tracking-tighter uppercase">
            OPEN_<span style={{ color: 'var(--theme-accent)' }}>CHANNELS</span>
          </h2>
        </motion.div>

        {/* Tactical Contact Form Frame - Compacted */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg group scale-[0.85] md:scale-90 lg:scale-100"
        >
          {/* HUD Corner Accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'var(--theme-accent)' }}></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'var(--theme-accent)' }}></div>
          
          <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-5 md:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            {/* Scanline Animation inside form */}
            <div 
              className="absolute inset-0 pointer-events-none bg-[length:100%_8px] opacity-20"
              style={{ backgroundImage: 'linear-gradient(rgba(var(--theme-accent-rgb), 0.03) 50%, transparent 50%)' }}
            ></div>

            <form onSubmit={onSubmit} className="relative z-10 space-y-3">
              <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                <span className="text-[6px] text-gray-500 tracking-widest uppercase">Encryption: AES-256</span>
                <span className="text-[6px] tracking-widest uppercase" style={{ color: 'rgba(var(--theme-accent-rgb), 0.5)' }}>Status: Secure_Uplink</span>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <label className="text-[6px] uppercase tracking-widest block mb-0.5 ml-1" style={{ color: 'rgba(var(--theme-accent-rgb), 0.7)' }}>Identity_ID</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="ENTER_NAME"
                    className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white text-[10px] focus:outline-none transition-all"
                    style={{ '--focus-border': 'var(--theme-accent)', '--focus-bg': 'rgba(var(--theme-accent-rgb), 0.05)' }}
                  />
                </div>

                <div className="relative">
                  <label className="text-[6px] uppercase tracking-widest block mb-0.5 ml-1" style={{ color: 'rgba(var(--theme-accent-rgb), 0.7)' }}>Node_Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ENTER_EMAIL"
                    className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white text-[10px] focus:outline-none transition-all"
                    style={{ '--focus-border': 'var(--theme-accent)', '--focus-bg': 'rgba(var(--theme-accent-rgb), 0.05)' }}
                  />
                </div>

                <div className="relative">
                  <label className="text-[6px] uppercase tracking-widest block mb-0.5 ml-1" style={{ color: 'rgba(var(--theme-accent-rgb), 0.7)' }}>Transmission_Data</label>
                  <textarea
                    name="message"
                    rows="2"
                    required
                    placeholder="ENTER_MESSAGE_PACKET"
                    className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white text-[10px] focus:outline-none transition-all resize-none"
                    style={{ '--focus-border': 'var(--theme-accent)', '--focus-bg': 'rgba(var(--theme-accent-rgb), 0.05)' }}
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'var(--theme-accent)', color: "#000" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full border-2 py-2 font-bold uppercase text-[9px] tracking-[0.2em] transition-all"
                style={{ borderColor: 'var(--theme-accent)', color: 'var(--theme-accent)' }}
              >
                EXECUTE_TRANSMISSION
              </motion.button>

              {messege && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[7px] pt-1 animate-pulse"
                  style={{ color: 'var(--theme-accent)' }}
                >
                  {messege}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Standardized Tactical Social Bar - Compacted */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mt-4 border-t border-white/10 pt-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { label: "MAIL_CHANNEL", url: "mailto:sainathduvvuri03@gmail.com", id: "01" },
              { label: "RESUME_NODE", url: "https://drive.google.com/file/d/1zoE7vafskvA1iqPpm66c7GLKzFFFibM2/view?usp=sharing", id: "02" },
              { label: "LINKED_SYSTEM", url: "https://www.linkedin.com/in/sainath-duvvuri-46ab61292", id: "03" },
              { label: "GIT_ARCHIVE", url: "https://github.com/sainath9392", id: "04" }
            ].map((link) => (
              <motion.a
                key={link.id}
                whileHover={{ y: -2 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-black/40 border border-white/5 p-2 transition-all"
                style={{ '--hover-border': 'rgba(var(--theme-accent-rgb), 0.5)' }}
              >
                <span className="text-[5px] text-gray-500 mb-0.5">ACCESS_POINT_{link.id}</span>
                <span className="text-[8px] text-white group-hover:text-cyan-400 font-bold tracking-widest transition-colors uppercase" style={{ '--hover-text': 'var(--theme-accent)' }}>
                  {link.label}
                </span>
                <div className="w-0 h-[1px] transition-all duration-500 mt-1" style={{ backgroundColor: 'var(--theme-accent)', '--group-hover-width': '100%' }}></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Technical Stamp - Compacted */}
        <div className="mt-4 text-[6px] text-gray-600 tracking-[0.8em] uppercase">
          © 2024 SAINATH_DUVVURI // CORE_SYSTEM_AUTHENTICATED
        </div>
      </div>
    </div>
  );
};

export default Contact;

