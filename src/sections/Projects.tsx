"use client";
import Image from "next/image";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import chatty from "../assets/project-images/chatty.png";
import codecatalyst from "../assets/project-images/codecatalyst.png";
import weather from "../assets/project-images/weather.png";
import dashboard from "../assets/project-images/dashboard.png";
import bolt from "../assets/project-images/bolt.png";

import zephyr from "../assets/project-images/zephyr.png";
import { motion, MotionConfig } from "framer-motion";

const portfolioProjects = [
  // {
  // to add new project here
  //   company: "React-js , Express-js , MongoDB",
  //   title: "CampusXchange",
  //   results: [
  //     { title: "Real-time messaging feature" },
  //     { title: "Socket-io Usage" },
  //     { title: "Deployed on Render" },
  //   ],
  // 
  //   link: "https://chatty-7foh.onrender.com/",
  //   git: "https://github.com/akshatJ15/Chatty",
  //   image: chatty,
  // },
  {
    company: "Next-js , Tailwind-css , Typescript",
    title: "Code-Catalyst",
    results: [
      { title: "Can compile upto 10 languages" },
      { title: "Uses Piston Api" },
      { title: "Deployed on Vercel" },
    ],
    link: "https://code-catalyst-seven.vercel.app/",
    git: "https://github.com/vivek180905/code-catalyst",
    image: codecatalyst,
  },
   {
    company: "React-js, Express-js, MongoDB",
    title: "Weather_Website",
    results: [
      { title: "Uses api calling" },
      { title: "Real-time Weather feature" },
      { title: "Deployed on Vercel" },
    ],
    link: "https://weather-website-pi-gray.vercel.app/",
    git: "https://github.com/vivek180905/weather_website",
    image: weather,
  },
  {
    company: "Next-js , Tailwind-css , Convex",
    title: "Web Generator",
    results: [
      { title: "Deployed on Vercel" },
      { title: "Enter a prompt and get a response" },
      { title: "Deploy and export the projects" },
    ],
    link: "https://web-generator-inky.vercel.app/",
    git: "https://github.com/vivek180905/web_generator",
    image: zephyr,
  },
 
  // {
  //   company: "React-js, Express-js, MongoDB",
  //   title: "Bolt",
  //   results: [
  //     { title: "Uses Socket-io" },
  //     { title: "Real-time connection feature" },
  //     { title: "Deployed on Render" },
  //   ],
  //   link: "https://bolt-frontend.onrender.com/",
  //   git: "https://github.com/akshatJ15/Bolt/",
  //   image: bolt,
  // },
];

export const ProjectsSection = () => {
  return (
    <motion.section className="pb-16">
      <div className="container">
        <motion.div
          className="flex justify-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </motion.div>
        <motion.h2
          className="font-serif text-3xl text-center mt-6 md:text-5xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-white/60 mt-4 md:text-lg mx-w-md mx-auto lg:text-xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          See how I transformed concepts into engaging digital experiences.
        </motion.p>

        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl 
                after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-2 border-white/20 sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>

                <motion.div
                  className="lg:grid lg:grid-cols-2 gap-16 "
                  whileHover={{ gap: "100px", paddingTop: "10px" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xlmd:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => {
                        return (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm text-white/50 md:text-base"
                          >
                            <CheckIcon className="size-5" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-col md:flex-row md:gap-4">
                      <a href={project.link} target="_blank">
                        <button
                          className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 
                        transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white
                        hover:-translate-y-1 hover:scale-110
                        duration-300"
                        >
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <a href={project.git} target="_blank">
                        <button
                          className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6
                        transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white
                        hover:-translate-y-1 hover:scale-110
                        duration-300"
                        >
                          <span>Github</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="relative ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
