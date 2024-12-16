import Link from "next/link";
import { FaRegClock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

export default function Footer_HSA() {
    return (
        <div className="Footer px-[300px] py-12 ">
            <div className=" max-w-[1920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto ">
                {/* About Us Section */}
                <div className="AboutUs  ">
                    <div className="AboutUs text-white text-2xl font-bold font-helvetica leading-loose">About Us.</div>
                    <div className="OrporateClientsAndLeisureTravelersHasBeenRelyingOnGroundlinkForDependabSafeAndProfessionalChauffeuredCarServiceInMajorCitiesAcrossWorld w-[312px] h-[95px] text-white text-base font-normal font-inter leading-normal">orporate clients and leisure travelers has<br />been relying on Groundlink for dependab<br />safe, and professional chauffeured car<br />service in major cities across World.</div>


                    <div className="flex mt-[34px]">
                        <div className="w-[78px] h-[72px] relative mr-4">
                            <div className="bg-[#ff9f0d] rounded-[3px] w-full h-full absolute"></div>
                            <div className="w-10 h-10 left-[19px] top-[16px] absolute flex justify-center items-center">
                                <FaRegClock className="text-white w-6 h-6" />                             </div>
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
                    <h3 className="text-2xl font-bold ">Useful Links</h3>
                    <ul className="mt-4 space-y-7 text-xl font-normal font-inter leading-7">
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">News</Link></li>
                        <li><Link href="#">Partners</Link></li>
                        <li><Link href="#">Team</Link></li>
                        <li><Link href="#">Menu</Link></li>
                        <li><Link href="#">Contacts</Link></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="Help text-white">
                    <h3 className="text-2xl font-bold">Help?</h3>
                    <ul className="mt-4 space-y-7 text-xl font-normal font-inter leading-7">
                        <li><Link href="#">FAQ</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                        <li><Link href="#">Reporting</Link></li>
                        <li><Link href="#">Documentation</Link></li>
                        <li><Link href="#">Support Policy</Link></li>
                        <li><Link href="#">Privacy</Link></li>
                    </ul>
                </div>

                {/* Recent Posts Section */}
                <div className="RecentPosts">
                    <h3 className="text-2xl font-bold">Recent Posts</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg">Keep Your Business</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg">Keep Your Business</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-12 bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-base opacity-50">20 Feb 2022</p>
                                <p className="text-lg">Keep Your Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-12 border-t border-gray-700 bg-[#ff9f0d]  w-full pt-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white">
                        <FaFacebookF className="w-6 h-6" /> {/* Facebook */}
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white">
                        <FaTwitter className="w-6 h-6" /> {/* Twitter */}
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white">
                        <FaInstagram className="w-6 h-6" /> {/* Instagram */}
                    </a>
                    <a href="#" aria-label="YouTube" className="text-primary hover:text-white">
                        <FaYoutube className="w-6 h-6" /> {/* YouTube */}
                    </a>
                    <a href="#" aria-label="Pinterest" className="text-gray-500 hover:text-white">
                        <FaPinterestP className="w-6 h-6" /> {/* Pinterest */}
                    </a>
                </div>
            </div>
            
        </div>
    );
}

