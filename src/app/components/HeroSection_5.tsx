import Image from "next/image";
import backgroundimage from "../../../public/unsplash_bpPTlXWTOvg.png";
import foodIcon1 from "../../../public/Group-1.png";
import foodIcon2 from "../../../public/Group.png";
import foodIcon3 from "../../../public/Group-3.png";
import foodIcon4 from "../../../public/Group-2.png";




export default function HeroSection_5() {
  
  return (
    <div className="Clients container w-[1920px] h-[469px] relative mx-auto mt-[120px] max-w-[1923px]">
    <Image className="UnsplashBpptlxwtovg w-[1923px] h-[468px] left-0 top-0 absolute" src={backgroundimage} alt=""/>
    <div className="Clients w-[1920px] h-[469px] left-0 top-0 absolute">
      <div className="Rectangle8930 w-[1920px] h-[469px] left-0 top-0 absolute bg-[#0d0d0d]/90" />
      <div className="IconBox w-[1319px] h-[247px] left-[300px] top-[112px] absolute">
        <div className="IteamOfFood w-[162px] h-[247px] left-[379px] top-0 absolute">
          <div className="ItemsOfFood left-0 top-[144px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Items Of Food</div>
          <div className="left-[48px] top-[199px] absolute text-white text-[40px] font-bold font-helvetica leading-[48px]">320</div>
          <div className="SodaAndBurger w-[120px] h-[120px] left-[21px] top-0 absolute"><Image className="" src={foodIcon2} alt=""/></div>
        </div>
        <div className="Chef w-[218px] h-[247px] left-0 top-0 absolute">
          <div className="ProfessionalChefs left-0 top-[144px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Professional Chefs</div>
          <div className="left-[76px] top-[199px] absolute text-white text-[40px] font-bold font-helvetica leading-[48px]">420</div>
          <div className="Group w-[120px] h-[120px] left-[49px] top-0 absolute"><Image className="" src={foodIcon1} alt=""/></div>
        </div>
        <div className="HappyCustomers w-[206px] h-[247px] left-[1113px] top-0 absolute">
          <div className="HappyCustomers left-0 top-[144px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Happy Customers</div>
          <div className="left-[70px] top-[199px] absolute text-white text-[40px] font-bold font-helvetica leading-[48px]">220</div>
          <div className="Group w-[120px] h-[120px] left-[43px] top-0 absolute"><Image className="" src={foodIcon4} alt=""/></div>
        </div>
        <div className="YearsOfExperienced w-[249px] h-[247px] left-[703px] top-0 absolute">
          <div className="YearsOfExperienced left-0 top-[144px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Years Of Experienced</div>
          <div className="left-[90px] top-[199px] absolute text-white text-[40px] font-bold font-helvetica leading-[48px]">30+</div>
          <div className="Group w-[120px] h-[120px] left-[64px] top-0 absolute"><Image className="" src={foodIcon3} alt=""/></div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  );
}
