export function Highlights() {
    return (
        <section className="padding-x mb-10 md:mb-24">
            <div>
                <div className="montserrat-normal leading-tight md:leading-12 text-2xl md:text-[40px] text-wrap">
                    Smarter AI experiences<br />
                    <span className="text-gray-500">crafted for <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">automation</span></span>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-10 h-[190px] overflow-hidden image-gradient">
                            <img src="/workflow.png" className="rounded-sm shadow-sm"></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">Workflow Automation</div>
                            <div className="mt-3">AI-driven workflows that execute tasks end-to-end—approvals, data syncing, follow-ups, scheduling, and more. Reduce manual effort and scale operations automatically.</div>
                        </div>
                    </div>

                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-10 h-[190px] overflow-hidden image-gradient">
                            <img src="/searchbot.png" className=""></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">RAG</div>
                            <div className="mt-3">Search that understands meaning, not keywords. Instantly surface the most relevant documents, answers, or actions—even in large, complex systems.</div>
                        </div>
                    </div>


                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-6 h-[190px] overflow-hidden image-gradient">
                            <img src="/chatbot-white.png" className=""></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">Chatbot</div>
                            <div className="mt-3">Give users a natural, human-like interface to your product. Our assistants can guide onboarding, support customers, generate content, and trigger actions inside your system.</div>
                        </div>
                    </div>


                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-6 h-[190px] overflow-hidden image-gradient">
                            <img src="/recommendation.png" className=""></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">Personalization & Recommendation Engine</div>
                            <div className="mt-3">Deliver hyper-personalized product suggestions, content recommendations, and next-best actions based on real-time user behavior and historical patterns.</div>
                        </div>
                    </div>


                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-10 h-[190px] overflow-hidden image-gradient">
                            <img src="/performance.png" className="rounded-md"></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">Predictive Analytics & Business Intelligence</div>
                            <div className="mt-3">AI uncovers hidden trends, predicts outcomes, and offers actionable insights. Get clarity on what’s happening, why it’s happening, and what to do next.</div>
                        </div>
                    </div>


                    <div className="transition-shadow border border-transparent duration-500 ease-out hover:shadow-md hover:border hover:border-gray-300 col-span-1 lg:col-span-2 rounded-xl bg-gray-card  p-6 md:p-8">
                        <div className="px-10 h-[190px] overflow-hidden image-gradient">
                            <img src="/documentupload.png" className="rounded-md"></img>
                        </div>
                        <div>
                            <div className="font-semibold text-xl">Document Intelligence</div>
                            <div className="mt-3">Transform PDFs, invoices, contracts, and images into structured, usable data. Our AI identifies entities, extracts fields, classifies documents, and summarizes content with high accuracy.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}