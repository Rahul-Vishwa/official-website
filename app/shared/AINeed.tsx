import { BadgeDollarSign, Brain, BrainCircuit, CircleCheck, Clock, Cpu, DollarSign, PiggyBank, Save, TrendingUp, UserCheck, Zap } from "lucide-react";

export default function AINeed() {
    return (
        <section className="padding-x mb-20">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                Why you need AI?<br /> <span className="text-gray-500">Unmatched <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">business growth</span></span>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-4 flex gap-4 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div>
                            <Brain size={30} stroke="url(#grad)" />
                        </div>
                        <div>
                            <p>
                                72% of enterprises integrate AI for 40% productivity gains and 35% cost reductions, powering a $243B market by 2025.
                            </p>
                            <p className="mt-3">
                                This means your customers get streamlined operations—automated workflows that save hours daily, intelligent personalization boosting conversions, and predictive insights preventing costly disruptions—all without added complexity or staff training.
                            </p>
                            <p className="mt-3">
                                Early adopters achieve 2.3x revenue growth as AI handles routine tasks, letting teams focus on strategic innovation while delivering seamless, always-on experiences users love.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 overflow-hidden bg-gray-200 border border-neutral-300 rounded-xl relative">
                        <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 
                            bg-[radial-gradient(circle,rgba(147,197,253,0.5),transparent_70%)] 
                            blur-2xl">
                        </div>
                        <div className="pointer-events-none absolute -bottom-10 right-35 w-40 h-40 
                            bg-[radial-gradient(circle,rgba(192,132,252,0.3),transparent_70%)] 
                            blur-2xl">
                        </div>

                        <table className="w-full">
                            <thead>
                                <tr className="">
                                    <th className="pb-1 text-left">Aspect</th>
                                    <th className="pb-1 text-center">Without AI</th>
                                    <th className="pb-1 text-right">With AI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-1 font-bold">Interaction</td>
                                    <td className="py-1 text-center">Static</td>
                                    <td className="py-1 text-right">Adaptive</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-bold">Personalization</td>
                                    <td className="py-1 text-center">Generic</td>
                                    <td className="py-1 text-right">Dynamic</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-bold">Operations</td>
                                    <td className="py-1 text-center">Manual</td>
                                    <td className="py-1 text-right">Automated</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-bold">Insights</td>
                                    <td className="py-1 text-center">Basic</td>
                                    <td className="py-1 text-right">Predictive</td>
                                </tr>
                                <tr>
                                    <td className="pt-1 font-bold">Scaling</td>
                                    <td className="pt-1 text-center">Fixed</td>
                                    <td className="pt-1 text-right">Intelligent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <div className="">
                                <Zap size={30} stroke="url(#grad)" />
                            </div>
                        </div>
                        <div className="text-[16px] font-bold">Effortless Automation</div>
                        <div className="mt-3">AI handles routine workflows like inventory tracking and order processing, saving customers 50% time on daily operations while eliminating manual errors.</div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <UserCheck size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-[16px] font-bold">Instant Personalization</div>
                        <div className="mt-3">Adaptive interfaces analyze behavior in real-time, boosting conversions by 31% and delivering tailored experiences that make every interaction feel custom-built.</div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <Clock size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-[16px] font-bold">Faster Operations</div>
                        <div className="mt-3">Predictive analytics forecasts demand and prevents 85% of disruptions, enabling seamless scaling during peak loads without added staff or infrastructure.</div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22" stroke="#B794F4" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div className="text-[16px] font-bold">Cost Elimination</div>
                        <div className="mt-3">Reduce support overhead by 40% through intelligent self-service features, freeing budget for growth while maintaining 99.9% uptime.</div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <TrendingUp size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-[16px] font-bold">Revenue Acceleration</div>
                        <div className="mt-3">AI-powered recommendations and insights drive 2.3x revenue growth by uncovering opportunities and optimizing pricing in real-time.</div>
                    </div>
                    <div className="col-span-2 text-black w-full p-8 bg-gray-200 border border-neutral-300 rounded-xl">
                        <div className="mb-4">
                            <CircleCheck size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-[16px] font-bold">Market Truth</div>
                        <div className="mt-3">78% accelerated adoption this year—non-AI products lose 27% more customers. AI simplifies work, saves money, accelerates results.</div>
                    </div>
                </div>
            </div>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}