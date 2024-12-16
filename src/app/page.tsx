import HeroSection_1 from "./components/HeroSection_1";
import Image from "next/image";
import backgroundimage from "../../public/backgroudImage.png"
import Header from "./components/Header";
import HeroSection_2 from "./components/HeroSection_2";
import HeroSection_3 from "./components/HeroSection_3";
import HeroSection_4 from "./components/HeroSection_4";
import HeroSection_5 from "./components/HeroSection_5";
import HeroSection_6 from "./components/HeroSection_6";
import HeroSection_7 from "./components/HeroSection_7";
import HeroSection_8 from "./components/HeroSection_8";
import HeroSection_9 from "./components/HeroSection_9";
import HeroSection_10 from "./components/HeroSection_10";
import Footer_HS from "./components/Footer_HS";
import Footer_HSA from "./components/Footer_HSA";

// bg-[#0d0d0d]
export default function Home() {
  return (

    <div className=" max-w-[1920px] max-h-[8479px] mx-auto">
      
      <div className="div relative z-10"> <Header/></div>
      <div className="div relative z-10"> <HeroSection_1  /></div>
      <Image src={backgroundimage} alt="" className="top-0 absolute opacity-5 w-[1920px] h-auto z-0"></Image>
       
    <HeroSection_2/>
    <HeroSection_3/>
    <HeroSection_4/>
    <HeroSection_5/>
    <HeroSection_6/>
    <HeroSection_7/>
    <HeroSection_8/>
    <HeroSection_9/>
    <HeroSection_10/>
    <Footer_HS/>
    <Footer_HSA/>
    
 {/* <Image
        className="UnsplashInjdgkcwhp0 w-[444.10px] h-[532.30px] left-[1172.97px] top-[681.95px] absolute origin-top-left rotate-[-76.86deg]"
        src={foodimage1}
        alt=""
      /> */}












    </div>
  );
}
