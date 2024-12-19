import Image from "next/image";
import foodimage1 from "../../../../public/unsplash_lP5MCM6nZ5A@2x.png";
import foodimage2 from "../../../../public/unsplash_dphM2U1xq0U@2x.png";
import foodimage3 from "../../../../public/unsplash_CLMpC9UhyTo@2x.png";
import foodimage4 from "../../../../public/unsplash_-GFCYhoRe48@2x.png";
import foodimage5 from "../../../../public/unsplash_tzl1UCXg5Es@2x.png";
import foodimage6 from "../../../../public/unsplash_mmnKI8kMxpc@2x.png";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { PiWineLight  } from "react-icons/pi";


export default function HeroSection_4() {
  
  return (
    <div className="WhyChoseUs container max-w-[1320px] h-[716px] relative mx-auto mt-[120px] ">
    <Image className="UnsplashLp5mcm6nz5a w-[362px] h-[356px] left-0 top-0 absolute rounded-md" src={foodimage1}  alt=""/>
    <Image className="UnsplashClmpc9uhyto w-[244px] h-[306px] left-0 top-[372px] absolute rounded-md" src={foodimage3}  alt=""/>
    <Image className="UnsplashDphm2u1xq0u w-[281px] h-[231px] left-[378px] top-[120px] absolute rounded-md" src={foodimage2}  alt=""/>
    <Image className="UnsplashGfcyhore48 w-[221px] h-[226px] left-[260px] top-[372px] absolute rounded-md" src={foodimage4}  alt=""/>
    <Image className="UnsplashTzl1ucxg5es w-[161px] h-[168px] left-[497px] top-[366px] absolute rounded-md" src={foodimage5}  alt=""/>
    <Image className="UnsplashMmnki8kmxpc w-[161px] h-[166px] left-[497px] top-[550px] absolute rounded-md" src={foodimage6} alt="" />
    <div className="ExtaOrdinaryTasteAndExperienced left-[794px] top-[110px] absolute">
      <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">Ex</span>
      <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">ta ordinary taste<br />And Experienced</span>
    </div>
    <div className="WhyChooseUs left-[794px] top-[62px] absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Why Choose us</div>
    <div className="Group1000002063 w-[374px] h-[93px] left-[794px] top-[575px] absolute">
      <div className="Rectangle8850 w-[374px] h-[92px] left-[-0px] top-0 absolute bg-white rounded-md" />
      <div className="YearsOf left-[180px] top-[17px] absolute text-[#1e1e1e] text-xl font-normal font-inter leading-7">Years of</div>
      <div className="Rectangle8851 w-2.5 h-[93px] left-0 top-0 absolute bg-[#ff9f0d] rounded-tl-md rounded-bl-md" />
      <div className="left-[51px] top-[19px] absolute text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">30+</div>
      <div className="Experienced left-[180px] top-[42px] absolute text-[#1e1e1e] text-2xl font-bold font-helvetica leading-loose">Experienced</div>
    </div>
    <div className="IcxonBox w-[374px] h-[135px] left-[794px] top-[406px] absolute">
      <div className="Rectangle8870 w-[102px] h-[100px] left-0 top-0 absolute bg-[#ff9f0d] rounded-md" />
      <div className="Rectangle8871 w-[102px] h-[100px] left-[135px] top-[1px] absolute bg-[#ff9f0d] rounded-md" />
      <div className="Rectangle8872 w-[102px] h-[100px] left-[272px] top-0 absolute bg-[#ff9f0d] rounded-md" />
      <div className="FastFood left-[6px] top-[109px] absolute text-white text-lg font-normal font-inter leading-relaxed">Fast Food</div>
      <div className="Lunch left-[160px] top-[109px] absolute text-white text-lg font-normal font-inter leading-relaxed">Lunch</div>
      <div className="Dinner left-[294px] top-[109px] absolute text-white text-lg font-normal font-inter leading-relaxed">Dinner</div>
    </div>
    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitQuisqueDiamPellentesqueBibendumNonDuiVolutpatFringillaBibendumUrnaElitAugueUrnaVitaeFeugiatPretiumDonecIdElementumUltricesMattisSedVitaeMusRisusLacusNisiEtAcDapibusSitEuVelitInConsequat w-[526px] left-[794px] top-[254px] absolute text-white text-base font-normal font-inter leading-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </div>
    <PiHamburgerLight className="Hamburger w-14 h-14 left-[817px] top-[428px] absolute text-white" />
    <PiCookieLight className="Cookie w-14 h-14 left-[952px] top-[429px] absolute text-white" />
    <PiWineLight  className="Wine w-14 h-14 left-[1089px] top-[428px] absolute text-white" />
  </div>
  
  );
}
