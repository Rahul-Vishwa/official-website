import { cssClass } from "../css-classes";
import NeuralCanvas from "./NeuralLink";

export default function Cta() {
    return (
        <section className="padding-x mb-20">
            <div className="relative overflow-hidden rounded-xl">
                <img src="/blob.png" className="blob blob-blue-highlight"></img>
                <img src="/blob.png" className="blob blob-purple-highlight"></img>
                <img src="/blob.png" className="blob blob-voilet-highlight"></img>
                <img src="/blob.png" className="blob blob-yellow-highlight"></img>
                {/* <NeuralCanvas /> */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 text-white bg-black px-6 md:px-8 py-8 md:py-10 pb-20 md:pb-30">
                    <div className="z-10">
                        <div className="text-2xl md:text-[40px] montserrat-normal bg-linear-to-r to-blue-500 from-purple-500 bg-clip-text text-transparent leading-tight md:leading-normal">
                            Ready to build something extraordinary?
                        </div>
                        <div className="text-lg mt-2">
                            Let’s design, develop, and deploy your next big idea.
                        </div>
                    </div>
                    <div className="z-10 mt-4">
                        <button type="button" className="px-6 py-3 rounded-md bg-linear-to-br from-blue-600 to-purple-600">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}