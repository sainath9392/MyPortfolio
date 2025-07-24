import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" h-[100vh] w-[100vw] bg-[#00ADB5]  overflow-hidden "
    >
      <div className="h-full w-full overflow-hidden">
        <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10  mt-20 md:mt-10 lg:mt-20 playfair-display font-bold text-[#EEEEEE] uppercase">
          PROJECTS
        </h1>
        <div
          className="flex flex-col lg:flex-row items-center justify-center md:justify
          between mt-10 lg:mt-20 gap-5 md:gap-10 w-full"
        >
          <div className="flex flex-row justify-center md:justify-between items-start md:items-center gap-5 lg:items-start mx-20 w-full">
            <p className="text-[#EEEEEE] text-lg md:text-4xl tracking-wide md:text-center lg:text-start capitalize">
              (01)
            </p>
            <div>
              <h1 className="text-xl md:text-4xl text-[#EEEEEE] font-extrabold">
                Project Title
              </h1>
              <p className="text-[#393E46] text-sm md:text-2xl tracking-normal md:text-start mt-10 w-[280px] md:w-[500px] text-justify">
                Brief description of the project, its purpose, and technologies
                used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
