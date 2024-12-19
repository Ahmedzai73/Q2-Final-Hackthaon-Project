import HeroSection_1 from "../../components/HomePage/HeroSection_1";
import Header from "../../components/HomePage/Header";
import HeroSection_2 from "../../components/HomePage/HeroSection_2";
import HeroSection_3 from "../../components/HomePage/HeroSection_3";
import HeroSection_4 from "../../components/HomePage/HeroSection_4";
import HeroSection_5 from "../../components/HomePage/HeroSection_5";
import HeroSection_6 from "../../components/HomePage/HeroSection_6";
import HeroSection_7 from "../../components/HomePage/HeroSection_7";
import HeroSection_8 from "../../components/HomePage/HeroSection_8";
import HeroSection_9 from "../../components/HomePage/HeroSection_9";
import HeroSection_10 from "../../components/HomePage/HeroSection_10";
import Footer_HA from "../../components/HomePage/Footer_HA";
import Image from "next/image";
import backgroundimage from "../../../../public/backgroudImage.png";

export default function HomePage() {
  return (
    <div className="relative max-w-full h-auto mx-auto ">
      <Image
        src={backgroundimage}
        alt="background food image"
        className="absolute top-0 w-full h-auto object-cover opacity-5 z-0"
      />
      <div className="relative z-10">
       <div className="header mt-[45px]"><Header /></div>            {/* Header! -- Navbar*/}
        <HeroSection_1 />     {/* Its Quick & Amusing! -- The Art of speed food Quality*/}
        <HeroSection_2 />     {/* About us -- We Create the best foody product*/}
        <HeroSection_3 />     {/*  Food Category -- Choose Food Iteam*/}
        <HeroSection_4 />     {/* Our Menu -- Choose Your Favourite Food*/}
        <HeroSection_5 />     {/* Our Menu -- Choose Your Favourite Food*/}
        <HeroSection_6 />
        <HeroSection_7 />
        <HeroSection_8 />
        <HeroSection_9 />
        <HeroSection_10 />
        <Footer_HA />
      </div>
    </div>
  );
}
