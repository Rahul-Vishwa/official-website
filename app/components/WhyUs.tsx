export default function WhyUs() {
    return (
        <section className="mb-20 padding-x">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                Why businesses pick us <br />
                <span className="text-gray-500">driven by <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">innovation</span></span>
            </div>
            <div className="mt-10 grid grid-cols-6 gap-5">
                <div className="relative overflow-hidden col-span-2 border border-neutral-300 bg-gray-200 rounded-xl">
                    <div className="absolute w-full h-full z-10 bg-gray-200/85"></div>
                    <img
                        src="/shape.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="p-8 flex flex-col gap-3 z-20">
                        <div className="text-[16px] font-semibold z-20">
                            AI-Driven Development, Real Business Outcomes
                        </div>
                        <div className="z-20">
                            We don’t just build features — we engineer intelligent systems that reduce manual work, speed up operations, and create measurable impact for your business.
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden col-span-2 border border-neutral-300 bg-gray-200 rounded-xl">
                    <div className="absolute w-full h-full z-10 bg-gray-200/85"></div>
                    <img
                        src="/ball.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="p-8 flex flex-col gap-3 z-20">
                        <div className="text-[16px] font-semibold z-20">
                            Custom Solutions Tailored to Your Business
                        </div>
                        <div className="z-20">
                            We don’t use generic templates. Every product — whether it's an AI chatbot, internal dashboard, or automation tool — is crafted based on your operations, workflows, and growth goals.
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden col-span-2 border border-neutral-300 bg-gray-200 rounded-xl">
                    <div className="absolute w-full h-full z-10 bg-gray-200/90"></div>
                    <img
                        src="/prism.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </div>

                <div className="col-span-2 p-8 border border-neutral-300 bg-gray-200 rounded-xl flex flex-col gap-3">
                    <div className="text-[16px] font-semibold">
                        High-Quality Engineering Standards
                    </div>
                    <div>
                        We follow modern engineering principles:
                        <ul className="mt-3 mb-3 list-disc list-inside">
                            <li>
                                Clean, maintainable code
                            </li>

                            <li>
                                Scalable architectures
                            </li>
                            <li>
                                Cloud-ready deployments
                            </li>
                            <li>
                                Built-in analytics, monitoring & documentation
                            </li>
                        </ul>
                        Your product stays robust as your user base grows.
                    </div>
                </div>
                <div className="col-span-2 p-8 border border-neutral-300 bg-gray-200 rounded-xl flex flex-col gap-3">
                    <div className="text-[16px] font-semibold">
                        Transparent Process & Collaboration
                    </div>
                    <div>
                        Weekly demos, real-time progress updates, and open communication ensure you're always in control. No surprises — just clear delivery.
                    </div>
                </div>
                <div className="col-span-2 p-8 border border-neutral-300 bg-gray-200 rounded-xl flex flex-col gap-3">
                    <div className="text-[16px] font-semibold">
                        Full Ownership — No Vendor Lock-In
                    </div>
                    <div>
                        You get complete access to code, documentation, and infrastructure setups.
                        Your product remains truly yours, forever.
                    </div>
                </div>
                <div className="col-span-2 p-8 border border-neutral-300 bg-gray-200 rounded-xl flex flex-col gap-3">
                    <div className="text-[16px] font-semibold">
                        Long-Term Support & Iteration
                    </div>
                    <div>
                        We help maintain, optimize, and extend your platform beyond launch.
                        From bug fixes to new AI features — we stay with you as your product evolves.
                    </div>
                </div>
            </div>
        </section>
    );
}