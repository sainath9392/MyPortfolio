import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlowingBackgroundOrb = () => {
  const orbRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Fluid continuous zig-zag path linked to full-page scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth inertia scrub
      }
    });

    // Smooth sinusoidal / zig-zag trajectory across viewport as user scrolls
    tl.fromTo(
      orb,
      { x: "65vw", y: "10vh", scale: 1.0 }, // Hero Top Right
      { x: "30vw", y: "18vh", scale: 1.1, ease: "sine.inOut", duration: 0.6 } // Hero to About transition
    )
    .to(
      orb,
      { x: "10vw", y: "28vh", scale: 1.2, ease: "sine.inOut", duration: 1 } // About (Left)
    )
    .to(
      orb,
      { x: "72vw", y: "45vh", scale: 0.95, ease: "sine.inOut", duration: 1 } // Skills (Right)
    )
    .to(
      orb,
      { x: "10vw", y: "35vh", scale: 1.15, ease: "sine.inOut", duration: 1 } // Experience (Left)
    )
    .to(
      orb,
      { x: "68vw", y: "48vh", scale: 1.05, ease: "sine.inOut", duration: 1 } // Projects (Right)
    )
    .to(
      orb,
      { x: "38vw", y: "38vh", scale: 1.0, ease: "sine.inOut", duration: 1 } // Contact (Center)
    );

    // Subtle ambient breathing float oscillation when stationary
    const idleTween = gsap.to(orb, {
      scale: "+=0.08",
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
      idleTween.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={orbRef}
        className="absolute top-0 left-0 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full pointer-events-none filter blur-[80px] md:blur-[110px] transition-colors duration-700 opacity-20 md:opacity-25"
        style={{
          backgroundColor: "var(--theme-accent, #dc2626)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default FlowingBackgroundOrb;
