import React from "react";
import Image from "next/image";

const projects = () => {
  const projectList = [
    {
      title: "shadcn/ui kit for Figma",
      description:
        "A comprehensive collection of customizable components, charts and assets based on the popular shadcn/ui library.",
      date: "Sep 2024",
      image: "/projects/ui-lib.png",
    },
    {
      title: "AI Dev for Ant Design",
      description:
        "A Figma plugin that transforms your Figma components or images into ready-to-use Ant Design React code.",
      date: "Aug 2024",
      image: "/projects/crypto-dashboard.png",
    },
    {
      title: "Icon Tagger",
      description:
        "A Figma plugin that generates keywords for your icons with AI and adds them to component descriptions, making it easier to find them.",
      date: "Jul 2024",
      image: "/projects/portfolio.png",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-6 px-0">
      <ul className="flex flex-col gap-6">
        {projectList.map((p, i) => (
          <li
            key={i}
            className="flex items-start gap-4"
            aria-labelledby={`project-title-${i}`}
          >
            {/* Left icon / image */}
            <div className="flex-shrink-0 relative h-10 w-10 rounded-md overflow-hidden bg-black/10 dark:bg-white/5 shadow-sm">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>

            {/* Right content */}
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <h3
                  id={`project-title-${i}`}
                  className="text-sm font-semibold truncate text-black dark:text-white"
                >
                  {p.title}
                </h3>

                <span className="text-sm text-black/40 dark:text-white/40">•</span>

                <span className="text-sm text-black/60 dark:text-white/60">{p.date}</span>
              </div>

              <p className="mt-1 text-sm text-black/70 dark:text-white/60 leading-relaxed">
                {p.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projects;
