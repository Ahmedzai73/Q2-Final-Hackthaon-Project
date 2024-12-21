import Image from "next/image";
import blogimage from "../../../../public/Blogimages/unsplash_lP5MCM6nZ5A.png";
// import { FaRegComment, FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import { PiChats } from "react-icons/pi";
import { PiUserCirclePlus } from "react-icons/pi";
import Link from "next/link";

export default function Herosection_01() {
  return (
    <div className="w-[872px] h-[830px] relative mx-auto mt-[120px]">
      <Image className="w-[871px] h-[520px] left-0 top-0 absolute" src={blogimage} alt="" />
      <div className="w-[267px] h-6 left-[31.96px] top-[536px] absolute flex items-center space-x-4">
        {/* <FaRegCalendarAlt className="text-color_4" /> */}
        <span className="text-color_4 text-base font-normal font-interleading-normal">Feb 14, 2022</span>
        <PiChats className="text-color_4" />
        <span className="text-color_4 text-base font-normal font-interleading-normal">3</span>
        <PiUserCirclePlus className="text-color_4" />
        <span className="text-color_4 text-base font-normal font-interleading-normal">Admin</span>
      </div>
      <div className="left-0 top-[576px] absolute text-color_4 text-2xl font-bold font-['Helvetica'] leading-loose">
        10 Reasons To Do A Digital Detox Challenge
      </div>
      <div className="w-[647.26px] left-0 top-[660px] absolute text-color_4 text-base font-normal font-interleading-normal">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </div>
      <div className="w-[59.93px] h-[60px] left-[23.97px] top-[24px] absolute">
        <div className="w-[59.93px] h-[60px] left-0 top-0 absolute bg-color_1 rounded-md" />
        <div className="w-7 h-11 left-[15.98px] top-[8px] absolute">
          <div className="left-[3px] top-0 absolute text-white text-lg font-bold font-interleading-relaxed">14</div>
          <div className="left-0 top-[20px] absolute text-white text-base font-normal font-interleading-normal">Feb</div>
        </div>
      </div>
      <Link href="#" className="px-8 py-3.5 left-[-0.10px] top-[780px] absolute rounded-md border border-color_1 justify-center items-center gap-2.5 inline-flex">
        <div className="text-color_1 text-base font-normal font-['Helvetica'] leading-normal">Read More</div>
      </Link>
    </div>
  ); 
}