import { BadgeDollarSign, BadgeDollarSignIcon, CircleDollarSignIcon, DollarSign } from "lucide-react";

export default function WhyUs() {
    return (
        <section className="mb-20 padding-x">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                Why businesses pick us <br />
                <span className="text-gray-500">driven by <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">innovation</span></span>
            </div>
            <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-5">
                <div className="col-span-1 row-span-1 p-8 bg-gray-card rounded-xl flex flex-col gap-3 transition-colors duration-500 hover:bg-linear-to-br hover:from-[#d0c4f8] hover:to-[#fcdccc]">
                    <div className="text-xl font-semibold">
                        Custom Solutions Tailored to Your Business
                    </div>
                    <div>
                        No templates, no one-size-fits-all tools. Every solution-AI agents, dashboards, or automation workflows-is designed around your processes, constraints, and long-term growth goals.
                    </div>
                </div>

                <div className="col-span-1 row-span-1 p-8 bg-gray-card rounded-xl flex flex-col gap-3 transition-colors duration-500 hover:bg-linear-to-br hover:from-[#d0c4f8] hover:to-[#fcdccc]">
                    <div className="text-xl font-semibold">
                        High-Quality Engineering Standards
                    </div>
                    <div>
                        We build with production in mind: clean and maintainable code, scalable architectures, cloud-ready deployments, and built-in monitoring so your product stays reliable.
                    </div>
                </div>


                <div className="col-span-1 flex flex-col justify-between row-span-2 p-8 bg-linear-to-br from-[#d0c4f8] to-[#fcdccc] rounded-xl gap-6">
                    <div className="">
                        <DollarSign size={60} className="text-neutral-600" />
                    </div>
                    <div>

                    <div className="text-3xl font-semibold">
                        AI That Makes Financial Sense
                    </div>
                    <div className="mt-5">
                        We design AI systems with controlled inference costs, efficient architectures, and explicit trade-offs between accuracy, latency, and spend. From model selection and caching strategies to batching, rate limits, and fallback logic—every decision is made with long-term sustainability in mind.
                    </div>
                    </div>
                </div>

                <div className="col-span-1 row-span-1 p-8 bg-gray-card rounded-xl flex flex-col gap-3 transition-colors duration-500 hover:bg-linear-to-br hover:from-[#d0c4f8] hover:to-[#fcdccc]">
                    <div className="text-xl font-semibold">
                        Transparent Process & Collaboration
                    </div>
                    <div>
                        You stay informed at every step with weekly demos, clear milestones, and real-time updates. Our process is collaborative, predictable, and focused on steady delivery.
                    </div>
                </div>

                <div className="col-span-1 row-span-1 p-8 bg-gray-card rounded-xl flex flex-col gap-3 transition-colors duration-500 hover:bg-linear-to-br hover:from-[#d0c4f8] hover:to-[#fcdccc]">
                    <div className="text-xl font-semibold">
                        Long-Term Support & Iteration
                    </div>
                    <div>
                        Launch is not the end. We help you refine, optimize, and extend your platform over time-whether that’s performance improvements, new AI features, or ongoing maintenance.
                    </div>
                </div>
            </div >
        </section >
    );
}