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
        <section className="padding-x mb-24">
            <div className="montserrat-normal leading-12 text-[40px] text-wrap">
                Our workflow<br /> <span className="text-gray-500">optimized for <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">scalability</span></span>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    process.map((step, index) => (
                        <div key={step.title} className="relative bg-black rounded-xl text-white p-8 pb-26 overflow-hidden">
                            <div className="pointer-events-none absolute -top-25 -right-10 w-50 h-50 
                            bg-[radial-gradient(circle,rgba(147,197,253,0.6),transparent_70%)] 
                            blur-2xl">
                            </div>
                            <div className="pointer-events-none absolute -bottom-10 -left-25 w-50 h-50 
                            bg-[radial-gradient(circle,rgba(192,132,252,0.7),transparent_70%)] 
                            blur-2xl">
                            </div>
                            <div className="text-[16px] font-semibold">{step.title}</div>
                            <div className="mt-3">{step.description}</div>
                            <div className="text-white absolute -bottom-3 right-20 text-8xl">
                                {index + 1}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}