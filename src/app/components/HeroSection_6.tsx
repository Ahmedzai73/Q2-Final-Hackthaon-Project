import Image from "next/image";
import backgroundimage from "../../../public/unsplash_bpPTlXWTOvg.png";
import foodIcon1 from "../../../public/Group-1.png";
import foodIcon2 from "../../../public/Group.png";
import foodIcon3 from "../../../public/Group-3.png";
import foodIcon4 from "../../../public/Group-2.png";




export default function HeroSection_3() {
  
  return (
    <div className="OurMenu w-[1320px] h-[656px] relative">
    <div className="FromOurMenu left-[440px] top-[48px] absolute">
      <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">Fr</span>
      <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">om Our Menu</span>
    </div>
    <div className="ChoosePick left-[547px] top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-['Great Vibes'] leading-10">Choose & pick</div>
    <div className="Text w-[1056px] h-7 left-[5px] top-[160px] absolute">
      <div className="Breakfast left-0 top-0 absolute text-[#ff9f0d] text-xl font-bold font-inter leading-7">Breakfast</div>
      <div className="Lunch left-[195px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Lunch</div>
      <div className="Dinner left-[353px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Dinner</div>
      <div className="Dessert left-[515px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Dessert</div>
      <div className="Drink left-[689px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Drink</div>
      <div className="Snack left-[839px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Snack</div>
      <div className="Soups left-[997px] top-0 absolute text-white text-xl font-normal font-inter leading-7">Soups</div>
    </div>
    <div className="LettuceLeaf w-[376px] h-[79px] left-[536px] top-[244px] absolute">
      <Image className="UnsplashOfismyezpny w-20 h-[79px] left-0 top-0 absolute rounded-md" src="https://via.placeholder.com/80x79" alt="" />
      <div className="Price left-[89px] top-[54px] absolute text-[#ff9f0d] text-lg font-bold font-inter leading-relaxed">12.5$</div>
      <div className="Name left-[89px] top-[-4px] absolute text-white text-xl font-bold font-inter leading-7">Lettuce Leaf</div>
      <div className="Description left-[89px] top-[28px] absolute text-white text-sm font-normal font-inter leading-snug">Lacus nisi, et ac dapibus velit in consequat.</div>
    </div>
    {/* Repeat similar structure for the other items */}
    <Image className="UnsplashInjdgkcwhp0 w-[515px] h-[406px] left-0 top-[244px] absolute" src="https://via.placeholder.com/515x406" alt=""/>
    <Image className="UnsplashLv174o7fn7y w-[366px] h-[362px] left-[75px] top-[244px] absolute" src="https://via.placeholder.com/366x362" alt=""/>
  </div>
  
  
  
  
  );
}
