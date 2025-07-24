import CircularCursor from "./CircularCursor";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-[100vh] w-[100vw] bg-[#EEEEEE] pb-20  overflow-hidden relative"
    >
      <CircularCursor
        color1={`rgba(255, 216, 0, 1)`}
        color2={`rgba(255, 216, 0, 1)`}
      />
      <div className="h-full w-full  ">
        <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10 mt-20 md:mt-10 lg:mt-20 playfair-display font-bold text-[#00ADB5] uppercase">
          SKILLS
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center  mt-0 lg:mt-0 gap-5 md:gap-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center md:justify-center pt-8  gap-5 md:gap-10 w-full">
            <div className="flex flex-row justify-center md:justify-center items-start md:items-center gap-5 lg:items-start mx-20 w-full">
              <p className="text-[#00ADB5] text-lg md:text-4xl tracking-wide md:text-center lg:text-start capitalize">
                (01)
              </p>
              <div>
                <h1 className="text-xl md:text-4xl text-[#00ADB5] font-extrabold">
                  Full-Stack Development
                </h1>
                <p className="text-[#6b645c] text-sm md:text-2xl tracking-normal md:text-start pt-2 w-[250px] md:w-[500px] text-justify">
                  From frontend interactions to backend APIs, I build complete
                  web solutions. I work with modern stacks to deliver apps that
                  are scalable, maintainable, and ready for real-world users.
                </p>
                <div>
                  <ol className=" mt-5 text-[#030303] text-sm md:text-lg tracking-normal md:text-start">
                    <li className="border-b-2 pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">01</span>{" "}
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-react-24.png"
                        alt=""
                      />
                      React,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-nodejs-48.png"
                        alt=""
                      />{" "}
                      Node.js,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-express-js-50.png"
                        alt=""
                      />{" "}
                      Express.js,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-mongodb-24.png"
                        alt=""
                      />{" "}
                      MongoDB
                    </li>
                    <li className="border-b-2 pb-3 pt-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">02</span>
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-rest-api-50.png"
                        alt=""
                      />{" "}
                      REST APIs,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-firebase-48.png"
                        alt=""
                      />{" "}
                      Firebase,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-docker-48.png"
                        alt=""
                      />{" "}
                      Docker
                    </li>
                    <li className="border-b-2 pb-3 pt-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">03</span>
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-git-50.png"
                        alt=""
                      />{" "}
                      Git,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-github-30.png"
                        alt=""
                      />{" "}
                      GitHub,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-postman-api-64.png"
                        alt=""
                      />{" "}
                      Postman
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center md:justify-center pt-2 md:pt-5 -ml-5 md:ml-0 gap-5 md:gap-10 w-full">
            <div className="flex flex-row justify-center md:justify-center items-start md:items-center gap-5 lg:items-start mx-20 w-full">
              <p className="text-[#00ADB5] text-lg md:text-4xl tracking-wide md:text-center lg:text-start capitalize">
                (02)
              </p>
              <div>
                <h1 className="text-xl md:text-4xl text-[#00ADB5] font-extrabold">
                  UI/UX & Frontend
                </h1>
                <p className="text-[#6b645c] text-sm md:text-2xl tracking-normal md:text-start pt-2 w-[250px] md:w-[500px] text-justify">
                  Design is more than looks — it’s about clarity and connection.
                  I design and develop clean, responsive interfaces that feel
                  intuitive across devices. My focus is on clarity,
                  accessibility, and seamless user experiences.
                </p>
                <div>
                  <ol className=" mt-5 text-[#030303] text-sm md:text-lg tracking-normal md:text-start">
                    <li className="border-b-2 pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">01</span>
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-tailwindcss-48.png"
                        alt=""
                      />{" "}
                      TailwindCSS,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/greensock-icon-logo-512.png"
                        alt=""
                      />{" "}
                      GSAP
                    </li>
                    <li className="border-b-2 pb-3 pt-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">02</span>
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-figma-48.png"
                        alt=""
                      />{" "}
                      Figma to Code
                    </li>
                    <li className="border-b-2 pb-3 pt-3 text-[#000000]">
                      <span className="text-[18px] text-[#6b645c] ">03</span>
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-html-48.png"
                        alt=""
                      />{" "}
                      HTML,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-css-48.png"
                        alt=""
                      />{" "}
                      CSS,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-javascript-48.png"
                        alt=""
                      />{" "}
                      JavaScript
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <a
          href="#projects"
          aria-label="Scroll to about section"
          className="text-[#EEEEEE] hover:text-white bg-[#00acb5c0] hover:bg-[#327a7e] focus:ring-4 focus:ring-[#1a595b] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Skills;
