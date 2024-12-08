import HeroSection_1 from "./components/HeroSection_1";
import Image from "next/image";
import backgroundimage from "../../public/backgroudImage.png"
import Header from "./components/Header";




export default function Home() {
  return (

    <div className="background">
      
      <div className="div relative z-10"> <Header/></div>
      <div className="div relative z-10"> <HeroSection_1  /></div>
      <Image src={backgroundimage} alt="" className="top-0 absolute opacity-5 w-[1920px] h-auto z-0"></Image>
     
    

    </div>
  );
}
