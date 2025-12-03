"use client";
import { useEffect, useState } from "react";
import { cssClass } from "../css-classes";
import useTheme from "../lib/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const { theme, toggle } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <header className="glass-effect fixed top-6 left-1/2 -translate-x-1/2 
                   w-[90%] max-w-6xl 
                   backdrop-blur-sm
                   bg-white/10 pl-6 pr-2 rounded-full 
                   flex justify-between items-center py-2 z-50">
            <h1 className="font-bold text-[18px] flex gap-3 items-center">
                <div className="w-4 h-4 overflow-hidden relative">
                    <img src="/logo.png" className="absolute object-cover object-center"></img>
                </div>
                Viora
            </h1>

            <nav>
                <ul className="flex gap-10">
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggle}
                    aria-label="Toggle theme"
                    className="
                        relative p-4 flex items-center justify-center
                        rounded-full
                        bg-black
                        text-white
                        transition-colors
                        hover:bg-(--color-bg-secondary) hover:bg-opacity-10
                    "
                >
                    <span
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                        style={{ transform: isDark ? "scale(0)" : "scale(1)" }}
                    >
                        <Sun size={20} />
                    </span>

                    <span
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                        style={{ transform: isDark ? "scale(1)" : "scale(0)" }}
                    >
                        <Moon size={20} />
                    </span>
                </button>
                <button type="button" className={cssClass.primaryButton + " py-2!"}>Contact</button>
            </div>
        </header>
    );
}