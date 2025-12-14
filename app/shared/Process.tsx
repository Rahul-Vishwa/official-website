import { BrainCircuit, Database, FileText, Globe, Zap } from "lucide-react";

const process: {
    title: string;
    description: string;
}[] = [
        {
            "title": "Discovery & Strategy",
            "description": "We map your goals, user needs, and business workflows—then identify where AI delivers the strongest ROI. No fluff. Only high-impact use cases."
        },
        {
            "title": "Data & Architecture Design",
            "description": "We design the foundation: data pipelines, storage models, vector search, integrations, and security layers—everything your AI needs to perform reliably."
        },
        {
            "title": "AI Prototyping & Model Selection",
            "description": "We experiment fast. Prototypes help validate the right LLMs, embeddings, agents, or predictive models before full development begins."
        },
        {
            "title": "Full-Stack Development",
            "description": "We build the product around your AI: backend services, frontend UI, real-time systems, dashboards, and automation. The AI becomes a natural part of the user experience."
        },
        {
            "title": "Quality, Safety & AI Guardrails",
            "description": "We enforce accuracy, prevent hallucinations, and add validation, monitoring, and compliance. Your AI stays safe, correct, and predictable."
        },
        {
            "title": "Deployment & Continuous Improvement",
            "description": "We launch on scalable cloud infrastructure and continuously refine the AI with real-world usage, tuning, and performance optimization."
        }
    ];

export default function Process() {
    return (
        <section id="process" className="padding-x mb-24">
            <div className="montserrat-normal leading-tight md:leading-12 text-2xl md:text-[40px] text-wrap">
                Our workflow<br /> <span className="text-gray-500">optimized for <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">scalability</span></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    process.map((step, index) => (
                        <div key={step.title} className="relative flex gap-8 bg-black rounded-xl text-white p-8 overflow-hidden group">
                            <div className="text-white -bottom-10 right-20 text-4xl">
                                {index + 1}
                            </div>
                            <div>
                                <div className="pointer-events-none absolute -top-25 -right-10 w-50 h-50 
                            bg-[radial-gradient(circle,rgba(147,197,253,0.5),transparent_70%)] 
                            blur-2xl transition-all duration-500 group-hover:translate-y-40">
                                </div>
                                <div className="pointer-events-none absolute -bottom-10 -left-25 w-50 h-50 
                            bg-[radial-gradient(circle,rgba(192,132,252,0.5),transparent_70%)] 
                            blur-2xl transition-all duration-700 group-hover:-translate-y-20">
                                </div>
                                <div className="text-xl font-semibold">{step.title}</div>
                                <div className="mt-3">{step.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}