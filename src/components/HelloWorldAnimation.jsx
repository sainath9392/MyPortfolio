import React, { useEffect, useRef } from "react";

const HelloWorldAnimation = ({ className = ""}) => {
  const lettersRef = useRef([]);
  const worldRef = useRef(null);

  useEffect(() => {
    let delay = 0.5; // Initial delay for the first letter
    let duration = 0.8;

    lettersRef.current.forEach((letter, i) => {
      letter.style.transitionDelay = `${delay}s`;
      letter.style.transitionDuration = `${duration}s`;
      delay -= 0.5;
      duration += 0.2;
    });

    // Trigger animation on load
    lettersRef.current.forEach((letter) => {
      letter.classList.remove(
        "translate-x-[-720px]",
        "rotate-[-360deg]",
        "opacity-50"
      );
    });
  }, []);

  const checkLetter = (e) => {
    const letter = e.target;
    if (!letter.classList.contains("first")) return;

    if (worldRef.current) {
      worldRef.current.classList.remove(
        "translate-y-[280px]",
        "scale-y-[2]",
        "opacity-50"
      );
    }
  };

  const letters = ["H", "E", "L", "L", "O"];

  return (
    <div
      className={`relative aspect-[4/3] rounded-xl p-4 pb-8 text-blue-500 font-bold  ${className}`}
    >
      <div className="text-center text-3xl md:text-5xl tracking-wider uppercase mt-6">
        {letters.map((char, idx) => (
          <span
            key={idx}
            ref={(el) => (lettersRef.current[idx] = el)}
            className={`inline-block transform inline-block  font-bold bg-gradient-to-r from-indigo-500 to-blue-800 bg-clip-text text-transparent transition ease-out
              translate-x-[-720px] rotate-[-360deg] bitcount-prop-single opacity-50 
              ${idx === 0 ? "first" : ""}`}
            onTransitionEnd={checkLetter}
          >
            {char}
          </span>
        ))}
      </div>

      <div
        ref={worldRef}
        className="text-center bitcount-prop-single mt-[5px] text-3xl md:text-5xl inline-block  font-bold bg-gradient-to-r from-indigo-500 to-blue-800 bg-clip-text text-transparent uppercase font-bold tracking-wider transform transition ease-out duration-1000 translate-y-[280px] scale-y-[2] opacity-50 "
      >
        WORLD
      </div>
    </div>
  );
};

export default HelloWorldAnimation;
