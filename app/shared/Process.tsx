// import React from 'react';

import { BrainCircuit, Database, FileText, Globe, Zap } from "lucide-react";

// export default function AgencySections() {
//     return (
//         <div className="w-full">
//             {/* Process Section */}
//             <section className="padding-x mb-20">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="mb-10">
//                         <div className="montserrat-normal leading-12 text-[40px] text-wrap">
//                             High impact services<br /> <span className="text-gray-500">build for <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">growth</span></span>
//                         </div>
//                     </div>

//                     <svg width="0" height="0">
//                         <defs>
//                             <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                                 <stop offset="0%" stopColor="#4f46e5" />
//                                 <stop offset="100%" stopColor="#ec4899" />
//                             </linearGradient>
//                         </defs>
//                     </svg>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

//                         {[
//                             {
//                                 step: "01",
//                                 title: "Discovery",
//                                 description: "We analyze your business needs and identify AI integration opportunities that drive real value.",
//                                 icon: (
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24"
//                                         fill="none" stroke="url(#mainIconGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="m21 21-4.34-4.34" />
//                                         <circle cx="11" cy="11" r="8" />
//                                     </svg>
//                                 ),
//                             },
//                             {
//                                 step: "02",
//                                 title: "Strategy",
//                                 description: "Design a comprehensive roadmap with custom AI solutions tailored to your objectives.",
//                                 icon: (
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24" fill="none" stroke="url(#mainIconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"/><path d="m16 7-2.5 2.5"/><path d="M9 2h6"/></svg>
//                                 ),
//                             },
//                             {
//                                 step: "03",
//                                 title: "Development",
//                                 description: "Build scalable applications using cutting-edge AI technologies and best practices.",
//                                 icon: (
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24"
//                                         fill="none" stroke="url(#mainIconGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
//                                     </svg>
//                                 ),
//                             },
//                             {
//                                 step: "04",
//                                 title: "Launch & Support",
//                                 description: "Deploy with confidence and receive ongoing optimization and maintenance support.",
//                                 icon: (
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24"
//                                         fill="none" stroke="url(#mainIconGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//                                         <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//                                         <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//                                         <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//                                     </svg>
//                                 ),
//                             },
//                         ].map((item, index) => (
//                             <div key={index} className="relative group flex items-center">
//                                 <div className="gradient-shadow bg-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-xl border border-gray-300 hover:border-blue-200">
//                                     <div className="flex justify-between items-center">
//                                         <div className="text-5xl mb-4 opacity-70 group-hover:scale-110 transition-transform duration-300">
//                                             {item.icon}
//                                         </div>
//                                         <div className="text-4xl font-bold text-gray-200 mb-4">{item.step}</div>
//                                     </div>
//                                     <h3 className="text-[16px] font-semibold mb-3">{item.title}</h3>
//                                     <p className="text-gray-700 leading-relaxed">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="px-8 md:px-16 lg:px-24 mb-32">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="bg-linear-to-br from-pink-200 to-purple-800 rounded-xl p-12 md:p-16 text-center relative overflow-hidden">
//                         <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
//                         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

//                         <div className="relative z-10">
//                             <h2 className="text-4xl md:text-4xl font-bold text-black mb-6">
//                                 Ready to transform your business with AI?
//                             </h2>
//                             <p className="text-lg mb-8 max-w-2xl mx-auto">
//                                 Let's discuss how we can build intelligent solutions that drive growth and efficiency for your organization.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <button className="px-8 py-4 bg-linear-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
//                                     Schedule a Consultation
//                                 </button>
//                                 <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
//                                     View Case Studies
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="px-8 md:px-16 lg:px-24 mb-32">
//                 <div className="max-w-4xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                             Frequently asked <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">questions</span>
//                         </h2>
//                         <p className="text-gray-500 text-lg">Everything you need to know about our AI solutions</p>
//                     </div>

//                     <div className="space-y-4">
//                         {[
//                             {
//                                 question: "How long does it take to implement an AI solution?",
//                                 answer: "Timeline varies based on project complexity, typically ranging from 4-12 weeks. We'll provide a detailed timeline after understanding your specific requirements."
//                             },
//                             {
//                                 question: "Do you provide training for our team?",
//                                 answer: "Yes, we offer comprehensive training sessions to ensure your team can effectively use and maintain the AI solutions we implement."
//                             },
//                             {
//                                 question: "What AI technologies do you specialize in?",
//                                 answer: "We work with leading AI frameworks including LangChain, TensorFlow, and various LLMs. Our tech stack is continuously updated to include the latest innovations."
//                             },
//                             {
//                                 question: "Can AI solutions integrate with our existing systems?",
//                                 answer: "Absolutely. We design our solutions to seamlessly integrate with your current infrastructure, ensuring minimal disruption to your operations."
//                             },
//                             {
//                                 question: "What kind of support do you offer post-launch?",
//                                 answer: "We provide ongoing maintenance, performance monitoring, updates, and 24/7 technical support to ensure your AI solutions continue to perform optimally."
//                             }
//                         ].map((item, index) => (
//                             <details key={index} className="group bg-gray-100 rounded-xl overflow-hidden">
//                                 <summary className="cursor-pointer p-6 font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center">
//                                     {item.question}
//                                     <span className="text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
//                                 </summary>
//                                 <div className="px-6 pb-6 text-gray-600">
//                                     {item.answer}
//                                 </div>
//                             </details>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default function AgencySections() {
    return (
        <section className="padding-x mb-20">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                High impact services<br /> <span className="text-gray-500">build for <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">growth</span></span>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className=" w-full p-8 border border-blue-600/50 rounded-xl">
                        <div className="mb-5 bg-blue-600 w-min p-2 rounded-md">
                            <Zap size={25} className="text-white" />
                        </div>
                        <div className="text-[16px] font-bold">Requirement Analysis</div>
                        <div className="mt-3">
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                            This is the place where it all started and i started ending.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}