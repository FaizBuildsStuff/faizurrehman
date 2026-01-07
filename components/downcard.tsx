"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const DownCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="
          relative w-full p-8 md:p-10
          rounded-2xl border border-white/5 
          bg-gradient-to-b from-[#111] to-[#080808]
          text-center overflow-hidden
      ">
        {/* Abstract Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/5 blur-[80px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="p-3 rounded-full bg-white/5 border border-white/5 mb-2">
            <Sparkles className="h-5 w-5 text-white/70" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Support My Work
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
              If you like what I build, consider supporting me. It helps me create more open-source tools.
            </p>
          </div>

          <Button
            onClick={() =>
              (window.location.href = "https://donate.stripe.com/14A4gzbOyg7SgL015heUU01")
            }
            className="
                mt-4 h-11 px-8 rounded-full
                bg-white text-black font-semibold
                hover:bg-white/90 hover:scale-105
                transition-all duration-300
                shadow-[0_0_20px_rgba(255,255,255,0.15)]
              "
          >
            Donate via Stripe
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DownCard;
