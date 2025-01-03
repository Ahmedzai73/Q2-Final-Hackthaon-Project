import Image from "next/image";
import starterimage from "../../../../public/menu_images/Rectangle 8874.png";

export default function Herosection_02() {
  return (
    <div className="StarterMenu w-[1320px] h-[628px] relative mx-auto mt-[121px]">
      <Image
        className="Rectangle8874 w-[448px] h-[626px] left-0 top-[2px] absolute"
        src={starterimage}
        alt=""
      />
      <div className="Coffee w-6 h-6 left-[560px] top-0 absolute justify-center items-center inline-flex">
        <div className="Coffee w-6 h-6 relative"></div>
      </div>
      <div className="StarterMenu left-[560px] top-[32px] absolute text-blackColor text-5xl font-bold font-helvetica leading-[56px]">
        Starter Menu
      </div>
      <div className="Component49 w-[760px] h-[111px] left-[560px] top-[112px] absolute">
        <div className="ToastedFrenchBreadToppedWithRomanoCheddar left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          Toasted French bread topped with romano, cheddar
        </div>
        <div className="Cal left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          560 CAL
        </div>
        <div className="AlderGrilledChinookSalmon left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">
          Alder Grilled Chinook Salmon
        </div>
        <div className="Line43 w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          32$
        </div>
      </div>
      <div className="Component50 w-[760px] h-[111px] left-[560px] top-[247px] absolute">
        <div className="ToastedFrenchBreadToppedWithRomanoCheddar left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          Gorgonzola, ricotta, mozzarella, taleggio
        </div>
        <div className="Cal left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          700 CAL
        </div>
        <div className="AlderGrilledChinookSalmon left-0 top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          Berries and creme tart
        </div>
        <div className="Line43 w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          43$
        </div>
      </div>
      <div className="Component51 w-[760px] h-[111px] left-[560px] top-[382px] absolute">
        <div className="ToastedFrenchBreadToppedWithRomanoCheddar left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          Ground cumin, avocados, peeled and cubed
        </div>
        <div className="Cal left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          1000 CAL
        </div>
        <div className="AlderGrilledChinookSalmon left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">
          Tormentoso Bush Pizza Pintoage
        </div>
        <div className="Line43 w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          14$
        </div>
      </div>
      <div className="Component52 w-[760px] h-[111px] left-[560px] top-[517px] absolute">
        <div className="ToastedFrenchBreadToppedWithRomanoCheddar left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          Spreadable cream cheese, crumbled blue cheese
        </div>
        <div className="Cal left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">
          560 CAL
        </div>
        <div className="AlderGrilledChinookSalmon left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">
          Spicy Vegan Potato Curry
        </div>
        <div className="Line43 w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
        <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">
          35$
        </div>
      </div>
    </div>
  );
}
