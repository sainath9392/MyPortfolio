import CircularCursor from "./CircularCursor";

const Skills = () => {
 
  return (
    <div
      id="skills"
      className="min-h-screen w-[100vw] bg-[#080807] pb-20  overflow-hidden "
    >
      <CircularCursor />
      <div className="h-full w-full overflow-hidden">
        <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10 mt-20 md:mt-10 lg:mt-20 playfair-display font-bold text-[#d1d1c7] uppercase">
          SKILLS
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between mt-10 lg:mt-20 gap-5 md:gap-10 w-full">
          <div className="flex flex-row justify-center md:justify-between items-start md:items-center gap-5 lg:items-start mx-20 w-full">
            <p className="text-[#d1d1c7] text-lg md:text-4xl tracking-wide md:text-center lg:text-start capitalize">
              (01)
            </p>
            <div>
              <h1 className="text-xl md:text-4xl text-[#d1d1c7] font-extrabold">
                Full-Stack Development
              </h1>
              <p className="text-[#6b645c] text-sm md:text-2xl tracking-normal md:text-start mt-10 w-[280px] md:w-[500px] text-justify">
                From frontend interactions to backend APIs, I build complete web
                solutions. I work with modern stacks to deliver apps that are
                scalable, maintainable, and ready for real-world users.
              </p>
              <div>
                <ol className=" mt-5 text-[#030303] text-sm md:text-2xl tracking-normal md:text-start">
                  <li className="border-b-2 pb-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">01</span>{" "}
                    React, Node.js, Express.js
                  </li>
                  <li className="border-b-2 pb-3 pt-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">02</span> REST
                    APIs, Firebase, Docker
                  </li>
                  <li className="border-b-2 pb-3 pt-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">03</span> Git,
                    GitHub, Postman
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between mt-10 lg:mt-20 gap-5 md:gap-10 w-full">
          <div className="flex flex-row justify-center md:justify-between items-start md:items-center gap-5 lg:items-start mx-20 w-full">
            <p className="text-[#d1d1c7] text-lg md:text-4xl tracking-wide md:text-center lg:text-start capitalize">
              (02)
            </p>
            <div>
              <h1 className="text-xl md:text-4xl text-[#d1d1c7] font-extrabold">
                UI/UX & Frontend
              </h1>
              <p className="text-[#6b645c] text-sm md:text-2xl tracking-normal md:text-start mt-10 w-[280px] md:w-[500px] text-justify">
                Design is more than looks — it’s about clarity and connection. I
                design and develop clean, responsive interfaces that feel
                intuitive across devices. My focus is on clarity, accessibility,
                and seamless user experiences.
              </p>
              <div>
                <ol className=" mt-5 text-[#030303] text-sm md:text-2xl tracking-normal md:text-start">
                  <li className="border-b-2 pb-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">01</span>{" "}
                    TailwindCSS, GSAP
                  </li>
                  <li className="border-b-2 pb-3 pt-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">02</span>{" "}
                    Figma to Code
                  </li>
                  <li className="border-b-2 pb-3 pt-3 text-[#d1d1c7]">
                    <span className="text-[18px] text-[#6b645c] ">03</span>{" "}
                    HTML, CSS, JavaScript
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
