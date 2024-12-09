import HeroSection_1 from "./components/HeroSection_1";
import Image from "next/image";
import backgroundimage from "../../public/backgroudImage.png"
import Header from "./components/Header";
import HeroSection_2 from "./components/HeroSection_2";
import HeroSection_3 from "./components/HeroSection_3";



export default function Home() {
  return (

    <div>
      
      <div className="div relative z-10"> <Header/></div>
      <div className="div relative z-10"> <HeroSection_1  /></div>
      <Image src={backgroundimage} alt="" className="top-0 absolute opacity-5 w-[1920px] h-auto z-0"></Image>
       
    <HeroSection_2/>
    <HeroSection_3/>
 {/* <Image
        className="UnsplashInjdgkcwhp0 w-[444.10px] h-[532.30px] left-[1172.97px] top-[681.95px] absolute origin-top-left rotate-[-76.86deg]"
        src={foodimage1}
        alt=""
      /> */}
    </div>
  );
}
