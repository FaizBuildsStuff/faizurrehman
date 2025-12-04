"use client";

import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Sparkles, Layers, User, Rocket } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      {/* Top-left Theme Toggle */}
      <div className="fixed top-6 left-6 z-40">
        <ModeToggle />
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-8">
        {/* Glow */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-black/10 dark:bg-white/10 blur-3xl opacity-30"
          aria-hidden
        />

        {/* Content Wrapper - reduced upward shift so nothing goes off-screen */}
        <div className="relative z-10 flex flex-col items-center justify-center -translate-y-[18%] w-full px-6">
          <div className="max-w-xl w-full">
            {/* Center Vertical Separator */}
            <div className="flex items-center justify-center mb-6">
              <Separator
                orientation="vertical"
                className="h-48 bg-black/60 dark:bg-white/70 w-[3px] rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            </div>

            {/* Text Block */}
            <div className="space-y-6 text-left">
              {/* Avatar (smaller upward lift so it stays visible) */}
              <div className="flex items-center gap-3 mb-2 -translate-y-[8%]">
                <Avatar className="h-14 w-14 border dark:border-white/20 shadow-lg">
                  <AvatarImage src="/crypto.png" alt="crypto avatar" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
              </div>

              {/* Heading */}
              <h1 className="text-3xl font-bold italic leading-tight tracking-tight flex items-start gap-2">
                <Sparkles className="h-6 w-6" />
                I build UI Design projects
                <br />
                that improve my workflow and save my time
              </h1>

              {/* Subtext */}
              <p className="text-lg font-medium italic text-black/70 dark:text-white/80 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Components, systems & tools built for creators.
              </p>

              {/* Intro */}
              <p className="text-base italic text-black/60 dark:text-white/60 flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  I'm <span className="font-bold">faizurrehman</span>, also
                  known as <span className="font-bold">crypto</span>.
                </span>

                <span className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Frontend engineer, UI designer & emerging creator from
                  Pakistan always building, always experimenting.
                </span>
              </p>

              {/* Projects Label + Separator */}
              <div className="mt-6">
                <span className="text-xl font-bold italic">Projects</span>
                <Separator className="mt-3 bg-black/20 dark:bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section
        id="projects"
        className="w-full flex items-start justify-center bg-transparent"
      >
        {/* Match width perfectly with hero; small negative margin to tuck it under separator */}
        <div className="w-full max-w-xl -mt-32">

          <Projects />
        </div>
      </section>
    </div>
  );
}
