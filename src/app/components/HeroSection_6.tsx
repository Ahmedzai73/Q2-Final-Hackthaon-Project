import Image from "next/image";
import foodIcon1 from "../../../public/img/unsplash_Lv174o7fn7Y.png";
import foodIcon2 from "../../../public/img/unsplash_INjdgkCwHp0.png";
import MenuCardsData from "./MenuCardsData";
import Link from "next/link";



export default function HeroSection_3() {
  
  return (
    <div className="OurMenu w-[1320px] h-[656px] relative mx-auto mt-[120px]">
    <div className="FromOurMenu left-[440px] top-[48px] absolute">
      <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">Fr</span>
      <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">om Our Menu</span>
    </div>
    <div className="ChoosePick left-[547px] top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Choose & pick</div>
    <div className="Text w-[1056px] h-7 left-[5px] top-[160px] absolute">
      <Link href="#" className="Breakfast left-0 top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-inter leading-7">Breakfast</Link>
      <Link href="#" className="Lunch left-[195px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Lunch</Link>
      <Link href="#" className="Dinner left-[353px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Dinner</Link>
      <Link href="#" className="Dessert left-[515px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Dessert</Link>
      <Link href="#" className="Drink left-[689px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Drink</Link>
      <Link href="#" className="Snack left-[839px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Snack</Link>
      <Link href="#" className="Soups left-[997px] top-0 absolute text-white hover:text-[#ff9f0d] text-xl font-normal font-inter leading-7">Soups</Link>
    </div>
   
    <div className="LettuceLeaf w-[376px] h-[79px] left-[536px] top-[244px] absolute"> 
      <MenuCardsData/>
    </div>
   {/* Repeat similar structure for the other items */}
    <Image className="UnsplashInjdgkcwhp0 w-[515px] h-[406px] left-0 top-[244px] absolute" src={foodIcon2} alt=""/>
    <Image className="UnsplashLv174o7fn7y w-[366px] h-[362px] left-[75px] top-[244px] absolute" src={foodIcon1} alt=""/>
  </div>
  
 
  
  
  );
}
