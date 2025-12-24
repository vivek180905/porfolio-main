"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  MessageCircle,
  Blocks,
  Grid3x3,
  Zap,
  Earth,
  Code,
  Car,
  CloudSun,
  BotMessageSquare,
  RockingChair,
  SquareKanban,
  CodeXml,
  Backpack,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import codeCraftImg from "../../assets/project-images/codecraft.png";
import zephyrImg from "../../assets/project-images/zephyr.png";
import boltImg from "../../assets/project-images/bolt.png";
import chattyImg from "../../assets/all-projects/chatty.png";
import dashboardImg from "../../assets/project-images/dashboard.png";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import codeSyncImg from "../../assets/project-images/codeSync.png";
import dalleImg from "../../assets/project-images/dalle.png";
import StarIcon from "../../assets/icons/star.svg";
import metaverseImg from "../../assets/project-images/metaverse.png";
import orkaImg from "../../assets/project-images/orka.png";
import travelImg from "../../assets/project-images/travel.png";
import tictactoeImg from "../../assets/project-images/tictactoe.png";
import weatherImg from "../../assets/project-images/weather2.png";
import chairImg from "../../assets/project-images/chair.png"
import brainwaveImg from "../../assets/project-images/brainwave.png";
import calculatorImg from "../../assets/project-images/calculator.png";
import {Footer} from "../../sections/Footer";

export default function Page() {
  return (
    <div>
      <BackgroundBeamsWithCollision className="relative overflow-x-clip radient-to-b bg-gradient-to-t from-gray-900/20 to-gray-800/20 font-serif h-full">
        <section
          className="flex flex-col items-center justify-center mx-11 my-10 md:my-28"
          id="home"
        >
          <div className="flex flex-col items-center justify-center px-[15vw] md:px-[15vh] py-[2vh] relative w-fit">
            <motion.h1
              className={`text-primary-green text-6xl md:text-[8.7vw] bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent`}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              Play.
            </motion.h1>
            <motion.div
              className="absolute right-0 top-0 star w-[60px] h-[60px]"
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1, ease: "backInOut", delay: 0.3 }}
            >
              <StarIcon className="size-32 text-emerald-300 scale-[60%] md:scale-100" />
            </motion.div>
          </div>
          <motion.p
            className="text-base md:text-xl text-primary-green max-w-[700px] text-center mt-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          >
            A collection of tools and sites I&apos;ve created, designed to be
            helpful, fun, & sometimes just a little bit weird.
          </motion.p>
        </section>

        <div className="relative  px-10 mt-40 overflow-x-clip font-serif">
          <BentoGrid className="lg:max-w-4xl mx-auto pb-60 z-10">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                link={item.link}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
          {/* <div
            className="absolute h-[500px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"
          ></div> */}
        </div>
      </BackgroundBeamsWithCollision>
      <BackgroundBeams />
      <Footer />
    </div>
  );
}
const Skeleton = ({
  image,
  icon,
}: {
  image: StaticImageData;
  icon: React.ElementType;
}) => (
  <div className="flex-1 min-h-[6rem] rounded-xl radial-gradient bg-gradient-to-b from-gray-900/1- to-gray-800/10 flex justify-center items-center">
    {/* {React.createElement(icon, { className: "h-9 w-9 text-white" })} */}
    <Image src={image} alt="" className="object-contain w-full h-full " />
  </div>
);
const items = [
  // {
  //   title: "Chatty",
  //   description: "MongoDb , Express.js , React.js , TailwindCSS , Socket.io",
  //   header: <Skeleton image={chattyImg} icon={MessageCircle} />,
  //   icon: <MessageCircle className="h-4 w-4 text-neutral-500" />,
  //   link: "https://chatty-7foh.onrender.com/",
  // },
  {
    title: "Code-catalyst",
    description: "Next.js , TailwindCSS , Convex , TypeScript",
    header: <Skeleton image={codeCraftImg} icon={MessageCircle} />,
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/vivek180905/code-catalyst",
  },
  // {
  //   title: "Metaverse Madness",
  //   description: "React.js , TailwindCSS , Frame Motion",
  //   header: <Skeleton image={metaverseImg} icon={MessageCircle} />,
  //   icon: <Earth className="h-4 w-4 text-neutral-500" />,
  //   link: "https://metaverse-madness-rtde.vercel.app/",
  // },
  {
    title: "Web Generator",
    description: "Next.js , TailwindCSS , Convex , TypeScript",
    header: <Skeleton image={zephyrImg} icon={MessageCircle} />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/vivek180905/web_generator",
  },
  // {
  //   title: "Bolt",
  //   description: "MongoDb , Express.js , React.js , TailwindCSS , Socket.io",
  //   header: <Skeleton image={boltImg} icon={MessageCircle} />,
  //   icon: <Car className="h-4 w-4 text-neutral-500" />,
  //   link: "https://bolt-frontend.onrender.com/",
  // },
  // {
  //   title: "CodeSync",
  //   description: "Next.js , TailwindCSS , Convex ",
  //   header: <Skeleton image={codeSyncImg} icon={MessageCircle} />,
  //   icon: <Code className="h-4 w-4 text-neutral-500" />,
  //   link: "https://code-sync-one.vercel.app/",
  // },
  // {
  //   title: "Dalle",
  //   description: "React.js , TailwindCSS , Express.js ,  MongoDB",
  //   header: <Skeleton image={dalleImg} icon={MessageCircle} />,
  //   icon: <BotMessageSquare className="h-4 w-4 text-neutral-500" />,
  //   link: "https://github.com/akshatJ15/dalle",
  // },
  // {
  //   title: "Orka",
  //   description: "React.js , TailwindCSS , Express.js ,  MongoDB",
  //   header: <Skeleton image={orkaImg} icon={CodeXml} />,
  //   icon: <CodeXml className="h-4 w-4 text-neutral-500" />,
  //   link: "https://next-compiler.vercel.app/",
  // },
  // {
  //   title: "Admin Dashboard",
  //   description: "React.js , TailwindCSS",
  //   header: <Skeleton image={dashboardImg} icon={MessageCircle} />,
  //   icon: <SquareKanban className="h-4 w-4 text-neutral-500" />,
  //   link: "https://react-admin-dashboard-theta-ten.vercel.app/",
  // },
  // {
  //   title: "BrainWave",
  //   description: "React.js , TailwindCSS",
  //   header: <Skeleton image={brainwaveImg} icon={MessageCircle} />,
  //   icon: <SquareKanban className="h-4 w-4 text-neutral-500" />,
  //   link: "https://brainwave-seven-xi.vercel.app/",
  // },
  // {
  //   title: "Travel Brochure",
  //   description: "React.js , TailwindCSS",
  //   header: <Skeleton image={travelImg} icon={MessageCircle} />,
  //   icon: <Backpack className="h-4 w-4 text-neutral-500" />,
  //   link: "https://travel-brochure-two.vercel.app/",
  // },
  // {
  //   title: "Tic-Tac-Toe",
  //   description: "HTML , CSS , JavaScript",
  //   header: <Skeleton image={tictactoeImg} icon={MessageCircle} />,
  //   icon: <Grid3x3 className="h-4 w-4 text-neutral-500" />,
  //   link: "https://akshatj15.github.io/tic-tac-toe/",
  // },
  {
    title: "Weather_Website",
    description: "HTML , CSS , JavaScript",
    header: <Skeleton image={weatherImg} icon={MessageCircle} />,
    icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/vivek180905/weather_website",
  },
   {
    title: "Random_Password_Generator",
    description: "HTML , CSS , JavaScript",
    header: <Skeleton image={weatherImg} icon={MessageCircle} />,
    icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/vivek180905/random_password_generator",
  },
  // {
  //   title: "Calculator",
  //   description: "HTML , CSS , JavaScript",
  //   header: <Skeleton image={calculatorImg} icon={MessageCircle} />,
  //   icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
  //   link: "https://akshatj15.github.io/Calculator/",
  // },
  {
    title: "Advanced_chair",
    description: "HTML , CSS",
    header: <Skeleton image={chairImg} icon={MessageCircle} />,
    icon: <RockingChair className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/vivek180905/advanced_chair",
  },
];
