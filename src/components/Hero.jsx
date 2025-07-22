import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-blue-300">
      <div className=" flex flex-col md:flex-row h-full items-center  gap-5">
        <h1 className="text-blue-100 font-bold absolute top-50 md:top-48 left-5 md:left-30 text-8xl md:text-9xl uppercase">
          Sai <br />
          nath
        </h1>
        <h1 className="text-blue-100  absolute md:text-2xl top-42 left-8 md:left-32 md:top-38">
          FullStack Developer
        </h1>
      </div>
      <video src="/videos/rename.webm" loop autoPlay className=' z-20' />
    </div>
  );
}

export default Hero