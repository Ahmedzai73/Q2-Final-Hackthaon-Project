import Image from "next/image";
import foodimage1 from "../../../public/unsplash_fdlZBWIP0aM.png";
import foodimage2 from "../../../public/unsplash_jpkfc5_d-DI.png";
import foodimage3 from "../../../public/unsplash_mAQZ3X_8_l0.png";
import { MdDone } from "react-icons/md";
import Link from "next/link";

export default function HeroSection_2() {
  return (
    <div className="w-[1320px] h-[562px] relative mx-auto mt-[120px]">
      <div className="w-[562px] h-[562px] left-0 top-0 absolute">
        <div className="w-[446px] h-[110px] left-0 top-[48px] absolute">
          <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">
            We
          </span>
          <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">
            {" "}
            Create the best
            <br />
            foody product
            <br />
          </span>
        </div>
        <div className="left-0 top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">
          About us
        </div>
        <div className="w-[526px] h-[130px] left-0 top-[190px] absolute text-white text-base font-normal font-inter leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>
        <div className="left-[27px] top-[344px] absolute text-white text-lg font-normal font-inter leading-relaxed ">
          {" "}
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </div>
        <div className="left-[27px] top-[394px] absolute text-white text-lg font-normal font-inter leading-relaxed ">
          {" "}
          Quisque diam pellentesque bibendum non dui volutpat fringilla
        </div>
        <MdDone className="left-0 top-[350px] absolute text-white text-xl" />
        <MdDone className="left-0 top-[398px] absolute text-white text-xl" />
        <MdDone className="left-0 top-[450px] absolute text-white text-xl" />
        <div className="left-[27px] top-[444px] absolute text-white text-lg font-normal font-inter leading-relaxed ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="w-[190px] h-[60px] left-0 top-[502px] absolute">
          <Link  href="#"  className="w-[190px] h-[60px] left-0 top-0 absolute bg-[#ff9f0d] rounded-[30px] cursor-pointer hover:bg-zinc-400" >
          <div className="left-[54px] top-[18px] absolute text-white text-base font-normal font-inter leading-normal " >
            Read More
          </div>
          </Link>
        </div>
      </div>
      <Image
        className="w-[660px] h-[330px] left-[660px] top-0 absolute rounded-md"
        src={foodimage1}
        alt=""
      ></Image>
      <Image
        className="w-[322px] h-[194px] left-[660px] top-[346px] absolute rounded-md"
        src={foodimage2}
        alt=""
      ></Image>
      <Image
        className="w-[322px] h-[194px] left-[998px] top-[346px] absolute rounded-md"
        src={foodimage3}
        alt=""
      ></Image>
    </div>
  );
}
