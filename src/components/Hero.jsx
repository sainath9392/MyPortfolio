import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-blue-100">
      <div className=" flex flex-col md:flex-row h-full items-center  gap-5 ">
        <h1 className="text-slate-900 bg-white  p-8  md:p-10 rounded-xl font-bold absolute top-50 md:top-48 tracking-tighter md:tracking-tight left-5 md:left-30 text-6xl md:text-9xl uppercase">
          Sai <br />
          <span className="pl-12 z-30 text-blue-300">nath</span>
        </h1>
        <div className=" text-white  absolute md:text-2xl top-42 left-8 md:left-32 md:top-38">
          <span className='text-slate-700'>Full-Stack</span> <span className='text-blue-400'>Developer..</span>
        </div>
      </div>
      <div className="absolute bottom-0  w-full h-1/3 bg-gradient-to-t from-blue-300 to-transparent"></div>
      <div className="absolute bottom-10 right-4 h-64 w-64 bg-blue-200 rounded-xl z-20"></div>
    </div>
  );
}

export default Hero