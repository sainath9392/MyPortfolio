import React, { useState } from "react";
import HelloWorldAnimation from "./HelloWorldAnimation";
import NET from "vanta/dist/vanta.net.min";
import { useEffect, useRef } from "react";
const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6bff,
          backgroundColor: 0x0,
          points: 9.0,
          maxDistance: 21.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="relative h-screen w-screen overflow-hidden bg ">
      <div className=" flex flex-col md:flex-row h-full items-center  gap-5 ">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <h1 className="special-font hero-heading text-white md:text-blue-100  z-40 p-8  md:p-10 rounded-xl font-bold absolute top-50 md:top-48 tracking-wider md:tracking-wide left-5 md:left-20 text-8xl md:text-9xl uppercase">
              <b>Sainath</b>
            </h1>
            <img
              src="/img/strawhat.png"
              alt="strawhat"
              className="w-20 md:w-40 rotate-22 absolute top-52 md:top-48 left-50 md:left-110 z-50"
            />
          </div>
          <div className="absolute bottom-35 left-32 ">
            <HelloWorldAnimation className="bg-blue-100" />
          </div>
        </div>
        <div className=" bg-white p-2 px-4 rounded-4xl absolute md:text-2xl top-42 left-8 md:left-32 md:top-40">
          <span className="text-slate-700">Full-Stack</span>{" "}
          <span className="text-blue-500">Developer..</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
