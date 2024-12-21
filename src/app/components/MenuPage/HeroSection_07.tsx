import Image from "next/image";
import logoimage1 from "../../../../public/menu_images/image 2.svg";
import logoimage2 from "../../../../public/menu_images/image 60.svg";
import logoimage3 from "../../../../public/menu_images/image 56.svg";
import logoimage4 from "../../../../public/menu_images/image 59.svg";
import logoimage5 from "../../../../public/menu_images/image 57.svg";
import logoimage6 from "../../../../public/menu_images/image 58.svg";

 
export default function HeroSection_05() {
  return (
    <div className="w-[1322px] h-[275px] relative mx-auto mt-[121px]">
    <div className="w-[1322px] h-[129.37px] left-0 top-[145.63px] absolute">
      <Image className="w-[240.96px] h-[129.23px] left-0 top-0 absolute" src={logoimage1} alt="logo" />
      <Image className="w-[166.04px] h-[128.68px] left-[310.95px] top-0 absolute" src={logoimage2} alt="logo" />
      <Image className="w-36 h-[127.01px] left-[548.92px] top-0 absolute" src={logoimage3} alt="logo"/>
      <Image className="w-[113.98px] h-[129.08px] left-[1208.02px] top-0 absolute" src={logoimage4} alt="logo" />
      <Image className="w-[169.97px] h-[129.17px] left-[967.39px] top-0 absolute" src={logoimage5} alt="logo" />
      <Image className="w-[130.98px] h-[129.37px] left-[766.10px] top-0 absolute" src={logoimage6} alt="logo" />
    </div>
    <div className="w-[672.90px] h-[55.86px] left-[324.95px] top-[33.91px] absolute text-color_4 text-5xl font-bold font-helvetica leading-[56px]">We work with the best pepole</div>
    <div className="w-[152.98px] h-[25.93px] left-[592.91px] top-0 absolute text-color_4 text-lg font-normal font-inter leading-relaxed">Partners & Clients</div>
  </div>

  );
}
