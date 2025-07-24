import React, { useState, useEffect, useRef } from "react";
import HelloWorldAnimation from "./HelloWorldAnimation";
import BIRDS from "vanta/dist/vanta.birds.min";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const effect = BIRDS({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000000,
      color1: 0x1ae,
      color2: 0xff92,
      birdSize: 1.3,
      wingSpan: 23.0,
      speedLimit: 2.0,
      separation: 80.0,
      alignment: 19.0,
      cohesion: 33.0,
      quantity: 2.0,
    });

    setVantaEffect(effect);
    return () => {
      effect.destroy();
    };
  }, []);

  return (
    <div id="home" ref={myRef} className="h-screen w-screen overflow-hidden">
      <div className="flex relative flex-col md:flex-row h-full items-center gap-5  w-screen overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Title and Strawhat */}
          <div className="relative w-full h-full flex items-center justify-center">
            <h1 className="special-font hero-heading text-white md:text-blue-100 z-40 p-8 md:p-10 rounded-xl font-bold absolute top-[130px] md:top-[180px] tracking-wider md:tracking-wide left-[20px] md:left-[40px] text-8xl md:text-9xl uppercase">
              <b>Sainath</b>
            </h1>
            <img
              src="/img/strawhat.png"
              alt="strawhat"
              draggable="false"
              className="w-20 md:w-40 rotate-[22deg] absolute top-[140px] md:top-[180px] left-[200px] md:left-[400px] z-50 transition-all duration-300 hover:scale-150 hover:rotate-[382deg]"
            />
          </div>

          {/* Hello World Animation */}
          <div className="absolute left-[40px] bottom-[120px] md:bottom-[140px] md:left-[88px]">
            <HelloWorldAnimation />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-2 absolute top-[260px] md:top-[400px] lg:top-[320px] right-[20px]">
          <h1 className="text-[15px] md:text-2xl text-blue-50 font-bold parisienne-regular capitalize tracking-wider mb-10 ml-5">
            I build applications that are
          </h1>
          <div className="flex gap-3">
            <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-gray-400 bg-blue-200 transition-all duration-300 hover:rotate-[320deg] hover:z-20 rotate-[30deg] flex flex-col items-center justify-center">
              <p className="text-center uppercase text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Creative
              </p>
            </div>
            <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-slate-900/10 bg-blue-50 z-10 transition-all duration-300 hover:scale-110 hover:rotate-[350deg] rotate-[340deg] flex flex-col items-center justify-center">
              <p className="text-center uppercase text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-800 bg-clip-text text-transparent">
                Secure
              </p>
            </div>
            <div className="h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-lg ring-2 ring-gray-400 bg-black transition-all duration-300 hover:rotate-[348deg] hover:z-20 rotate-[16deg] flex flex-col items-center justify-center">
              <p className="text-center uppercase text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
                Scalable
              </p>
            </div>
          </div>
        </div>

        {/* Role Badge */}
        <div className="bg-white p-2 px-4 rounded-4xl absolute md:text-2xl group top-[100px] left-[48px] transition-all duration-150 md:left-[88px] md:top-[160px]">
          <span className="text-slate-700">Full-Stack</span>{" "}
          <span className="text-blue-500 group-hover:text-red-500 group-hover:text-3xl transition-all duration-150 parisienne-regular font-bold">
            Developer..
          </span>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Hero;
