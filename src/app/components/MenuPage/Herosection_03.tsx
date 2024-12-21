import Image from "next/image";
import MainCourse from "../../../../public/menu_images/unsplash_-GFCYhoRe48.png";

export default function Herosection_02() {
  return (
    <div className="w-[1320px] h-[628px] relative mx-auto mt-[121px]">
      <Image
        className="w-[448px] h-[626px] left-[872px] top-0 absolute"
        src={MainCourse}
        alt=""
      />
      <div className="w-6 h-6 left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="w-6 h-6 relative"></div>
      </div>
      <div className="left-0 top-[32px] absolute text-bg-color_4 text-5xl font-bold font-helvetica leading-[56px]">
        Main Course
      </div>
      <div className="w-[760px] h-[111px] left-0 top-[112px] absolute">
        <div className="left-0 top-[39px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          Toasted French bread topped with romano, cheddar
        </div>
        <div className="left-0 top-[71px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          560 CAL
        </div>
        <div className="left-0 top-0 absolute text-bg-color_4 text-2xl font-bold font-helvetica leading-loose">
          Optic Big Breakfast Combo Menu
        </div>
        <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          32$
        </div>
      </div>
      <div className="w-[760px] h-[111px] left-0 top-[247px] absolute">
        <div className="left-0 top-[39px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          Gorgonzola, ricotta, mozzarella, taleggio
        </div>
        <div className="left-0 top-[71px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          700 CAL
        </div>
        <div className="left-0 top-0 absolute text-bg-color_4 text-2xl font-bold font-helvetica leading-loose">
          Cashew Chicken With Stir-Fry
        </div>
        <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          43$
        </div>
      </div>
      <div className="w-[760px] h-[111px] left-0 top-[382px] absolute">
        <div className="left-0 top-[39px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          Ground cumin, avocados, peeled and cubed
        </div>
        <div className="left-0 top-[71px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          1000 CAL
        </div>
        <div className="left-0 top-0 absolute text-bg-color_4 text-2xl font-bold font-helvetica leading-loose">
          {" "}
          Vegetables & Green Salad
        </div>
        <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          14$
        </div>
      </div>
      <div className="w-[760px] h-[111px] left-0 top-[517px] absolute">
        <div className="left-0 top-[39px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          Spreadable cream cheese, crumbled blue cheese
        </div>
        <div className="left-0 top-[71px] absolute text-bg-color_4 text-base font-normal font-helvetica leading-normal">
          560 CAL
        </div>
        <div className="left-0 top-0 absolute text-bg-color_4 text-2xl font-bold font-helvetica leading-loose">
          Spicy Vegan Potato Curry
        </div>
        <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          35$
        </div>
      </div>
    </div>
  );
}
