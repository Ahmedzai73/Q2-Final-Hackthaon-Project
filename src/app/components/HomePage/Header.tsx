
import { FaSearch } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
    return (
       <div className="container max-w-[1920px] mx-auto ">
        <div className="relative  max-w-[1320px] mx-auto  px-[33px] sm:px-20 md:px-14 2xl:px-0">

            {/* Top Center Logo */}
            <div className="absolute top-[21px] sm:top-[21px] md:top-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 mb-2">
                <span className="text-color_1 text-4xl sm:text-4xl md:text-2xl font-bold font-helvetica">Food</span>
                <span className="text-whiteColor text-4xl sm:text-4xl md:text-2xl font-bold font-helvetica">tuck</span>
            </div>  

            <nav className="w-full h-[87px] flex justify-between relative">
                {/* Menu Items */}
                <ul className="hidden md:flex pt-12 md:space-x-3 lg:space-x-6 text-whiteColor text-base font-normal font-inter">
                    <Link href="#" className="relative hover:text-color_1 cursor-pointer group">Home
                        <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">Menu
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">Blog
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">Pages
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">About
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">Shop
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="hover:text-color_1 cursor-pointer group">Contact
                    <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                </ul>

                {/* Search and Handbag */}
                <div className="flex items-center md:pt-[33px] space-x-4 ">
                    <div className="hidden md:flex items-center md:w-[190px] lg:w-[310px] h-[54px] rounded-[27px] border border-color_1 px-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-whiteColor placeholder-whiteColor w-full"
                        />
                        <FaSearch className="text-whiteColor ml-2 text-xl cursor-pointer"/>
                    </div>
                    <PiHandbagBold className="text-whiteColor w-6 h-6 cursor-pointer hover:text-color_1 pb-" />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden text-whiteColor text-2xl my-auto hover:text-color_1 cursor-pointer"><FaBars /></div>
            </nav>
        </div>
        </div>
    );
}
