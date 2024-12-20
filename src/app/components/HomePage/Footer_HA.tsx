import Footer_HSA from './Footer_HSA';
import Footer_HSB from './Footer_HSB';



import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest  } from 'react-icons/fa';
export default function Footer_HA() {
  return (

    <div className="div ">

    <Footer_HSB/>
    <Footer_HSA/>




    <div className="mt-8 border-t border-color_4 h-[99px] flex text-whiteColor justify-between items-center mx-auto bg-color_4"> 
        {/* Added bg-orange-500 for orange background */}
        <div className="sub max-w-[1320px] mx-auto flex justify-between items-center h-4">
        <p className="text-base font-inter mr-[650px]">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        <div className="flex space-x-4 items-center justify-center">
        <div className="box text-color_4 cursor-pointer hover:text-color_1 text-base font-normal w-9 h-9 bg-whiteColor rounded-md p-2"><FaFacebookF className="text-lg" /></div>
        <div className="box text-color_4 cursor-pointer hover:text-color_1 text-base font-normal w-9 h-9 bg-whiteColor rounded-md p-2"><FaTwitter className="text-lg" /></div>
        <div className="box text-color_4 cursor-pointer hover:text-color_1 text-base font-normal w-9 h-9 bg-whiteColor rounded-md p-2"><FaInstagram className="text-lg" /></div>
        <div className="box text-color_4 cursor-pointer hover:text-color_1 text-base font-normal w-9 h-9 bg-whiteColor rounded-md p-2"> <FaYoutube className="text-lg" /></div>
        <div className="box text-color_4 cursor-pointer hover:text-color_1 text-base font-normal w-9 h-9 bg-whiteColor rounded-md p-2"> <FaPinterest className="text-lg" /></div>
        </div>
      </div>

      </div>















    </div>
  );
}
