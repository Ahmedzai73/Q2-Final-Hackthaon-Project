import Image from "next/image";
import Dessertimage from "../../../../public/menu_images/unsplash_90HdOlGbjck.png";

 
export default function HeroSection_05() {
  return (
    <div className="w-[1320px] h-[628px] relative mx-auto mt-[121px]">
  <Image className="w-[448px] h-[626px] left-0 top-[2px] absolute" src={Dessertimage} alt=""/>
  <div className="w-6 h-6 left-[560px] top-0 absolute justify-center items-center inline-flex">
    <div className="w-6 h-6 relative">
    </div>
  </div>
  <div className="left-[560px] top-[32px] absolute text-color_4 text-5xl font-bold font-helvetica leading-[56px]">Dessert</div>
  <div className="w-[760px] h-[111px] left-[560px] top-[112px] absolute">
    <div className="left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">Toasted French bread topped with romano, cheddar</div>
    <div className="left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">560 CAL</div>
    <div className="left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">Fig and lemon cake</div>
    <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
    <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">32$</div>
  </div>
  <div className="w-[760px] h-[111px] left-[560px] top-[247px] absolute">
    <div className="left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">Gorgonzola, ricotta, mozzarella, taleggio</div>
    <div className="left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">700 CAL</div>
    <div className="left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">Creamy mascarpone cake</div>
    <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
    <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">43$</div>
  </div>
  <div className="w-[760px] h-[111px] left-[560px] top-[382px] absolute">
    <div className="left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">Ground cumin, avocados, peeled and cubed</div>
    <div className="left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">1000 CAL</div>
    <div className="left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">Pastry, blueberries, lemon juice</div>
    <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
    <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">14$</div>
  </div>
  <div className="w-[760px] h-[111px] left-[560px] top-[517px] absolute">
    <div className="left-0 top-[39px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">Spreadable cream cheese, crumbled blue cheese</div>
    <div className="left-0 top-[71px] absolute text-color_4 text-base font-normal font-helvetica leading-normal">560 CAL</div>
    <div className="left-0 top-0 absolute text-color_4 text-2xl font-bold font-helvetica leading-loose">Pain au chocolat</div>
    <div className="w-[760px] h-[0px] left-0 top-[111px] absolute border border-[#e0e0e0]"></div>
    <div className="left-[719px] top-0 absolute text-color_1 text-2xl font-bold font-helvetica leading-loose">35$</div>
  </div>
</div>
  );
}
