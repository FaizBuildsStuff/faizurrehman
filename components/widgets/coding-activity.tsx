"use client";

import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";

export function CodingActivity() {
    // Mock data - in future this could come from WakaTime/GitHub API
    const languages = [
        { name: "TypeScript", percent: 45, color: "#3178C6" },
        { name: "React/Next.js", percent: 30, color: "#61DAFB" },
        { name: "Node.js", percent: 15, color: "#339933" },
        { name: "Rust", percent: 10, color: "#DEA584" },
    ];

    return (
        <div className="w-full p-6 rounded-3xl border border-white/5 bg-[#0A0A0A]/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-emerald-500/10">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">Coding Activity</h3>
                    <p className="text-xs text-white/40">Last 7 days (Mock Data)</p>
                </div>
            </div>

            <div className="space-y-4">
                {languages.map((lang, index) => (
                    <div key={lang.name} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                            <span className="text-white/70 font-medium">{lang.name}</span>
                            <span className="text-white/30">{lang.percent}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${lang.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: lang.color }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex gap-4 text-xs text-white/30">
                <div className="flex items-center gap-1.5">
                    <Code className="h-3 w-3" />
                    <span>24 hrs coding</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active now</span>
                </div>
            </div>
        </div>
    );
}
