import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="h-[100vh] w-[100vw] overflow-hidden relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold playfair-display text-center pt-20">
          Contact Me
        </h1>
        <p className="text-white text-3xl text-center playfair-display mt-4 px-4 md:px-20">
          Feel free to reach out for collaborations, inquiries, or just to say
          hello!
        </p>
        <div className="flex items-center justify-center gap-3 absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center mt-6">
            <a
              href="mailto:sainathduvvuri03@gmail.com"
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display  text-white w-16 h-8 md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              Email
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href=""
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display  text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              My Resume
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href=""
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href=""
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
