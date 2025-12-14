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
import WhyUs from "./components/WhyUs";
import Cta from "./shared/Cta";

export default function Home() {
  return (
    <>
      <div className="padding-x relative overflow-x-hidden">
        <section className="w-full mt-20 md:mt-32 lg:mt-40 overflow-x-hidden">
          <img src="/blob.png" className="blob blob-blue"></img>
          <img src="/blob.png" className="blob blob-purple"></img>
          <img src="/blob.png" className="blob blob-voilet"></img>
          <img src="/blob.png" className="blob blob-yellow"></img>
          <img src="/blob.png" className="blob blob-orange"></img>
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5 mb-8 md:mb-10">
            <h1 className="montserrat-normal w-full sm:w-[90%] md:w-[700px] leading-tight md:leading-16 text-center text-3xl sm:text-4xl md:text-[50px] font-bold text-wrap">
              Future ready <br /> websites built with <br /> <span className={cssClass.gradientText}>AI precision</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] text-center">
              Full-stack web applications with production-grade AI features. RAG systems, intelligent agents, and automation workflows-integrated seamlessly into your product.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2 w-full sm:w-auto px-4 sm:px-0">
              <button className={cssClass.gradientButton}>Work with us</button>
              <button className={cssClass.primaryButton}>Explore More</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl mt-8 md:mt-12 h-[200px] sm:h-[250px] md:h-[300px] flex items-center">
            <img src="/neural-network.jpg"></img>
          </div>
        </section>
      </div>

      <Services />
      <Highlights />
      <Robot />
      <AINeed />
      <Process />
      <WhyUs />
      <TechStack />
      <Outcomes />
      <Faq />
      <Cta />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  );
}

