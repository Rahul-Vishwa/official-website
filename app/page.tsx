import { Highlights } from "./components/Highlights";
import { Services } from "./components/Services";
import { cssClass } from "./css-classes";
import { Footer } from "./shared/Footer";
import AgencySections from "./shared/Process";
import { TechStack } from "./shared/TechStack";
import { Testimonial } from "./shared/Testimonial";
import AINeed from "./shared/AINeed";
import Robot from "./shared/Robot";

export default function Home() {
  return (
    <>
      {/* <div className="relative">
        <div className="absolute -top-40 w-full h-[700px] opacity-30 pointer-events-none grid-lines"/>
      </div> */}
      {/* <div className="inline-block bot-float mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
              </div>  */}

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
            <h2 className="text-lg">
              From workflow automation to smart recommendations.
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
      <Robot />
      <Highlights />
      <AINeed />
      <TechStack />
      <AgencySections />
      <Testimonial />
      <Footer />
    </>
  );
}

