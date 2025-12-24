"use client";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const handleClick = () => {
    const recipient = "jindalakshat2002@gmail.com";
    const subject = "Enter the Subject Here";
    const body = "Enter the Body Here";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:text-left md:gap-16">
            <div>
              <motion.h2
                className="font-serif text-2xl md:text-3xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
              >
                Let&apos;s Create Something Amazing Together
              </motion.h2>
              <motion.p
                className="text-sm mt-2 md:text-base"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
              >
                Ready to bring your next project to life? Contact me to discuss
                how we can work together to bring your vision to life.
              </motion.p>
            </div>
            <div>
              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
                onClick={handleClick}
              >
                <motion.span
                  className="font-semibold"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                >
                  Contact Me
                </motion.span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
