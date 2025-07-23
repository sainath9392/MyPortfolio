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
            <h1 className="special-font hero-heading text-white md:text-blue-100  z-40 p-8  md:p-10 rounded-xl font-bold absolute top-50 md:top-48 tracking-wider md:tracking-wide left-5 md:left-10 text-8xl md:text-9xl uppercase">
              <b>Sainath</b>
            </h1>
            <img
              src="/img/strawhat.png"
              alt="strawhat"
              className="w-20 md:w-40 rotate-22 absolute top-52 md:top-48 left-50 md:left-100 z-50 hover:rotate-z-360 transition-all duration-300 hover:scale-150"
            />
          </div>
          <div className="absolute left-10 bottom-40 md:bottom-35 md:left-22 ">
            <HelloWorldAnimation className="bg-blue-100" />
          </div>
        </div>
        <div className="flex gap-2 absolute top-80 right-10">
          <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-gray-400 bg-blue-200 hover:rotate-z-320 transition-all duration-300 rotate-z-30  flex flex-col items-center justify-center">
            <p className="text-center  uppercase text-xl md:text-2xl inline-block  font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              CREATIVE
            </p>
          </div>
          <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-slate-900/10 bg-blue-50 z-10 hover:rotate-z-10 transition-all duration-300 rotate-z-350 flex flex-col items-center justify-center">
            <p className="text-center  uppercase text-xl md:text-2xl inline-block  font-bold bg-gradient-to-r from-indigo-500 to-blue-800 bg-clip-text text-transparent">
              secure
            </p>
          </div>
          <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-gray-400 bg-transparent rotate-z-12 hover:rotate-z-348 transition-all duration-300 flex flex-col items-center justify-center">
            <p className="text-center  uppercase text-xl md:text-2xl inline-block  font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
              scalable
            </p>
          </div>
        </div>
        <div className=" bg-white p-2 px-4 rounded-4xl absolute md:text-2xl top-42 left-12 md:left-22 md:top-40">
          <span className="text-slate-700">Full-Stack</span>{" "}
          <span className="text-blue-500 hover:text-red-500">Developer..</span>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Hero;
