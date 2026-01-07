"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CommandHint = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Delay hint appearance
        const timer = setTimeout(() => setShow(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-xl select-none pointer-events-none"
                >
                    <span className="text-xs text-white/40 font-medium">Press</span>
                    <div className="flex items-center gap-1">
                        <kbd className="h-5 min-w-[20px] flex items-center justify-center rounded bg-white/10 px-1 text-[10px] font-sans font-medium text-white/70">
                            ⌘
                        </kbd>
                        <kbd className="h-5 min-w-[20px] flex items-center justify-center rounded bg-white/10 px-1 text-[10px] font-sans font-medium text-white/70">
                            K
                        </kbd>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
