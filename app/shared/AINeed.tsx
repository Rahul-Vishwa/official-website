import { Brain, BrainCircuit, CircleCheck, Clock, Cpu, DollarSign, Save, TrendingUp, UserCheck, Zap } from "lucide-react";

export default function AINeed() {
    return (
        <section className="padding-x mb-20">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                Why you need AI?<br /> <span className="text-gray-500">Unmatched <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">business growth</span></span>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-4 flex gap-4 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div>
                            <Brain size={30} className="text-blue-600" />
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
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
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
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <Zap size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Effortless Automation</div>
                        <div className="mt-3">AI handles routine workflows like inventory tracking and order processing, saving customers 50% time on daily operations while eliminating manual errors.</div>
                    </div>
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <UserCheck size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Instant Personalization</div>
                        <div className="mt-3">Adaptive interfaces analyze behavior in real-time, boosting conversions by 31% and delivering tailored experiences that make every interaction feel custom-built.</div>
                    </div>
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <Clock size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Faster Operations</div>
                        <div className="mt-3">Predictive analytics forecasts demand and prevents 85% of disruptions, enabling seamless scaling during peak loads without added staff or infrastructure.</div>
                    </div>
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <DollarSign size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Cost Elimination</div>
                        <div className="mt-3">Reduce support overhead by 40% through intelligent self-service features, freeing budget for growth while maintaining 99.9% uptime.</div>
                    </div>
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <TrendingUp size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Revenue Acceleration</div>
                        <div className="mt-3">AI-powered recommendations and insights drive 2.3x revenue growth by uncovering opportunities and optimizing pricing in real-time.</div>
                    </div>
                    <div className="col-span-2 bg-linear-to-tl from-blue-400/10 to-purple-400/10 w-full p-8 border border-gray-400/60 bg-white rounded-xl">
                        <div className="mb-4">
                            <CircleCheck size={30} className="text-blue-600" />
                        </div>
                        <div className="text-[16px] font-bold">Market Truth</div>
                        <div className="mt-3">78% accelerated adoption this year—non-AI products lose 27% more customers. AI simplifies work, saves money, accelerates results.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}