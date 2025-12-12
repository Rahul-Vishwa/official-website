"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ReactElement, useEffect, useRef, useState } from "react";
import { SwiperContainer } from "swiper/element";

const services: {
    title: string;
    description: string;
    tags: string[];
    image: string | null;
    icon: ReactElement | null;
}[] = [
        {
            "title": "AI-Driven Full Stack Development",
            "description": "We build modern, scalable full-stack applications with AI deeply integrated into the architecture.",
            "tags": ["full-stack", "web-apps", "frontend", "backend", "ai-enabled"],
            "image": null,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1"> <path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" /> <path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" /> <path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" /> <path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" /> </svg>
        },
        {
            "title": "Smart SaaS Product Development",
            "description": "End-to-end development of SaaS platforms powered by AI-driven automation, personalization, and analytics.",
            "tags": ["saas", "product-development", "ai-features"],
            "image": "background3.jpg",
            "icon": null
        },
        {
            "title": "AI-Enhanced UI/UX Engineering",
            "description": "Design adaptive, behavior-aware interfaces that personalize user journeys using intelligent insights.",
            "tags": ["ui-ux", "personalization", "adaptive-ui"],
            "image": null,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M304 592h416l104 296h-624L304 592z m328 128c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m-256-48c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m136 112c9.6 0 16-6.4 16-16s-6.4-16-16-16-16 6.4-16 16 6.4 16 16 16z m8-256c-12.8 0-24-11.2-24-24s11.2-24 24-24 24 11.2 24 24-11.2 24-24 24z m104 48c-9.6 0-16-6.4-16-16s6.4-16 16-16 16 6.4 16 16-6.4 16-16 16z" fill="#2F4BFF" /><path d="M622.4 112H401.6c9.6 76.8 14.4 142.4 14.4 176 0 35.2-65.6 248-200 592h593.6C673.6 536 608 323.2 608 288c0-33.6 4.8-99.2 14.4-176z m32 0c-9.6 78.4-14.4 144-14.4 176 0 28.8 67.2 248 198.4 580.8 1.6 3.2 1.6 8 1.6 11.2 0 17.6-14.4 32-32 32H214.4c-4.8 0-8 0-11.2-1.6-16-6.4-24-25.6-17.6-41.6C316.8 536 384 316.8 384 288c0-32-4.8-97.6-14.4-176H368c-9.6 0-16-6.4-16-16s6.4-16 16-16h288c9.6 0 16 6.4 16 16s-6.4 16-17.6 16c1.6 0 0 0 0 0z" fill="#08135B" /><path d="M424 480h48c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H416V480h8z" fill="#08135B" /></svg>
        },
        {
            "title": "AI Workflow & Backend Automation",
            "description": "Automate key business processes and backend operations using rule-based engines and event-driven AI logic.",
            "tags": ["automation", "backend", "pipelines", "ai-workflows"],
            "image": "background9.jpg",
            "icon": null
        },
        {
            "title": "Data Engineering for AI Apps",
            "description": "Build optimized data pipelines and storage systems to power fast, reliable AI features.",
            "tags": ["data-engineering", "pipelines", "data-storage"],
            "image": null,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M337.6 529.6c-105.6 0-192-86.4-192-192s86.4-192 192-192 192 86.4 192 192-86.4 192-192 192z m0-32c88 0 160-72 160-160s-72-160-160-160-160 72-160 160 70.4 160 160 160zM688 880c-105.6 0-192-86.4-192-192s86.4-192 192-192 192 86.4 192 192-86.4 192-192 192z m0-32c88 0 160-72 160-160s-72-160-160-160-160 72-160 160 72 160 160 160z" fill="#050D42" /><path d="M393.6 412.8c-48 0-88-40-88-88s40-88 88-88 88 40 88 88-40 88-88 88z m0-16c40 0 72-32 72-72s-32-72-72-72-72 32-72 72 32 72 72 72zM676.8 832c-48 0-88-40-88-88s40-88 88-88 88 40 88 88-40 88-88 88z m0-16c40 0 72-32 72-72s-32-72-72-72-72 32-72 72 32 72 72 72z" fill="#050D42" /><path d="M708.8 777.6c-1.6 3.2-3.2 4.8-4.8 6.4-9.6 9.6-24 9.6-33.6 0-9.6-9.6-9.6-24 0-33.6 6.4-6.4 17.6-8 25.6-4.8 0-12.8 4.8-24 14.4-33.6 19.2-19.2 49.6-19.2 67.2 0s19.2 49.6 0 67.2-48 17.6-68.8-1.6c1.6 0 1.6 0 0 0z m-54.4-56c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 4.8 6.4 4.8 16 0 22.4z m100.8-56c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4z m-113.6-68.8c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4zM292.8 289.6l-1.6 1.6c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 4.8-4.8 14.4-6.4 19.2-1.6 0-11.2 4.8-22.4 14.4-32 19.2-19.2 49.6-19.2 67.2 0s19.2 49.6 0 67.2c-19.2 19.2-49.6 19.2-67.2 0-3.2-3.2-6.4-8-9.6-12.8z m145.6 59.2c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4z m-214.4 11.2c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4s16-6.4 22.4 0c6.4 4.8 6.4 16 0 22.4z m84.8 96c-9.6 9.6-24 9.6-33.6 0-9.6-9.6-9.6-24 0-33.6 9.6-9.6 24-9.6 33.6 0s9.6 24 0 33.6z" fill="#2F4BFF" /><path d="M206.4 467.2l11.2-11.2c41.6 41.6 80 56 136 59.2 4.8 0 32 1.6 40 1.6 32 3.2 54.4 9.6 72 28.8 16 16 25.6 36.8 30.4 65.6 1.6 11.2 6.4 52.8 6.4 51.2 8 60.8 24 100.8 65.6 142.4l-11.2 11.2c-44.8-44.8-62.4-88-70.4-152 0 1.6-4.8-40-6.4-51.2-4.8-25.6-11.2-43.2-25.6-57.6-14.4-14.4-33.6-20.8-62.4-24-8 0-35.2-1.6-40-1.6-57.6-1.6-100.8-17.6-145.6-62.4z m611.2 89.6l-11.2 11.2c-41.6-41.6-81.6-57.6-142.4-65.6 1.6 0-40-4.8-51.2-6.4-28.8-4.8-49.6-12.8-65.6-30.4-17.6-17.6-25.6-40-28.8-72 0-8-1.6-35.2-1.6-40-3.2-56-17.6-94.4-59.2-136l11.2-11.2c44.8 44.8 60.8 86.4 64 147.2 0 4.8 1.6 33.6 1.6 40 1.6 28.8 8 46.4 24 62.4 14.4 14.4 32 20.8 57.6 25.6 11.2 1.6 52.8 6.4 51.2 6.4 62.4 8 105.6 24 150.4 68.8z" fill="#050D42" /></svg>
        },
        {
            "title": "AI-Powered API Development",
            "description": "Develop and integrate APIs that deliver AI-driven scoring, routing, predictions, and automation.",
            "tags": ["api-development", "integrations", "ai-services"],
            "image": "background1.jpg",
            "icon": null
        },
        {
            "title": "Intelligent Dashboards & Reporting",
            "description": "Create dashboards that automatically analyze trends, detect anomalies, and surface actionable insights.",
            "tags": ["dashboards", "analytics", "reporting"],
            "image": null,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M608 156.8c4.8 1.6 6.4 4.8 6.4 9.6l-28.8 108.8c-1.6 4.8-4.8 6.4-9.6 6.4-4.8-1.6-6.4-4.8-6.4-9.6l28.8-108.8c0-4.8 4.8-8 9.6-6.4zM867.2 416c1.6 4.8-1.6 8-6.4 9.6L752 454.4c-4.8 1.6-8-1.6-9.6-6.4-1.6-4.8 1.6-8 6.4-9.6l108.8-28.8c4.8 0 8 3.2 9.6 6.4z m-94.4 356.8c-3.2 3.2-8 3.2-11.2 0l-78.4-78.4c-3.2-3.2-3.2-8 0-11.2 3.2-3.2 8-3.2 11.2 0l78.4 78.4c3.2 3.2 3.2 8 0 11.2zM416 867.2c-4.8-1.6-6.4-4.8-6.4-9.6l28.8-108.8c1.6-4.8 4.8-6.4 9.6-6.4 4.8 1.6 6.4 4.8 6.4 9.6l-28.8 108.8c0 4.8-4.8 8-9.6 6.4zM156.8 608c-1.6-4.8 1.6-8 6.4-9.6l108.8-28.8c4.8-1.6 8 1.6 9.6 6.4 1.6 4.8-1.6 8-6.4 9.6l-108.8 28.8c-4.8 0-8-3.2-9.6-6.4z m94.4-356.8c3.2-3.2 8-3.2 11.2 0l78.4 78.4c3.2 3.2 3.2 8 0 11.2s-8 3.2-11.2 0l-78.4-78.4c-3.2-3.2-3.2-8 0-11.2z" fill="#050D42" /><path d="M355.2 355.2l-57.6 214.4 156.8 156.8 214.4-57.6 57.6-214.4-156.8-156.8-214.4 57.6z m230.4-86.4l169.6 169.6c4.8 4.8 6.4 9.6 4.8 16l-62.4 232c-1.6 4.8-6.4 9.6-11.2 11.2l-232 62.4c-4.8 1.6-11.2 0-16-4.8L268.8 585.6c-4.8-4.8-6.4-9.6-4.8-16l62.4-232c1.6-4.8 6.4-9.6 11.2-11.2l232-62.4c6.4 0 11.2 1.6 16 4.8z" fill="#050D42" /><path d="M561.6 326.4c-25.6-6.4-41.6-33.6-33.6-59.2s33.6-41.6 59.2-33.6c25.6 6.4 41.6 33.6 33.6 59.2-6.4 25.6-33.6 40-59.2 33.6z m136 136c-6.4-25.6 8-51.2 33.6-59.2 25.6-6.4 51.2 8 59.2 33.6 6.4 25.6-8 51.2-33.6 59.2-25.6 6.4-52.8-8-59.2-33.6z m-49.6 185.6c19.2-19.2 49.6-19.2 67.2 0 19.2 19.2 19.2 49.6 0 67.2-19.2 19.2-49.6 19.2-67.2 0-19.2-17.6-19.2-48 0-67.2z m-185.6 49.6c25.6 6.4 41.6 33.6 33.6 59.2-6.4 25.6-33.6 41.6-59.2 33.6-25.6-6.4-41.6-33.6-33.6-59.2 6.4-25.6 33.6-40 59.2-33.6z m-136-136c6.4 25.6-8 51.2-33.6 59.2-25.6 6.4-51.2-8-59.2-33.6-6.4-25.6 8-51.2 33.6-59.2 25.6-6.4 52.8 8 59.2 33.6z m49.6-185.6c-19.2 19.2-49.6 19.2-67.2 0-19.2-19.2-19.2-49.6 0-67.2 19.2-19.2 49.6-19.2 67.2 0s19.2 48 0 67.2z" fill="#2F4BFF" /><path d="M483.014155 620.184198a112 112 0 1 0 57.97169-216.368396 112 112 0 1 0-57.97169 216.368396Z" fill="#2F4BFF" /><path d="M598.4 187.2c-17.6-4.8-27.2-22.4-22.4-38.4 4.8-17.6 22.4-27.2 38.4-22.4 17.6 4.8 27.2 22.4 22.4 38.4s-20.8 27.2-38.4 22.4z m238.4 238.4c-4.8-17.6 4.8-35.2 22.4-38.4 17.6-4.8 35.2 4.8 38.4 22.4 4.8 17.6-4.8 35.2-22.4 38.4-16 4.8-33.6-6.4-38.4-22.4z m-88 323.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8c-12.8 12.8-32 12.8-44.8 0s-11.2-32 0-44.8z m-323.2 88c17.6 4.8 27.2 22.4 22.4 38.4-4.8 17.6-22.4 27.2-38.4 22.4-17.6-4.8-27.2-22.4-22.4-38.4 3.2-17.6 20.8-27.2 38.4-22.4zM187.2 598.4c4.8 17.6-4.8 35.2-22.4 38.4-17.6 4.8-35.2-4.8-38.4-22.4-4.8-17.6 4.8-35.2 22.4-38.4 16-4.8 33.6 6.4 38.4 22.4z m88-323.2c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0 11.2 11.2 11.2 32 0 44.8z" fill="#2F4BFF" /></svg>
        },
        {
            "title": "Smart E-commerce & Marketplace Development",
            "description": "Build intelligent e-commerce systems with dynamic sorting, AI search, buyer intent scoring, and automation.",
            "tags": ["ecommerce", "marketplace", "personalization"],
            "image": "background5.jpg",
            "icon": null
        },
        {
            "title": "AI-Powered Performance Optimization",
            "description": "Use AI insights to optimize UX, speed, conversions, and system performance across your application.",
            "tags": ["optimization", "performance", "ai-analysis"],
            "image": null,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M195.2 534.4l147.2-147.2c73.6-1.6 140.8 28.8 203.2 91.2 62.4 62.4 92.8 129.6 91.2 203.2l-147.2 147.2c-81.6 81.6-212.8 81.6-294.4 0s-81.6-212.8 0-294.4z" fill="#2F4BFF" /><path d="M217.6 556.8c-68.8 68.8-68.8 180.8 0 249.6s180.8 68.8 249.6 0l339.2-339.2c68.8-68.8 68.8-180.8 0-249.6s-180.8-68.8-249.6 0L217.6 556.8z m-22.4-22.4l339.2-339.2c81.6-81.6 212.8-81.6 294.4 0s81.6 212.8 0 294.4L489.6 828.8c-81.6 81.6-212.8 81.6-294.4 0s-81.6-212.8 0-294.4z" fill="#050D42" /><path d="M590.4 433.6c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0 12.8 11.2 12.8 32 0 44.8z m136 67.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8 32-12.8 44.8 0 12.8 32 0 44.8z m17.6-176c-9.6 9.6-24 9.6-33.6 0-9.6-9.6-9.6-24 0-33.6 9.6-9.6 24-9.6 33.6 0s9.6 24 0 33.6z m62.4-16c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4zM704 251.2c-6.4 6.4-16 6.4-22.4 0s-6.4-16 0-22.4 16-6.4 22.4 0c6.4 6.4 6.4 16 0 22.4z m-22.4 158.4c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4z m-124.8-100.8c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4z m107.2-17.6c-16 16-41.6 16-56 0s-16-41.6 0-56 41.6-16 56 0 16 40 0 56z" fill="#2F4BFF" /></svg>
        },
        {
            "title": "AI-Ready Cloud & DevOps Setup",
            "description": "Architect secure and scalable cloud environments tailored for AI workloads and modern deployments.",
            "tags": ["cloud", "devops", "deployment", "vector-db"],
            "image": "background7.jpg",
            "icon": null
        }
    ];

export function Services() {
    const [leftGlow, setLeftGlow] = useState(false);
    const [rightGlow, setRightGlow] = useState(false);

    const handleUpdateGlow = (swiper: any) => {
        setLeftGlow(!swiper.isBeginning);
        setRightGlow(!swiper.isEnd);
    };

    return (
        <>
            <section className="padding-x mt-24 mb-24 service-section">
                <div className="flex justify-between">
                    <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                        High impact services<br /> <span className="text-gray-500">build for <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">growth</span></span>
                    </div>
                </div>
                <Swiper
                    slidesPerView={4.3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    onInit={(swiper) => handleUpdateGlow(swiper)}
                    onSlideChange={(swiper) => handleUpdateGlow(swiper)}
                    onReachBeginning={(swiper) => handleUpdateGlow(swiper)}
                    onReachEnd={(swiper) => handleUpdateGlow(swiper)}
                    className={`mySwiper text-center mt-10 ${leftGlow ? 'left-glow' : ''} ${rightGlow ? 'right-glow' : ''}`}
                >
                    {
                        services.map(service => {
                            if (service.image) {
                                return <SwiperSlide>
                                    <div key={service.title} className="group rounded-xl overflow-hidden"
                                        style={{
                                            backgroundImage: `url('/${service.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        <div className="backdrop-blur-xl text-white relative flex flex-col justify-between py-6 px-8 h-[440px]">
                                            <div className="text-[16px] font-semibold text-center">{service.title}</div>
                                            <div className="">
                                                {service.description}
                                            </div>
                                            <div className="flex gap-2 flex-wrap justify-center">
                                                {
                                                    service.tags.map(tag => <div key={tag} className="transition-all duration-500 group-hover:bg-white group-hover:text-black border border-neutral-300 text-xs rounded-full py-1 px-3">{tag}</div>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }
                            else {
                                return <SwiperSlide>
                                    <div key={service.title} className="group py-6 px-8 bg-gray-card  rounded-xl flex flex-col justify-between h-[440px]">
                                        <div className="flex flex-col gap-5">
                                            <div className="text-[16px] font-semibold text-center">{service.title}</div>
                                            <div className="flex justify-center">
                                                {service.icon}
                                            </div>
                                            <div className="">
                                                {service.description}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap justify-center">
                                            {
                                                service.tags.map(tag => <div key={tag} className="transition-all duration-500 group-hover:bg-black group-hover:text-white border border-neutral-400 text-xs rounded-full py-1 px-3">{tag}</div>)
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }
                        })
                    }
                </Swiper>
            </section >
        </>

    );
}