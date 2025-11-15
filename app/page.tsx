import Chat from "./components/Chat";
import { Services } from "./components/Services";
import { cssClass } from "./css-classes";
import AutoResizeTextarea from "./shared/AutoResizeTextarea";

export default function Home() {
  return (
    <>
      <div className="padding-x">
        <section className=" w-full mt-40">
          <img src="/blob.png" className="blob blob-blue-fixed"></img>
          <img src="/blob.png" className="blob blob-blue"></img>
          <img src="/blob.png" className="blob blob-purple"></img>
          <img src="/blob.png" className="blob blob-voilet"></img>
          <img src="/blob.png" className="blob blob-yellow"></img>
          <div className="flex flex-col items-center gap-5 mb-10">
            <div className="montserrat-normal w-[700px] leading-16 text-center text-[50px] text-wrap">
              Future ready <br /> websites built with <br /> <span className={cssClass.gradientText}>AI</span> precision
            </div>
            <div>
              From workflow automation to smart recommendations.
            </div>
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

      <Chat />


      {/* <div className="card">
          <video autoPlay={true} muted loop playsInline>
            <source src="/brain-glitch.mp4" type="video/mp4"></source>
          </video>
        </div> */}
    </>
  );
}

