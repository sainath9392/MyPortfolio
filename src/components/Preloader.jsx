import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  // Stages:
  // "initial"     -> Full-screen solid red background with white SA logo in center
  // "transparent" -> White logo text fades to transparent, revealing the hero section through the cutout
  // "zoom"        -> Logo zooms into the camera, opening up to reveal the full hero section
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    // 1. Initial display of solid red screen and white logo (0 to 0.9s)
    const t1 = setTimeout(() => {
      setStage("transparent");
    }, 900);

    // 2. Camera zooms through the transparent logo into the hero section (starts at 1.9s)
    const t2 = setTimeout(() => {
      setStage("zoom");
    }, 1900);

    // 3. Animation finished, unmount preloader (at 3.2s)
    const t3 = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-transparent select-none">
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="sa-logo-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000">
            {/* White base = opaque red screen */}
            <rect x="0" y="0" width="1000" height="1000" fill="white" />
            
            {/* Black logo shape = cuts a transparent hole through the red overlay */}
            <motion.g
              initial={{ scale: 1 }}
              animate={
                stage === "zoom"
                  ? { scale: 50 }
                  : stage === "transparent"
                  ? { scale: 1.05 }
                  : { scale: 1 }
              }
              transition={{
                duration: stage === "zoom" ? 1.3 : 0.8,
                ease: stage === "zoom" ? [0.75, 0, 0.25, 1] : "easeInOut"
              }}
              style={{ transformOrigin: "500px 500px" }}
            >
              <image
                href="/img/sa-monogram.png"
                x="350"
                y="350"
                width="300"
                height="300"
                style={{ filter: "brightness(0)" }}
              />
            </motion.g>
          </mask>
        </defs>

        {/* Full-screen red overlay with the transparent cutout mask */}
        <motion.rect
          x="0"
          y="0"
          width="1000"
          height="1000"
          fill="#d40000"
          mask="url(#sa-logo-mask)"
          initial={{ opacity: 1 }}
          animate={{
            opacity: stage === "zoom" ? 0 : 1
          }}
          transition={{
            duration: stage === "zoom" ? 1.3 : 0.4,
            ease: "easeInOut"
          }}
        />

        {/* Front White Logo Layer: perfectly aligned, turns transparent during stage 'transparent' */}
        <motion.g
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: stage === "zoom" ? 50 : stage === "transparent" ? 1.05 : 1,
            opacity: stage === "initial" ? 1 : 0
          }}
          transition={{
            opacity: {
              duration: stage === "zoom" ? 0.3 : 0.8,
              ease: "easeInOut"
            },
            scale: {
              duration: stage === "zoom" ? 1.3 : 0.8,
              ease: stage === "zoom" ? [0.75, 0, 0.25, 1] : "easeInOut"
            }
          }}
          style={{ transformOrigin: "500px 500px" }}
        >
          <image
            href="/img/sa-monogram.png"
            x="350"
            y="350"
            width="300"
            height="300"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default Preloader;
