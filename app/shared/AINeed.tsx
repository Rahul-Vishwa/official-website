import { BadgeDollarSign, Brain, BrainCircuit, CircleCheck, Clock, Cpu, DollarSign, PiggyBank, Save, TrendingUp, UserCheck, Zap } from "lucide-react";

export default function AINeed() {
    return (
        <section className="padding-x mb-10 md:mb-24">
            <div className="montserrat-normal leading-tight md:leading-12 text-2xl md:text-[40px] text-wrap">
                Why you need AI?<br /> <span className="text-gray-500">Unmatched <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">business growth</span></span>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <div className="">
                                <Zap size={30} stroke="url(#grad)" />
                            </div>
                        </div>
                        <div className="text-xl font-bold">Effortless Automation</div>
                        <div className="mt-3">AI handles routine workflows like inventory tracking and order processing, saving customers 50% time on daily operations while eliminating manual errors.</div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <UserCheck size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-xl font-bold">Instant Personalization</div>
                        <div className="mt-3">Adaptive interfaces analyze behavior in real-time, boosting conversions by 31% and delivering tailored experiences that make every interaction feel custom-built.</div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <Clock size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-xl font-bold">Faster Operations</div>
                        <div className="mt-3">Predictive analytics forecasts demand and prevents 85% of disruptions, enabling seamless scaling during peak loads without added staff or infrastructure.</div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" stroke="#3B5BDB" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div className="text-xl font-bold">Cost Elimination</div>
                        <div className="mt-3">Reduce support overhead by 40% through intelligent self-service features, freeing budget for growth while maintaining 99.9% uptime.</div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <TrendingUp size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-xl font-bold">Revenue Acceleration</div>
                        <div className="mt-3">AI-powered recommendations and insights drive 2.3x revenue growth by uncovering opportunities and optimizing pricing in real-time.</div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 text-black w-full p-6 md:p-8 bg-gray-card rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border hover:border-blue-600">
                        <div className="mb-4">
                            <CircleCheck size={30} stroke="url(#grad)" />
                        </div>
                        <div className="text-xl font-bold">Market Truth</div>
                        <div className="mt-3">78% accelerated adoption this year—non-AI products lose 27% more customers. AI simplifies work, saves money, accelerates results.</div>
                    </div>
                </div>
            </div>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3B5BDB" />
                        <stop offset="100%" stopColor="#9D4EDD" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}