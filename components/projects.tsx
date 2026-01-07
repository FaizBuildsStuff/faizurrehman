"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      title: "sward.lol",
      description: "Modern personal site with animations.",
      year: "2024",
      url: "https://www.sward.lol",
    },
    {
      title: "truststartup.app",
      description: "Secure platform for startup trust management.",
      year: "2024",
      url: "https://truststartup.vercel.app/",
    },
    {
      title: "grouplyy.com",
      description: "Social grouping platform with modern UI.",
      year: "2025",
      url: "https://lebaas-x-b659.vercel.app/",
    },
    {
      title: "clingai.space",
      description: "Explore and share AI-generated content.",
      year: "2025",
      url: "https://www.clingai.space/",
    },
    {
      title: "codemotion.online",
      description: "Creative coding lessons & clean components.",
      year: "2024",
      url: "https://www.codemotion.online",
    },
    {
      title: "Crypto Portfolio",
      description: "Personal crypto dashboard interface.",
      year: "2025",
      url: "https://crypto-portfolio-rose.vercel.app/",
    },
    {
      title: "Ragon Solutions",
      description: " Corporate digital solutions agency.",
      year: "2024",
      url: "https://ragonsolutions.com/",
    },
    {
      title: "Cal.com",
      description: "Scheduling infrastructure for everyone.",
      year: "2024",
      url: "https://cal.com",
    },
  ];

  return (
    <div className="w-full">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {projectList.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.02)" }}
            whileTap={{ scale: 0.98 }}
            className="
              group flex flex-col justify-between p-5
              rounded-[16px] border border-white/[0.08] bg-white/[0.01]
              transition-all duration-500 ease-out
              hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]
            "
          >
            <div className="flex justify-between items-start mb-4">
              <div className="
                 h-9 w-9 rounded-full 
                 bg-white/5 flex items-center justify-center 
                 group-hover:bg-white/90 group-hover:scale-110 
                 transition-all duration-300
              ">
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-black transition-colors" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-white/20">{p.year}</span>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/40 leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors">
                {p.description}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
