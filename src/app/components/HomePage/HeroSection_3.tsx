
import Image from "next/image";
import foodimage1 from "../../../../public/unsplash_-lHZUkiWM74.png";
import foodimage2 from "../../../../public/unsplash_q54Oxq44MZs.png";
import foodimage3 from "../../../../public/unsplash_dphM2U1xq0U.png";
import foodimage4 from "../../../../public/unsplash_MRHyv-hHxgk.png";

export default function HeroSection_3() {
  return (
    <div className="FoodCategory container max-w-[1348px] w-full mx-auto mt-[120px] px-4">
      <div className="text-center">
        <div className="text-[#ff9f0d] text-[32px] font-normal font-greatVibes mt-2">
          Food Category
        </div>
        <span className="text-[#ff9f0d] text-5xl font-bold leading-[56px]">
          Ch
        </span>
        <span className="text-white text-5xl font-bold leading-[56px]">
          oose Food Iteam
        </span>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="relative">
          <Image
            className="rounded-md"
            src={foodimage1}
            alt="Food Item 1"
            layout="responsive"
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-md"
            src={foodimage3}
            alt="Food Item 2"
            layout="responsive"
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-md"
            src={foodimage4}
            alt="Food Item 3"
            layout="responsive"
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-md"
            src={foodimage2}
            alt="Food Item 4"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
