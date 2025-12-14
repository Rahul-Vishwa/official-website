"use client";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export const faqs = [
    {
        question: "What kind of AI-powered applications do you build?",
        answer:
            "We build full-stack web applications with integrated AI features such as chatbots, recommendation engines, RAG search, automation workflows, document intelligence, and predictive analytics."
    },
    {
        question: "Do I need to understand AI to work with you?",
        answer:
            "No. You tell us the outcomes you want, and we translate your business goals into complete AI workflows, agents, and systems without requiring any technical background from your side."
    },
    {
        question: "How long does it take to build an AI-enabled product?",
        answer:
            "Most MVPs are delivered within 4–8 weeks, while more advanced AI systems take 8–12 weeks depending on complexity. We ship in iterations to deliver working features early."
    },
    {
        question: "Can you integrate AI into my existing product?",
        answer:
            "Yes. We can add AI features such as semantic search, automation workflows, agents, analytics, or document intelligence without rebuilding your entire system."
    },
    {
        question: "What tech stack do you specialize in?",
        answer:
            "We use Angular, React, Next.js, TypeScript, Node.js, .NET Core, PostgreSQL, Redis, and major cloud platforms like AWS, GCP, and Azure. For AI, we work with OpenAI, Llama, LangChain, LangGraph, and vector databases."
    },
    {
        question: "Are the applications you build scalable?",
        answer:
            "Yes. We follow event-driven architecture, caching layers, scalable APIs, and cloud-native deployment strategies to ensure long-term performance and reliability."
    },
    {
        question: "How do you ensure data privacy and security in AI systems?",
        answer:
            "We use enterprise-grade practices including encryption, secure API gateways, isolated vector stores, and strict role-based access to ensure user and business data stays protected."
    },
    {
        question: "Will I get ongoing support after launch?",
        answer:
            "Yes. We provide ongoing maintenance, model updates, bug fixes, performance monitoring, and new AI feature development through optional support plans."
    },
    {
        question: "Can AI actually reduce my operational costs?",
        answer:
            "Yes. AI automates repetitive tasks, improves search and support efficiency, reduces manual workload, and helps decision-making — leading to measurable cost reductions."
    },
    {
        question: "How do we get started?",
        answer:
            "You can begin with a free discovery call where we understand your goals, provide a solution outline, and define timeline and cost before starting with a small milestone-based engagement."
    }
];

export function Faq() {
    return (
        <section>
            <div className="padding-x mb-24 relative">
                <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                    <span className="text-gray-500">Quick <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">answers</span></span>
                </div>

                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1.05, spaceBetween: 12 },
                        480: { slidesPerView: 1.3, spaceBetween: 14 },
                        640: { slidesPerView: 1.8, spaceBetween: 16 },
                        768: { slidesPerView: 2.4, spaceBetween: 18 },
                        1024: { slidesPerView: 3.2, spaceBetween: 20 },
                    }}
                    slidesPerView={1.05}
                    spaceBetween={12}
                    pagination={{ clickable: true }}
                    className="mySwiper mt-10"
                >
                    {faqs.map((faq, index) => (
                        <SwiperSlide key={faq.question}>
                            <div className="h-[275px] flex flex-col justify-end bg-gray-card p-8 rounded-xl">
                                <div className="text-xl font-semibold">{faq.question}</div>
                                <div className="mt-5 animate-fadeIn">
                                    {faq.answer}
                                </div>
                                <div className="mt-5 absolute animate-fadeOut">
                                    {faq.answer}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}