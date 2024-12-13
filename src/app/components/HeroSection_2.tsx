import Image from "next/image";
import foodimage1 from "../../../public/unsplash_fdlZBWIP0aM.png";
import foodimage2 from "../../../public/unsplash_jpkfc5_d-DI.png";
import foodimage3 from "../../../public/unsplash_mAQZ3X_8_l0.png";
import { MdDone } from "react-icons/md";
import Link from "next/link";

export default function HeroSection_2() {
  return (
    <div className="max-w-[1348px] mx-auto mt-12 px-4 sm:p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <div className="text-[#ff9f0d] text-[32px] font-greatVibes mb-2">
            About us
          </div>
          <div className="text-5xl font-bold font-helvetica leading-tight mb-4">
            <span className="text-[#ff9f0d]">We</span>{" "}
            <span className="text-white">Create the best foody product</span>
          </div>
          <p className="text-white text-base font-inter leading-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start text-white text-lg">
              <MdDone className="text-[#ff9f0d] mr-2" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start text-white text-lg">
              <MdDone className="text-[#ff9f0d] mr-2" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-start text-white text-lg">
              <MdDone className="text-[#ff9f0d] mr-2" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <Link
            href="#"
            className="bg-[#ff9f0d] hover:bg-[#e68f0b] text-white py-3 px-8 rounded-full inline-block"
          >
            Read More
          </Link>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            className="col-span-2 rounded-md"
            src={foodimage1}
            alt="A delicious food plate"
          />
          <Image
            className="rounded-md"
            src={foodimage2}
            alt="Another food plate"
          />
          <Image
            className="rounded-md"
            src={foodimage3}
            alt="More delicious food"
          />
        </div>
      </div>
    </div>
  );
}
