"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
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

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/FaizBuildsStuff",
    Icon: Github,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/FaizBuildsStuff",
    Icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faizu-rrehman-4856b4319/",
    Icon: Linkedin,
  },
];

export function ContactScreen() {
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
            <div className="absolute -top-24 -right-24 h-60 w-60 bg-white/5 blur-[80px] rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-3 text-white/60 mb-4">
                <Mail className="h-4 w-4 text-emerald-400" />
                <h1 className="text-xs font-bold tracking-[0.2em] uppercase">
                  Contact
                </h1>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                Let’s build something great
              </h2>
              <p className="mt-3 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                If you want a premium landing page, a product UI, or a full-stack
                build with clean motion—send details and timeline, and I’ll reply.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-white text-black hover:bg-white/90"
                >
                  <a href="mailto:m.faizurrehman.crypto@gmail.com">
                    Email me <ArrowUpRight className="ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]"
                >
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call (placeholder)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">
                      {label}
                    </div>
                    <div className="text-xs text-white/40">Open profile</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/70 transition-colors" />
              </div>
            </a>
          ))}
        </motion.section>

        <motion.section variants={itemVariants} className="w-full">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-[#111] to-[#080808] p-6 md:p-8">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
              What to include
            </h3>
            <ul className="mt-3 text-sm md:text-base text-white/70 space-y-2">
  <li>Project goal + target audience</li>
  <li>Required features (pages, sections, admin, payments, etc.)</li>
  <li>Design style + references (Figma / websites you like)</li>
  <li>Brand assets (logo, colors, fonts, content)</li>
  <li>Timeline + deadline priority</li>
  <li>Budget range (so I can suggest the best plan)</li>
  <li>Tech preference (Next.js / React / Supabase / Firebase)</li>
  <li>Launch support (SEO, speed, deployment, maintenance)</li>
</ul>

          </div>
        </motion.section>
      </motion.div>
    </PageShell>
  );
}

