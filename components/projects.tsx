import React from "react";
import Image from "next/image";

const projects = () => {
  const projectList = [
    {
      title: "grouplyy.com",
      description: "A clean social grouping platform with a modern UI.",
      date: "2024",
      url: "https://lebaas-x-b659.vercel.app/",
    },
    {
      title: "sward.lol",
      description: "A modern personal site with animations and a clean design.",
      date: "2024",
      url: "https://www.sward.lol",
    },
    {
      title: "codemotion.online",
      description:
        "Creative coding lessons & projects with elegant UI components.",
      date: "2024",
      url: "https://www.codemotion.online",
    },
    {
      title: "clingai.space",
      description:
        "Website where users can share and explore AI-generated content.",
      date: "2024",
      url: "https://www.clingai.space/",
    },
    {
      title: "Crypto Portfolio",
      description:
        "A personal crypto portfolio dashboard with a clean interface.",
      date: "2024",
      url: "https://crypto-portfolio-rose.vercel.app/",
    },
    {
      title: "Ragon Solutions",
      description:
        "A software solutions company delivering modern digital products.",
      date: "2024",
      url: "https://ragonsolutions.com/",
    },
    {
      title: "Cal.com",
      description: "A modern scheduling platform for teams and individuals.",
      date: "2024",
      url: "https://cal.com",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-6 px-0">
      <ul className="flex flex-col gap-4">
        {projectList.map((p, i) => {
          const favicon = `https://www.google.com/s2/favicons?sz=128&domain=${p.url}`;

          return (
            <li
              key={i}
              className="
                group flex items-start gap-4 w-full p-3
                rounded-lg transition-all duration-300
                cursor-pointer
                hover:bg-black/5 dark:hover:bg-white/5
                hover:scale-[1.02]
                hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
                border border-transparent
                hover:border-black/10 dark:hover:border-white/10
              "
            >
              {/* Favicon */}
              <div className="flex-shrink-0 relative h-10 w-10 rounded-md overflow-hidden bg-black/10 dark:bg-white/5 shadow-sm">
                <Image
                  src={favicon}
                  alt={p.title}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3
                    id={`project-title-${i}`}
                    className="text-sm font-semibold truncate text-black dark:text-white"
                  >
                    {p.title}
                  </h3>

                  <span className="text-sm text-black/40 dark:text-white/40">•</span>

                  <span className="text-sm text-black/60 dark:text-white/60">
                    {p.date}
                  </span>
                </div>

                <p className="mt-1 text-sm text-black/70 dark:text-white/60 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default projects;
