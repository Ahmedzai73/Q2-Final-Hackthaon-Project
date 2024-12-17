import Link from "next/link";
import Image from "next/image";
import foodimage1 from "../../../public/footerimages/unsplash_CLMpC9UhyTo.png";
import foodimage2 from "../../../public/footerimages/unsplash_CRoAeTh5S_I.png";
import foodimage3 from "../../../public/footerimages/unsplash_50KffXbjIOg.png";
import { PiClockClockwise } from "react-icons/pi";

export default function Footer_HSA() {
    return (
        <div className="Footer px-[300px] py-12 ">
            <div className=" max-w-[1920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto ">
                {/* About Us Section */}
                <div className="AboutUs  ">

                    <div className="AboutUs text-white text-2xl font-bold font-helvetica leading-loose"><Link href="#" className="hover:text-[#ff9f0d]">About Us.</Link></div>

                    

                    <div className="OrporateClient w-[312px] h-[95px] text-white text-base font-normal font-inter leading-normal">orporate clients and leisure travelers has<br />been relying on Groundlink for dependab<br />safe, and professional chauffeured car<br />service in major cities across World.</div>


                    <div className="flex mt-[34px]">
                        <div className="w-[78px] h-[72px] relative mr-4">
                            <div className="bg-[#ff9f0d] rounded-[3px] w-full h-full absolute"></div>
                            <div className="w-10 h-10 left-[19px] top-[16px] absolute flex justify-center items-center">
                                <PiClockClockwise className="text-white w-[78px] h-[72px]" />                             </div>
                        </div>
                        <div className="relative">
                            <div className="text-white text-lg font-normal leading-relaxed">Opening Hours</div>
                            <time dateTime="Mo-Sa 08:00-18:00" className="text-white text-sm font-normal leading-snug">Mon - Sat (8:00 - 6:00)</time>
                            <div className="text-white text-sm font-normal leading-snug">Sunday - Closed</div>
                        </div>
                    </div>



                </div>

                {/* Useful Links Section */}
                <div className="UsefulLinks w-[143.41px] h-[367px]  text-white font-helvetica leading-loose ml-[80px]">
                    <h3 className="text-2xl font-bold "><Link href="#" className="hover:text-[#ff9f0d]">Useful Links</Link></h3>
                    <ul className="mt-4 space-y-7 text-xl font-normal font-inter leading-7">
                        <li><Link href="#" className="hover:text-[#ff9f0d]">About</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">News</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Partners</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Team</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Menu</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Contacts</Link></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="Help text-white">
                    <h3 className="text-2xl font-bold"><Link href="#" className="hover:text-[#ff9f0d]">Help?</Link></h3>
                    <ul className="mt-4 space-y-7 text-xl font-normal font-inter leading-7">
                        <li><Link href="#" className="hover:text-[#ff9f0d]">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Terms & Conditions</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Reporting</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Documentation</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Support Policy</Link></li>
                        <li><Link href="#" className="hover:text-[#ff9f0d]">Privacy</Link></li>
                    </ul>
                </div>

                {/* Recent Posts Section */}
                <div className="RecentPosts text-white">
                    <h3 className="text-2xl font-bold">Recent Posts</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0  rounded-md hover:scale-105 cursor-pointer"><Image src={foodimage1} alt="" className="rounded-md "></Image></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg"><Link href="#" className="hover:text-[#ff9f0d]">Keep Your Business</Link></p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0 rounded-md hover:scale-105 cursor-pointer" ><Image src={foodimage2} alt="" className="rounded-md "></Image></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg"><Link href="#" className="hover:text-[#ff9f0d]">Keep Your Business</Link></p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0  rounded-md hover:scale-105 cursor-pointer"><Image src={foodimage3} alt="" className="rounded-md "></Image></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg"><Link href="#" className="hover:text-[#ff9f0d]">Keep Your Business</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
            
        </div>
    );
}

