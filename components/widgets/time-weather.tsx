"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, Moon, Sun, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface WeatherData {
    temperature: number;
    weatherCode: number;
}

export function TimeWeather() {
    const [time, setTime] = useState<Date | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Time effect
    useEffect(() => {
        setTime(new Date());
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Weather effect
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const res = await fetch(
                            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
                        );
                        if (!res.ok) throw new Error("Weather fetch failed");
                        const data = await res.json();
                        setWeather({
                            temperature: data.current.temperature_2m,
                            weatherCode: data.current.weather_code,
                        });
                    } catch (e) {
                        console.error(e);
                        setError(true);
                    } finally {
                        setLoading(false);
                    }
                },
                (err) => {
                    console.error("Geo error:", err);
                    setError(true); // Default to error/hidden if permission denied for now
                    setLoading(false);
                }
            );
        } else {
            setLoading(false);
            setError(true);
        }
    }, []);

    // Helper to get weather icon
    const getWeatherIcon = (code: number) => {
        // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
        // 0: Clear sky
        // 1, 2, 3: Mainly clear, partly cloudy, overcast
        // 45, 48: Fog
        // 51, 53, 55: Drizzle
        // 61, 63, 65: Rain
        // 71, 73, 75: Snow
        // 95, 96, 99: Thunderstorm

        // Simple mapping
        if (code === 0 || code === 1) return <Sun className="h-5 w-5 text-yellow-400" />;
        if (code === 2 || code === 3) return <Cloud className="h-5 w-5 text-gray-400" />;
        if (code === 45 || code === 48) return <CloudFog className="h-5 w-5 text-gray-400" />;
        if (code >= 51 && code <= 67) return <CloudRain className="h-5 w-5 text-blue-400" />;
        if (code >= 71 && code <= 77) return <CloudSnow className="h-5 w-5 text-white" />;
        if (code >= 95) return <CloudLightning className="h-5 w-5 text-purple-400" />;
        return <Sun className="h-5 w-5 text-yellow-400" />;
    };

    if (!time) return null; // Avoid hydration mismatch

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-sm"
        >
            {/* Time Section */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <div className="flex flex-col items-end leading-none">
                    <span className="text-sm font-bold text-white tracking-widest">
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                    <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                        {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Weather Section */}
            <div className="flex items-center gap-2 pl-1 min-w-[3.5rem] justify-center">
                {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin text-white/20" />
                ) : error || !weather ? (
                    <Moon className="h-4 w-4 text-white/20" /> // Fallback icon
                ) : (
                    <>
                        {getWeatherIcon(weather.weatherCode)}
                        <span className="text-sm font-semibold text-white/80">
                            {Math.round(weather.temperature)}°
                        </span>
                    </>
                )}
            </div>
        </motion.div>
    );
}
