import { MoveUpRightIcon } from "lucide-react";
import { cssClass } from "../css-classes";

export function Blogs() {
    return (
        <section className="padding-x mb-10 md:mb-24">
            <div className="montserrat-normal leading-tight md:leading-12 text-2xl md:text-[40px] text-wrap">
                Insights & engineering<br />
                <span className="text-gray-500">built from <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">real work</span></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <div className="bg-gray-card border border-gray-200 rounded-xl flex flex-col xl:flex-row gap-4 p-4 group">
                    <div className="relative rounded-md overflow-hidden h-48 xl:h-full xl:min-h-48 flex-1">
                        <div className="absolute w-full h-full z-20 bg-black/50 transition-all duration-500 group-hover:bg-black/10"></div>
                        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*l21qi3nJNs3Tleoc24SR6Q.jpeg" className="absolute object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="text-lg font-semibold">
                            Angular v20 is Here - What’s New, and Why It Matters
                        </div>
                        <div className="mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quae iste, quis ipsum corrupti non eos nihil ab molestiae omnis quas amet voluptatum! Itaque doloribus?
                        </div>
                        <div className="mt-5 inline-flex items-center overflow-hidden rounded-full bg-black text-white transition-all duration-500 ease-out px-3 py-2 max-w-[38px] group-hover:px-5 group-hover:max-w-[160px]">
                            <MoveUpRightIcon
                                size={16}
                                className="transition-all duration-300 ease-out shrink-0 group-hover:opacity-0 group-hover:w-0 group-hover:mr-0"
                            />
                            <span className="cursor-pointer ml-0 whitespace-nowrap opacity-0 transition-all duration-300 delay-150 group-hover:ml-0 group-hover:opacity-100">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-card border border-gray-200 rounded-xl flex flex-col xl:flex-row gap-4 p-4 group">
                    <div className="relative rounded-md overflow-hidden h-48 xl:h-full xl:min-h-48 flex-1">
                        <div className="absolute w-full h-full z-20 bg-black/50 transition-all duration-500 group-hover:bg-black/10"></div>
                        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pskF5dv7GpP31jJGXQeTEQ.jpeg" className="absolute object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="text-lg font-semibold">
                            Angular v20 is Here - What’s New, and Why It Matters
                        </div>
                        <div className="mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quae iste, quis ipsum corrupti non eos nihil ab molestiae omnis quas amet voluptatum! Itaque doloribus?
                        </div>
                        <div className="mt-5 inline-flex items-center overflow-hidden rounded-full bg-black text-white transition-all duration-500 ease-out px-3 py-2 max-w-[38px] group-hover:px-5 group-hover:max-w-[160px]">
                            <MoveUpRightIcon
                                size={16}
                                className="transition-all duration-300 ease-out shrink-0 group-hover:opacity-0 group-hover:w-0 group-hover:mr-0"
                            />
                            <span className="cursor-pointer ml-0 whitespace-nowrap opacity-0 transition-all duration-300 delay-150 group-hover:ml-0 group-hover:opacity-100">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-card border border-gray-200 rounded-xl flex flex-col xl:flex-row gap-4 p-4 group">
                    <div className="relative rounded-md overflow-hidden h-48 xl:h-full xl:min-h-48 flex-1">
                        <div className="absolute w-full h-full z-20 bg-black/50 transition-all duration-500 group-hover:bg-black/10"></div>
                        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BV0eVn9HVKA-AKk0uYwxWQ.jpeg" className="absolute object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="text-lg font-semibold">
                            Angular v20 is Here - What’s New, and Why It Matters
                        </div>
                        <div className="mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quae iste, quis ipsum corrupti non eos nihil ab molestiae omnis quas amet voluptatum! Itaque doloribus?
                        </div>
                        <div className="mt-5 inline-flex items-center overflow-hidden rounded-full bg-black text-white transition-all duration-500 ease-out px-3 py-2 max-w-[38px] group-hover:px-5 group-hover:max-w-[160px]">
                            <MoveUpRightIcon
                                size={16}
                                className="transition-all duration-300 ease-out shrink-0 group-hover:opacity-0 group-hover:w-0 group-hover:mr-0"
                            />
                            <span className="cursor-pointer ml-0 whitespace-nowrap opacity-0 transition-all duration-300 delay-150 group-hover:ml-0 group-hover:opacity-100">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-card border border-gray-200 rounded-xl flex flex-col xl:flex-row gap-4 p-4 group">
                    <div className="relative rounded-md overflow-hidden h-48 xl:h-full xl:min-h-48 flex-1">
                        <div className="absolute w-full h-full z-20 bg-black/50 transition-all duration-500 group-hover:bg-black/10"></div>
                        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U5cGt5haeIKECZBZUXcOqw.png" className="absolute object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="text-lg font-semibold">
                            Angular v20 is Here - What’s New, and Why It Matters
                        </div>
                        <div className="mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quae iste, quis ipsum corrupti non eos nihil ab molestiae omnis quas amet voluptatum! Itaque doloribus?
                        </div>
                        <div className="mt-5 inline-flex items-center overflow-hidden rounded-full bg-black text-white transition-all duration-500 ease-out px-3 py-2 max-w-[38px] group-hover:px-5 group-hover:max-w-[160px]">
                            <MoveUpRightIcon
                                size={16}
                                className="transition-all duration-300 ease-out shrink-0 group-hover:opacity-0 group-hover:w-0 group-hover:mr-0"
                            />
                            <span className="cursor-pointer ml-0 whitespace-nowrap opacity-0 transition-all duration-300 delay-150 group-hover:ml-0 group-hover:opacity-100">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <button className={cssClass.primaryButton}>View More</button>
            </div>
        </section>
    )
}