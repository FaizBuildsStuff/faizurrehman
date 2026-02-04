"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import Projects from "@/components/projects";
import { PageShell } from "@/components/screens/page-shell";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsScreen() {
  return (
    <PageShell>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.section variants={itemVariants} className="w-full">
          <div className="relative overflow-hidden rounded-[20px] border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <div className="absolute -top-24 -left-24 h-60 w-60 bg-white/5 blur-[80px] rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-3 text-white/60 mb-4">
                <Layers className="h-4 w-4" />
                <h1 className="text-xs font-bold tracking-[0.2em] uppercase">
                  Selected Work
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                Projects that ship
              </h2>
              <p className="mt-3 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                A small set of products and experiments—focused on clean UX,
                motion, and performance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
                  <a
                    href="https://github.com/FaizBuildsStuff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub <ArrowUpRight className="ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]"
                >
                  <a href="/contact">Work with me</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="w-full">
          <Projects />
        </motion.section>
      </motion.div>
    </PageShell>
  );
}

