"use client";
import { Bot } from "lucide-react";

import React, { useEffect, useState } from "react";
import NeuralCanvas from "./NeuralLink";

function Typewriter() {
    const words = [
        "We build AI-powered software.",
        "We automate what slows you down.",
        "We turn ideas into intelligent products.",
        "We integrate AI into existing systems.",
        "We craft fast, scalable digital solutions.",
        "We help businesses grow with AI.",
    ];

    const [index, setIndex] = useState(0); // which word
    const [subIndex, setSubIndex] = useState(0); // letters
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseAfterWord = 1200;

    useEffect(() => {
        let timeout: number;

        const currentWord = words[index];

        if (!isDeleting && subIndex === currentWord.length) {
            // Finished typing → pause → start deleting
            timeout = window.setTimeout(() => setIsDeleting(true), pauseAfterWord);
        } else if (isDeleting && subIndex === 0) {
            // Finished deleting → next word
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        } else {
            // Continue typing or deleting
            timeout = window.setTimeout(() => {
                setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index]);

    return (
        <div className="inline-flex text-2xl font-semibold p-5 rounded-xl text-white">
            <span className="bg-linear-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">{words[index].substring(0, subIndex)}</span>
            <span className="ml-1 animate-pulse">|</span>
        </div>
    );
}

export default function Robot() {
    return (
        <section>
            <div className="padding-x mb-20">
                <div className="overflow-hidden relative flex justify-center items-center rounded-xl bg-black h-[150px]">
                    <NeuralCanvas />
                    <div className="z-50">
                        <Typewriter />
                    </div>
                </div>
            </div>
        </section>
    )
}