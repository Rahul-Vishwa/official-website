import { Highlights } from "./components/Highlights";
import { Services } from "./components/Services";
import { cssClass } from "./css-classes";
import { Footer } from "./shared/Footer";
import AgencySections from "./shared/Process";
import { TechStack } from "./shared/TechStack";
import { Testimonial } from "./shared/Testimonial";
import AINeed from "./shared/AINeed";
import Robot from "./shared/Robot";
import Process from "./shared/Process";
import Outcomes from "./components/Outcomes";
import { Blogs } from "./components/Blogs";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <>
      <div className="padding-x relative">
        <section className=" w-full mt-40">
          <img src="/blob.png" className="blob blob-blue-fixed"></img>
          <img src="/blob.png" className="blob blob-blue"></img>
          <img src="/blob.png" className="blob blob-purple"></img>
          <img src="/blob.png" className="blob blob-voilet"></img>
          <img src="/blob.png" className="blob blob-yellow"></img>
          <div className="flex flex-col items-center gap-5 mb-10">
            <h1 className="montserrat-normal w-[700px] leading-16 text-center text-[50px] font-bold text-wrap">
              Future ready <br /> websites built with <br /> <span className={cssClass.gradientText}>AI precision</span>
            </h1>
            <h2 className="text-lg w-[50%] text-center">
              Full-stack web applications with production-grade AI features. RAG systems, intelligent agents, and automation workflows-integrated seamlessly into your product.
            </h2>
            <div className="flex gap-5 mt-2">
              <button className={cssClass.gradientButton}>Work with us</button>
              <button className={cssClass.primaryButton}>Explore More</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl mt-12 h-[300px] flex items-center">
            <img src="/neural-network.jpg"></img>
          </div>
        </section>
      </div>

      <Services />
      <Highlights />
      <Robot />
      <AINeed />
      <Process />
      <TechStack />
      <Outcomes />
      <Faq />
      <Testimonial />
      <Footer />
    </>
  );
}

