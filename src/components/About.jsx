import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative h-screen w-screen bg-[#171717]   overflow-y-hidden overflow-x-hidden"
    >
      <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:ml-10 mt-40 md:mt-10 playfair-display font-bold text-[#d1d1c7]  uppercase">
        WHAT I DO/
      </h1>
      <div></div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 md:ms-50  w-full">
        <div className="flex flex-col md:flex-row justify-between items-start m-5">
          <p className="text-[#d1d1c7] text-lg md:text-2xl tracking-wide text-center uppercase md:text-start">
            (services)
          </p>
          <p className="text-[#8c8c73] text-sm md:text-2xl -tracking-normal  md:text-start md:ml-10 w-[300px] md:w-[500px] text-justify">
            I specialize in building full-stack web applications that are fast,
            reliable, anduser-friendly. With a solid foundation in both frontend
            and backend technologies,I help bring ideas to life whether it's for
            abusiness, a startup, or a product team.
          </p>
        </div>
        <img
          src="/img/download.png"
          className="w-[200px] md:w-[200px] mt-20 md:mt-0"
          alt="poster"
        />
      </div>
    </div>
  );
};

export default About;
