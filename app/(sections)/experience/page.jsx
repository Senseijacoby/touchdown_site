"use client";
import React, { useState, useRef } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioTag from "@/components/PortfolioTag";
import { motion, useInView } from "framer-motion";
import { experienceData } from "@/utils/constants";

export default function Experience() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = experienceData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 ">
      <div className="bg-[conic-gradient(var(--tw-gradient-stops))]  from-gray-900 via-indigo-900 to-violet-900"></div>
      <h2 className="mt-20 mb-5 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>

      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <PortfolioTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <PortfolioTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <PortfolioTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
