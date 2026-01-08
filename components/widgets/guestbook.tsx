"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PenTool, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/lib/supabase";

interface GuestMessage {
    id: number;
    name: string;
    message: string;
    created_at: string;
}

export function Guestbook() {
    const [messages, setMessages] = useState<GuestMessage[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);

    // Fetch initial messages
    useEffect(() => {
        fetchMessages();

        // Realtime subscription
        const channel = supabase
            .channel('guestbook_realtime')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'guestbook' },
                (payload) => {
                    const newMessage = payload.new as GuestMessage;
                    setMessages((prev) => [newMessage, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchMessages = async () => {
        const { data } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);

        if (data) setMessages(data);
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;
        setSending(true);

        const { error } = await supabase
            .from('guestbook')
            .insert([
                { name: name.trim(), message: message.trim() }
            ]);

        if (error) {
            console.error("Error signing guestbook:", error);
            alert("Failed to sign. Please try again.");
        } else {
            // Success - UI updates via realtime subscription
            setName("");
            setMessage("");
        }
        setSending(false);
    };

    function getInitials(name: string) {
        return name.slice(0, 2).toUpperCase();
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6 px-2">
                <PenTool className="h-4 w-4 text-emerald-400" />
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                    Sign the Guestbook
                </h2>
            </div>

            <div className="bg-[#0A0A0A]/30 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden">
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 border-b border-white/5 space-y-3">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={sending}
                        maxLength={20}
                        className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 transition-colors disabled:opacity-50"
                    />
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Leave a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={sending}
                            maxLength={100}
                            className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 transition-colors disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!name || !message || sending}
                            className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors flex items-center justify-center min-w-[44px]"
                        >
                            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        </button>
                    </div>
                </form>

                {/* List */}
                <div className="max-h-[300px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                    {loading ? (
                        <div className="flex justify-center p-4">
                            <Loader2 className="h-5 w-5 animate-spin text-white/20" />
                        </div>
                    ) : messages.length === 0 ? (
                        <p className="text-center text-xs text-white/30 py-4">No signatures yet. Be the first!</p>
                    ) : (
                        <AnimatePresence initial={false} mode="popLayout">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="flex gap-3 text-sm"
                                >
                                    <Avatar className="h-8 w-8 border border-white/10 shrink-0">
                                        <AvatarFallback className="text-[10px] bg-white/5 text-white/70">
                                            {getInitials(msg.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-white/90 text-xs">{msg.name}</span>
                                            <span className="text-[10px] text-white/30">
                                                {new Date(msg.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-white/60 leading-relaxed font-light text-sm break-all">{msg.message}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </div>
    );
}
