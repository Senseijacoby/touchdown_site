"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Preface() {
  return (
    <section className=" mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Greetings, I&apos;m{""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jack",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "React Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#a7a7af] text-base sm:text-lg mb-6 lg:text-xl">
            I am a skilled and passionate Web Developer with experience in
            creating visually appealing and{" "}
            <span className="block">user-friendly applications. </span>
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-btnColor hover:bg-btnColor2 text-white hover:scale-110 duration-300"
            >
              CONTACT ME
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 hover:scale-110 duration-300"
            >
              <span className="block bg-bgColor0 hover:bg-slate-800 rounded-full px-5 py-2 ">
                DOWNLOAD CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-pattern_dark h-[250px] w-[250px] lg:w-[400px] lg:h-[400px] relative mt-20 md:ml-5 rounded-full">
            <Image
              src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif"
              alt="coding bot"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
