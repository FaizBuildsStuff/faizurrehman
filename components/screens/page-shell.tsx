"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

type PageShellProps = {
  children: React.ReactNode;
  maxWidthClassName?: string;
};

const navLinks: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function PageShell({ children, maxWidthClassName }: PageShellProps) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white/90 selection:bg-white/20 overflow-x-hidden font-sans">
      {/* --- Global Grain Overlay --- */}
      <div className="fixed inset-0 pointer-events-none opacity-25 z-50 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </div>

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-10 opacity-30"
          fill="rgba(255, 255, 255, 0.03)"
        />
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <div
          className={cn(
            "mx-auto px-6 py-4 flex items-center justify-between",
            maxWidthClassName || "max-w-[720px]"
          )}
        >
          <Link
            href="/"
            className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors"
          >
            FaizBuildsStuff
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main
        className={cn(
          "relative z-10 mx-auto px-6 py-12 md:py-16",
          maxWidthClassName || "max-w-[720px]"
        )}
      >
        {children}
      </main>
    </div>
  );
}

