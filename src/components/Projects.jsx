import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" min-h-[100vh] w-[100vw] bg-[#000000]  overflow-hidden "
    >
      <div className="h-full overflow-hidden">
        <h1 className="text-5xl md:text-9xl tracking-tight text-center md:text-start md:pl-10  mt-20 md:mt-10 lg:mt-20 playfair-display font-bold text-[#EEEEEE] uppercase">
          PROJECTS
        </h1>
        <div
          className="flex flex-col  items-center justify-center md:justify-start  lg:mt-10 gap-5 md:gap-10 w-full "
        >
          <div className="w-full group">
            <div className=" flex scale-65 md:scale-80 rounded-2xl bg-[#ffffff] p-5 flex-row justify-center items-start gap-5 lg:items-start mx-10 w-[320px] md:w-[350px] lg:w-[420px]">
              <div className="">
                <h1 className="text-sm md:text-2xl text-black font-extrabold">
                  Fashnior (Fashion E-commerce)
                </h1>
                <p className="text-slate-700 text-sm md:text-lg tracking-tight md:text-start pt-2 w-[200px] md:w-[350px] text-justify">
                  Fashnior is a modern and responsive fashion e-commerce
                  platform designed to deliver a smooth and stylish online
                  shopping experience. It supports role-based access, allowing
                  both regular users (customers) and admins to interact with the
                  platform according to their privileges.
                </p>
                <a
                  className="hidden lg:block"
                  href="https://fashnior.vercel.app/"
                >
                  <img
                    className="hidden lg:block group-hover:scale-200 z-20 scale-0 absolute left-[1000px] top-30 rounded-lg transition-all duration-500"
                    src="/img/fashnior.png"
                    alt="fashnior"
                  />
                </a>

                <p className="hidden lg:block text-2xl md:text-9xl playfair-display absolute z-10 left-[1200px] top-35 text-white font-bold">
                  01
                </p>
                <div>
                  <ol className="mt-5 text-[#030303] text-sm md:text-sm tracking-normal md:text-start">
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Technologies:
                      </span>{" "}
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
                      Express.js ,{" "}
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-mongodb-24.png"
                        alt=""
                      />{" "}
                      MongoDB,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-tailwindcss-48.png"
                        alt=""
                      />{" "}
                      Tailwind CSS ,{" "}
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Features:
                      </span>{" "}
                      Role-based access, Product management, User
                      authentication, Shopping cart, Order management
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        GitHub:
                      </span>{" "}
                      <a
                        href="https://github.com/sainath9392/fashnior-ecommerce-app"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Live Demo:
                      </span>{" "}
                      <a
                        href="https://fashnior.vercel.app/"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group">
            <div className=" flex scale-65 md:scale-80 rounded-2xl bg-[#ffffff] p-5 flex-row justify-center items-start gap-5 lg:items-start mx-10 w-[320px] md:w-[350px] lg:w-[420px]">
              <div className="">
                <h1 className="text-sm md:text-2xl text-black font-extrabold">
                  Task-Manager (Productivity Web App)
                </h1>
                <p className="text-slate-700 text-sm md:text-lg tracking-tight md:text-start pt-2 w-[200px] md:w-[350px] text-justify">
                  TaskManager is a user-centric productivity web application
                  that allows individuals and teams to efficiently manage their
                  tasks, deadlines, and progress. It supports user registration,
                  secure login, role-based access (Admin/User), and CRUD
                  functionality for tasks with real-time updates and visual
                  progress tracking.
                </p>
                <a
                  className="hidden lg:block"
                  href="https://task-manager-chi-ochre.vercel.app/"
                >
                  <img
                    className="hidden lg:block group-hover:scale-200 z-20 scale-0 absolute left-[1000px] top-30 rounded-lg transition-all duration-500"
                    src="/img/taskmanager.png"
                    alt="taskmanager"
                  />
                </a>

                <p className="hidden lg:block text-2xl md:text-9xl playfair-display absolute z-10 left-[1200px] top-35 text-white font-bold">
                  02
                </p>
                <div>
                  <ol className="mt-5 text-[#030303] text-sm md:text-sm tracking-normal md:text-start">
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Technologies:
                      </span>{" "}
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
                      Express.js ,{" "}
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-mongodb-24.png"
                        alt=""
                      />{" "}
                      MongoDB,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-tailwindcss-48.png"
                        alt=""
                      />{" "}
                      Tailwind CSS ,{" "}
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Features:
                      </span>{" "}
                      role-based access (Admin/User), JWT auth, and password
                      encryption,CRUD with priority, status tracking, due dates,
                      analytics.
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        GitHub:
                      </span>{" "}
                      <a
                        href="https://github.com/sainath9392/Task-Manager"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Live Demo:
                      </span>{" "}
                      <a
                        href="https://task-manager-chi-ochre.vercel.app/"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group">
            <div className=" flex scale-65 md:scale-80 rounded-2xl bg-[#ffffff] p-5 flex-row justify-center items-start gap-5 lg:items-start mx-10 w-[320px] md:w-[350px] lg:w-[420px]">
              <div className="">
                <h1 className="text-sm md:text-2xl text-black font-extrabold">
                  Zentry (Gaming Website Landing Page)
                </h1>
                <p className="text-slate-700 text-sm md:text-lg tracking-tight md:text-start pt-2 w-[200px] md:w-[350px] text-justify">
                  Zentry is a modern, visually captivating landing page designed
                  for a gaming platform. It showcases bold aesthetics, smooth
                  animations, and a responsive layout to highlight the brand’s
                  identity, attract gamers, and engage the community.
                </p>
                <a
                  className="hidden lg:block"
                  href="https://zentry-gaming-website-gilt.vercel.app/"
                >
                  <img
                    className="hidden lg:block group-hover:scale-200 z-20 scale-0 absolute left-[1000px] top-30 rounded-lg transition-all duration-500"
                    src="/img/zentry.png"
                    alt="fashnior"
                  />
                </a>

                <p className="hidden lg:block text-2xl md:text-9xl playfair-display absolute z-10 left-[1200px] top-35 text-white font-bold">
                  03
                </p>
                <div>
                  <ol className="mt-5 text-[#030303] text-sm md:text-sm tracking-normal md:text-start">
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Technologies:
                      </span>{" "}
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-react-24.png"
                        alt=""
                      />
                      React,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/greensock-icon-logo-512.png"
                        alt=""
                      />{" "}
                      GSAP,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/three-js-icon.png"
                        alt=""
                      />{" "}
                      Three js,
                      <img
                        className="hidden md:inline w-4 h-4 md:w-6 md:h-6 mx-2 hover:scale-140 transition-all duration-300"
                        src="/svg/icons8-tailwindcss-48.png"
                        alt=""
                      />{" "}
                      Tailwind CSS ,{" "}
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Features:
                      </span>{" "}
                      Animated hero section with smooth scroll, modern gaming
                      UI, and responsive design. Highlights game offerings,
                      community appeal, and brand identity with clean Tailwind
                      styling.
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        GitHub:
                      </span>{" "}
                      <a
                        href="https://github.com/sainath9392/Zentry-gaming-website"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li className=" pb-3 text-[#000000]">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Live Demo:
                      </span>{" "}
                      <a
                        href="https://zentry-gaming-website-gilt.vercel.app/"
                        new-tab="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
