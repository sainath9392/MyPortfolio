import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" h-[100vh] w-[100vw] bg-[#080807]  overflow-hidden "
    >
      <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10 mt-20 md:mt-10 lg:mt-30 playfair-display font-bold text-[#d1d1c7]  uppercase">
        WHAT I DO
      </h1>
      <div></div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 lg:ms-50 gap-10  w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:items-start ">
          <p className="text-[#6b645c] text-lg md:text-2xl tracking-wide md:text-center uppercase lg:text-start">
            (services)
          </p>
          <p className="text-[#d1d1c7] text-xl md:text-2xl tracking-normal  md:text-start md:ml-10 w-[300px] md:w-[500px] text-justify">
            I specialize in building full-stack web applications that are fast,
            reliable, and user-friendly. With a solid foundation in both
            frontend and backend technologies, I help bring ideas to life
            whether it's for a business, a startup, or a product team.
          </p>
          <a href="">MY RESUME</a>
        </div>
        <img
          src="/img/download.png"
          className="w-[150px] md:w-[150px] lg:w-[200px] -mt-10 md:mt-0"
          alt="poster"
        />
      </div>
    </div>
  );
};

export default About;
