"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import ButtonTab from "@/components/ButtonTab";
import { TAB_DATA } from "@/utils/constants";
import ProfImg from "@/public/images/about-image.png";

export default function About() {
  const [tab, setTab] = useState("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  mt-20 bg-gradient-to-r from-slate-900 via-gray-700 to-red-900 ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-md md:h-[600px]"
          src="https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif"
          width={500}
          height={500}
          alt=""
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for crafting
            interactive web applications with cutting-edge technology,
            delivering dynamic and engaging user experiences. <br /> I have
            experience working with JavaScript, React/NextJS, NodeJS, ExpressJS,
            MongoDB, HTML & CSS, and Git. <br />I enjoy working on large
            projects, intuitiveness, details and innovation peak my interest.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <ButtonTab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </ButtonTab>
            <ButtonTab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </ButtonTab>
            <ButtonTab
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </ButtonTab>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
