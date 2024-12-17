import Image from "next/image"
import foodimage from "../../../public/Image.png"
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import Link from "next/link";


export default function HeroSection_1() {
  return (
    <div className="container mx-auto 2xl:p-0">
{/* main content holding div */}
      <div className="subcont w-full h-[818px] flex items-center justify-center">

        <div className="leftLine w-[25.28px] h-[492px]  mr-[33px] flex flex-col relative">
          <div className="Line11 w-[158px] h-[0px] origin-top-left rotate-90  bg-white border border-white mx-3" />
          <div className="Line11 w-[158px] h-[0px] origin-top-left rotate-90  bg-white border border-white mx-3 mt-[333px]" />

          <div className="icons flex flex-col gap-4 px-1 my-52  absolute">
           <Link href="#"><FaFacebookF className="text-white" /></Link>
           <Link href="#"><FaTwitter className="text-[#ff9f0d]" /></Link>
           <Link href="#"><FaPinterestP className="text-white" /></Link>
          </div>

        </div>

        {/* left side text content */}
        <div className="textholder w-[472px] h-[356px]  mr-[93px]">

          <div className="TextContant w-[472px] h-[356px] relative">

            <div className="TheArtOfSpeedFoodQuality left-0 top-[48px] absolute"><span className="text-[#ff9f0d] text-6xl font-bold font-helvetica leading-[68px]">Th</span><span className="text-white text-6xl font-bold font-helvetica leading-[68px]">e Art of speed<br />food Quality</span></div>

            <div className="LoremIpsum left-0 top-[216px] absolute text-white text-base font-normal font-inter leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Varius sed pharetra dictum neque massa congue</div>
            <div className="ItsQuickAmusing left-0 top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Its Quick & Amusing!</div>
            <div className="Button w-[190px] h-[60px] left-0 top-[296px] absolute ">

              <Link href="#" className="Rectangle8841 w-[190px] h-[60px] left-0 top-0 absolute bg-[#ff9f0d] rounded-[30px] cursor-pointer hover:bg-zinc-400">

                <h1 className="SeeMenu left-[57px] top-[18px] absolute text-[#e0dfdf] text-base font-normal font-inter leading-normal">See Menu</h1></Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="imagediv w-[877.8px] h-[670px]">
          <Image src={foodimage} alt="food image"></Image>
        </div>




      </div>




    </div>


  )
}

