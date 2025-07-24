import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" min-h-[100vh] w-[100vw] bg-[#edff66]  overflow-hidden "
    >
      <div className="h-full w-full overflow-hidden">
        <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10  mt-20 md:mt-10 lg:mt-20 playfair-display font-bold text-black uppercase">
          PROJECTS
        </h1>
        <div
          className="flex flex-col lg:flex-row items-center justify-center md:justify
          between mt-10 lg:mt-20 gap-5 md:gap-10 w-full"
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between  md:items-center gap-5 mx-20 w-full h-full">
            <div>
              <div className="flex justify-center items-center gap-5">
                <p className="text-[#6b645c] text-lg md:text-xl tracking-wide md:text-center uppercase">
                  01
                </p>
                <p className="text-[#6b645c] text-lg md:text-xl tracking-wide md:text-center uppercase">
                  FASHNIOR(Fashion E-commerce)
                </p>
              </div>
              <p className="text-black text-xl md:text-2xl tracking-normal  md:text-start md:ml-10 w-[300px] md:w-[500px] text-justify">
                Here are some of the projects I have worked on, showcasing my
                skills in full-stack development, UI/UX design, and problem
                solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
