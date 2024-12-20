import Image from "next/image";
import OurMenuCards from "../../../../public/menu_images/Shop List.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";


export default function Herosection_01() {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <Image src={OurMenuCards} alt="Our Menu" className="w-full h-auto" />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="text-whiteColor text-5xl font-bold leading-[56px]">Our Menu</h1>
        
        {/* Breadcrumb */}
        <div className="flex space-x-2 mt-4 items-center">
          <span className="text-whiteColor text-xl font-normal hover:text-color_1"><Link href="../">Home</Link></span> <RiArrowRightSLine className="text-whiteColor text-xl"/>
          <span className="text-whiteColor text-xl font-normal hover:text-color_1"><Link href="../">Menu</Link></span>
        </div>
      </div>
    </div>
  );
}