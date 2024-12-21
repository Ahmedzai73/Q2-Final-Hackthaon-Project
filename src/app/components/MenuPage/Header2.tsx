import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PiUserBold } from "react-icons/pi";
import { PiTote } from "react-icons/pi";
export default function Header2() {
  return (
    <div className="w-full bg-blackColor h-[90px] flex items-center justify-center">
      <div className="w-full max-w-[1320px] flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center">
          <span className="text-whiteColor text-2xl font-bold">Food</span>
          <span className="text-color_1 text-2xl font-bold">tuck</span>
        </div>

        <ul className="hidden md:flex  md:space-x-3 lg:space-x-6 text-whiteColor text-base font-normal font-inter">
          <Link
            href="/"
            className="relative hover:text-color_1 cursor-pointer group"
          >
            Home
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href=".\MenuPage"
            className="hover:text-color_1 cursor-pointer group"
          >
            Menu
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="./BlogPage"
            className="hover:text-color_1 cursor-pointer group"
          >
            Blog
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link href="#" className="hover:text-color_1 cursor-pointer group">
            Pages
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link href="#" className="hover:text-color_1 cursor-pointer group">
            About
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link href="#" className="hover:text-color_1 cursor-pointer group">
            Shop
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link href="#" className="hover:text-color_1 cursor-pointer group">
            Contact
            <div className="Ellipse33 w-[7px] h-[7px] bg-color_1 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </ul>

        <div className="flex space-x-4">
          <div className="w-6 h-6 flex justify-center items-center text-whiteColor">
            <div className="w-6 h-6 relative">
              <FaSearch />
            </div>
          </div>
          <div className="w-6 h-6 flex justify-center items-center text-whiteColor text-xl">
            <div className="w-6 h-6 relative">
              <PiUserBold />
            </div>
          </div>
          <div className="w-6 h-6 flex justify-center items-center text-whiteColor text-xl">
            <div className="w-6 h-6 relative">
              <PiTote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
