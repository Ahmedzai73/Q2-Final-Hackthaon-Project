import Header2 from "@/app/components/MenuPage/Header2";
import Herosection_01 from "@/app/components/MenuPage/Herosection_01";
import Herosection_02 from "@/app/components/MenuPage/Herosection_02";
import Herosection_03 from "@/app/components/MenuPage/Herosection_03";
import HeroSection_4 from "../../components/HomePage/HeroSection_5";
import HeroSection_05 from "../../components/MenuPage/HeroSection_05";
import HeroSection_06 from "../../components/MenuPage/HeroSection_06";
import HeroSection_07 from "../../components/MenuPage/HeroSection_07";
import Footer_HA from "../../components/HomePage/Footer_HA";



export default function Menu() {
  return (
    <div className="bg-whiteColor">
        <Header2 />
        <Herosection_01 />
        <Herosection_02 />
        <Herosection_03 />
        <div className="div bg-blackColor"><HeroSection_4 /></div>
       <HeroSection_05 />
       <HeroSection_06 />
       <HeroSection_07 />
       <div className="footer bg-blackColor">
        <div className="blackbox w-full h-[121px] mt-[121px]"/>
        <Footer_HA /></div>
    </div>
  )
}
