import Image from "next/image";
import foodimage1 from "../../../public/unsplash_-lHZUkiWM74.png";
import foodimage2 from "../../../public/unsplash_q54Oxq44MZs.png";
import foodimage3 from "../../../public/unsplash_dphM2U1xq0U.png";
import foodimage4 from "../../../public/unsplash_MRHyv-hHxgk.png";

export default function HeroSection_3() {
  return (
    
    <div className="FoodCatagory w-[1792.31px] h-[803px] relative mx-auto mt-[120px]">
      <div className="FoodCategary w-[1320px] h-[803px]  relative">
        <div className="ChooseFoodIteam left-[436px] top-[48px] absolute mx-auto ">
          <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px] mx-auto">
            Ch
          </span>
          <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">
            oose Food Iteam
          </span>
        </div>
        <div className="FoodCategory left-[571px] top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">
          {" "}
          Food Category
        </div>
        <div className="ImageBox w-[1320px] h-[329px] left-0 top-[160px] absolute">
          <Image
            className="UnsplashMrhyvHhxgk w-[306px] h-[329px] left-[676px] top-0 absolute rounded-md"
            src={foodimage4}
            alt=""
          ></Image>
          <Image
            className="UnsplashQ54oxq44mzs w-[306px] h-[329px] left-[1014px] top-0 absolute rounded-md"
            src={foodimage2}
            alt=""
          ></Image>
          Image
          <Image
            className="UnsplashDphm2u1xq0u w-[306px] h-[329px] left-[338px] top-0 absolute rounded-md"
            src={foodimage3}
            alt=""
          ></Image>
          <Image
            className="UnsplashLhzukiwm74 w-[305px] h-[328px] left-0 top-[1px] absolute rounded-md"
            src={foodimage1}
            alt=""
          ></Image>
          <div className="Group1000002060 w-[206px] h-[97px] left-0 top-[124px] absolute">
            <div className="Group1000002058 w-[206px] h-[46px] left-[-0px] top-[51px] absolute">
              <div className="Rectangle8848 w-[206px] h-[46px] left-0 top-0 absolute bg-[#ff9f0d] rounded-md" />
              <div className="FastFoodDish left-[31px] top-[9px] absolute text-[#fff5f5] text-xl font-bold font-inter leading-7">
                Fast Food Dish
              </div>
            </div>
            <div className="Group1000002059 w-[125px] h-10 left-[81px] top-0 absolute">
              <div className="Rectangle8849 w-[125px] h-10 left-0 top-0 absolute bg-white rounded-md" />
              <div className="Save30 left-[19px] top-[7px] absolute text-[#ff9f0d] text-lg font-bold font-inter leading-relaxed">
                Save 30%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
