import Image from "next/image"
import foodimage from "../../../../public/Image.png"
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import Link from "next/link";


export default function HeroSection_1() {
  return (
    <div className="container mx-auto 3xl:p-0 p-10">
{/* main content holding div */}
      <div className="subcont w-full h-[818px] flex items-center justify-center">

        <div className="leftLine w-[25.28px] h-[492px]  mr-[33px] flex flex-col relative">
          <div className="Line11 w-[158px] h-[0px] origin-top-left rotate-90  bg-whiteColor border border-whiteColor mx-3" />
          <div className="Line11 w-[158px] h-[0px] origin-top-left rotate-90  bg-whiteColor border border-whiteColor mx-3 mt-[333px]" />

          <div className="icons flex flex-col gap-4 px-1 my-52  absolute">
           <Link href="#"><FaFacebookF className="text-whiteColor hover:text-color_1"/></Link>
           <Link href="#"><FaTwitter className="text-whiteColor hover:text-color_1"/></Link>
           <Link href="#"><FaPinterestP className="text-whiteColor hover:text-color_1"/></Link>
          </div>

        </div>

        {/* left side text content */}
        <div className="textholder w-[472px] h-[356px]  mr-[93px]">

          <div className="TextContant w-[478px] h-[356px] relative">

            <div className="TheArtOfSpeedFoodQuality left-0 top-[44px] absolute"><span className="text-color_1 text-6xl font-bold font-helvetica leading-[68px]">Th</span><span className="text-whiteColor text-6xl font-bold font-helvetica leading-[68px]">e Art of speed<br />food Quality</span></div>

            <div className="LoremIpsum left-0 top-[216px] absolute text-whiteColor text-base font-normal font-inter leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Varius sed pharetra dictum neque massa congue</div>
            <div className="ItsQuickAmusing left-0 top-0 absolute text-color_1 text-[32px] font-normal font-greatVibes leading-10">Its Quick & Amusing!</div>
            <div className="Button w-[190px] h-[60px] left-0 top-[296px] absolute ">

              <Link href="#" className="Rectangle8841 w-[190px] h-[60px] left-0 top-0 absolute bg-color_1 rounded-[30px] cursor-pointer hover:bg-color_4">

                <h1 className="SeeMenu left-[57px] top-[18px] absolute text-whiteColor text-base font-normal font-inter leading-normal">See Menu</h1></Link>
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

