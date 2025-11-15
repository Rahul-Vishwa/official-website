"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { SwiperContainer } from "swiper/element";

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
                    <div className="w-[50%] montserrat-normal leading-12 text-[40px] text-wrap">
                        High impact services<br /> <span className="text-gray-500">build for <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">growth</span></span>
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
                    className={`mySwiper mt-10 ${leftGlow ? 'left-glow' : ''} ${rightGlow ? 'right-glow' : ''}`}
                >
                    <SwiperSlide>
                        <div className="py-5 px-6 bg-gray-200 rounded-xl h-[420px] flex flex-col justify-between">
                            <div className="text-[16px] font-semibold text-center">Web Development</div>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1">
                                    <path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" />
                                    <path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" />
                                    <path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" />
                                    <path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" />
                                </svg>
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-background rounded-xl overflow-hidden">
                            <div className="backdrop-blur-md text-white relative flex flex-col justify-between py-5 px-6 h-[420px]">
                                <div className="text-[16px] font-semibold text-center">AI Automation</div>
                                <div className="">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-5 px-6 bg-gray-200 rounded-xl h-[420px] flex flex-col justify-between">
                            <div className="text-[16px] font-semibold text-center">recommendation Engine</div>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M304 592h416l104 296h-624L304 592z m328 128c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m-256-48c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m136 112c9.6 0 16-6.4 16-16s-6.4-16-16-16-16 6.4-16 16 6.4 16 16 16z m8-256c-12.8 0-24-11.2-24-24s11.2-24 24-24 24 11.2 24 24-11.2 24-24 24z m104 48c-9.6 0-16-6.4-16-16s6.4-16 16-16 16 6.4 16 16-6.4 16-16 16z" fill="#2F4BFF" /><path d="M622.4 112H401.6c9.6 76.8 14.4 142.4 14.4 176 0 35.2-65.6 248-200 592h593.6C673.6 536 608 323.2 608 288c0-33.6 4.8-99.2 14.4-176z m32 0c-9.6 78.4-14.4 144-14.4 176 0 28.8 67.2 248 198.4 580.8 1.6 3.2 1.6 8 1.6 11.2 0 17.6-14.4 32-32 32H214.4c-4.8 0-8 0-11.2-1.6-16-6.4-24-25.6-17.6-41.6C316.8 536 384 316.8 384 288c0-32-4.8-97.6-14.4-176H368c-9.6 0-16-6.4-16-16s6.4-16 16-16h288c9.6 0 16 6.4 16 16s-6.4 16-17.6 16c1.6 0 0 0 0 0z" fill="#08135B" /><path d="M424 480h48c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H416V480h8z" fill="#08135B" /></svg>
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-background2 rounded-xl overflow-hidden">
                            <div className="backdrop-blur-md text-white relative flex flex-col justify-between py-5 px-6 h-[420px]">
                                <div className="text-[16px] font-semibold text-center">AI Automation</div>
                                <div className="">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-5 px-6 bg-gray-200 rounded-xl h-[420px] flex flex-col justify-between">
                            <div className="text-[16px] font-semibold text-center">recommendation Engine</div>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M304 592h416l104 296h-624L304 592z m328 128c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m-256-48c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m136 112c9.6 0 16-6.4 16-16s-6.4-16-16-16-16 6.4-16 16 6.4 16 16 16z m8-256c-12.8 0-24-11.2-24-24s11.2-24 24-24 24 11.2 24 24-11.2 24-24 24z m104 48c-9.6 0-16-6.4-16-16s6.4-16 16-16 16 6.4 16 16-6.4 16-16 16z" fill="#2F4BFF" /><path d="M622.4 112H401.6c9.6 76.8 14.4 142.4 14.4 176 0 35.2-65.6 248-200 592h593.6C673.6 536 608 323.2 608 288c0-33.6 4.8-99.2 14.4-176z m32 0c-9.6 78.4-14.4 144-14.4 176 0 28.8 67.2 248 198.4 580.8 1.6 3.2 1.6 8 1.6 11.2 0 17.6-14.4 32-32 32H214.4c-4.8 0-8 0-11.2-1.6-16-6.4-24-25.6-17.6-41.6C316.8 536 384 316.8 384 288c0-32-4.8-97.6-14.4-176H368c-9.6 0-16-6.4-16-16s6.4-16 16-16h288c9.6 0 16 6.4 16 16s-6.4 16-17.6 16c1.6 0 0 0 0 0z" fill="#08135B" /><path d="M424 480h48c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H416V480h8z" fill="#08135B" /></svg>
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-background rounded-xl overflow-hidden">
                            <div className="backdrop-blur-md text-white relative flex flex-col justify-between py-5 px-6 h-[420px]">
                                <div className="text-[16px] font-semibold text-center">AI Automation</div>
                                <div className="">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis est corrupti amet dignissimos nulla, possimus atque dolorem provident. Dignissimos fugiat deserunt voluptatibus fugit distinctio magnam eligendi neque harum ad!
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section >
        </>

    );
}