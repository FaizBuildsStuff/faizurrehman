"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Sparkles } from "lucide-react";
import { PageShell } from "@/components/screens/page-shell";

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

export function AboutScreen() {
  return (
    <PageShell>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-10"
      >
        {/* Hero */}
        <motion.section variants={itemVariants} className="w-full">
            <div className="relative overflow-hidden rounded-[20px] border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <div className="absolute -top-24 -right-24 h-60 w-60 bg-white/5 blur-[80px] rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-3 text-white/60 mb-5">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <h1 className="text-xs font-bold tracking-[0.2em] uppercase">
                    About
                  </h1>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  FaizBuildsStuff{" "}
                  <span className="text-white/30 font-medium">
                    / Faizur Rehman
                  </span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                  I&apos;m a <span className="text-white">full-stack developer</span>{" "}
                  and <span className="text-white">UI designer</span> focused on
                  building premium, high-performance web experiences—clean code,
                  fluid motion, and scalable systems.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "UI Motion",
                    "Design Systems",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
        </motion.section>

        {/* Bio blocks */}
        <motion.section
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white/60">
                Bio
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                I&apos;m <span className="text-white font-semibold">FaizBuildsStuff</span>
                , a 16-year-old developer obsessed with quality. I build tools
                like <span className="text-white/90">Sward</span> and{" "}
                <span className="text-white/90">ClingAI</span>, and I love turning
                strong design into shipping products.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white/60">
                What I&apos;m optimizing for
              </h3>
              <ul className="mt-3 space-y-2 text-sm md:text-base text-white/70">
                <li>High performance, low complexity.</li>
                <li>Interfaces that feel effortless.</li>
                <li>Systems that scale with the team.</li>
                <li>Consistency via reusable components.</li>
              </ul>
            </div>
        </motion.section>

        {/* Contact */}
        <motion.section variants={itemVariants} className="w-full">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-[#111] to-[#080808] p-6 md:p-8">
              <div className="flex items-center gap-3 text-white/60 mb-5">
                <Mail className="h-4 w-4 text-emerald-400" />
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase">
                  Contact
                </h3>
              </div>

              <div className="flex flex-col gap-3 text-sm md:text-base text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-white/50">Email:</span>
                  <a
                    href="mailto:m.faizurrehman.crypto@gmail.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    m.faizurrehman.crypto@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/40" />
                  <span className="text-white/60">
                    Pakistan
                  </span>
                </div>

                <p className="pt-2 text-xs text-white/40">
                  Want this to be more personal? Tell me what you want included
                  (location, story, stack, achievements), and I&apos;ll tailor the
                  copy.
                </p>
              </div>
            </div>
        </motion.section>
      </motion.div>
    </PageShell>
  );
}

