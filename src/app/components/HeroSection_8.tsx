import Image from "next/image";
import flowerimage from "../../../public/unsplash_Ioq6qEibtbU.png"
import personimage from "../../../public/Ellipse 6.png"
import StarRating from "./RatingStar";


export default function HeroSection_8() {
  return (
    <div className="Testimonials w-[1273px] h-[770px] relative mx-auto mt-[226px]">
      <div className="Dot w-[85.95px] h-4 left-[614.62px] top-[733.82px] absolute">
        <div className="Ellipse10 w-[14.99px] h-4 left-[21.99px] top-0 absolute bg-[#ff9f0d]/30 rounded-full" />
        <div className="Ellipse11 w-[14.99px] h-4 left-0 top-0 absolute bg-[#ff9f0d] rounded-full" />
        <div className="Ellipse12 w-4 h-4 left-[47.97px] top-0 absolute bg-[#ff9f0d]/30 rounded-full" />
        <div className="Ellipse13 w-[14.99px] h-4 left-[70.96px] top-0 absolute bg-[#ff9f0d]/30 rounded-full" />
      </div>
      <div className="WhatOurClientAreSaying left-0 top-[47.99px] absolute text-white text-5xl font-bold font-helvetica leading-[56px]">What our client are saying</div>
      <div className="Rectangle8934 w-[868.47px] h-[450.89px] left-[225.86px] top-[226.94px] absolute bg-white shadow" />
      <div className="Text w-[696.57px] h-[485.89px] left-[311.81px] top-[159.96px] absolute">
        <Image className="Ellipse6 w-[132.92px] h-[133.97px] left-[281.83px] top-0 absolute rounded-full" src={personimage} alt="" />
        <div className="Star w-[151.91px] h-6 left-[272.83px] top-[381.91px] absolute"><StarRating rating={4.5} />
        </div>
        <div className="AlaminHasan left-[268.84px] top-[421.90px] absolute text-[#333333] text-2xl font-bold font-helvetica leading-loose">Alamin Hasan</div>
        <div className="FoodSpecialist left-[293.82px] top-[461.89px] absolute text-[#828282] text-base font-normal font-helvetica leading-normal">Food Specialist</div>
        <div className="LoremIpsum w-[696.57px] h-[103.97px] left-0 top-[245.94px] absolute text-center text-[#4f4f4f] text-lg font-normal font-helvetica leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
        <div className="Quotes w-12 h-12 left-[324.80px] top-[165.96px] absolute flex-col justify-center items-center inline-flex">
          <div className="Quotes w-12 h-12 relative">
          </div>
        </div>
      </div>
      <Image className="UnsplashIoq6qeibtbu w-[395.51px] h-[500.43px] left-[771.53px] top-[283.42px] absolute origin-top-left rotate-[-13.52deg]" src={flowerimage} alt="" />
      <div className="Testimonials left-[4px] top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Testimonials</div>
    </div>

  );
}
