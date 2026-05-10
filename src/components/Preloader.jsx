import React from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Drop Ripple Waves */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 2.5], 
            opacity: [0, 0.5, 0],
          }}
          transition={{ 
            duration: 1.5, 
            delay: i * 0.4,
            ease: [0.16, 1, 0.3, 1] 
          }}
          style={{
            borderWidth: '1px',
            borderColor: 'white',
            borderRadius: '60%',
            willChange: 'transform, opacity'
          }}
          className="absolute w-64 h-64 border-white pointer-events-none"
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          rotate: 720,
          opacity: 1,
        }}
        onAnimationComplete={() => {
          // Trigger the reveal exactly when the spin ends
          setTimeout(onComplete, 300);
        }}
        transition={{ 
          duration: 2.2, 
          ease: "circOut"
        }}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        <img 
          src="/img/image_copy-removebg-preview.png" 
          alt="Clover Preloader" 
          className="w-[55%] h-[55%] object-contain pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
