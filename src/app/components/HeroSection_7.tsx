import Image from "next/image";
import chef1 from "../../../public/chefs/Rectangle 8863-3.png";
import chef2 from "../../../public/chefs/Rectangle 8863.png";
import chef3 from "../../../public/chefs/Rectangle 8863-1.png";
import chef4 from "../../../public/chefs/Rectangle 8863-2.png";

export default function HeroSection_7() {
  return (
    <div className="main mx-auto mt-[120px] max-w-[1320px] h-[551px] ">

      <div className="textholder flex flex-col  items-center max-w-[1320px] h-[160px] ">
      <div className="Chefs text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Chefs</div>
      <div className="MeetOurChef mb-[56px]">
        <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px] ">Me</span>
        <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">et Our Chef</span>
      </div>
      </div>
      <div className="allCardsHolder max-w-[1320px] flex justify-between">

        {/* this is card 1 */}
        <div className="divcard1 main relative cursor-pointer group ">
          <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chef1} alt='D.Estwood' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500  absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D.Estwood</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Chief Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}

        {/* this is card 2 */}
        <div className="divcard2 main relative cursor-pointer group ">
          <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chef2} alt='D.Scoriesh' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D.Scoriesh</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Assistant Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}
      
        {/* this is card 3 */}
        <div className="divcard3 main relative cursor-pointer group ">
          <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chef3} alt='M. William' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">M. William</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Assistant Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}

        {/* this is card 4 */}
        <div className="divcard4 main relative cursor-pointer group ">
          <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chef4} alt='W.Readfroad' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">W.Readfroad</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}
      </div>
      <div className="Rectangle8868 w-[155px] h-[50px] rounded-[25px] mt-[56px] mx-auto border border-[#ff9f0d] flex justify-center items-center">
      <div className="SeeMore text-white text-base font-normal font-inter leading-normal">See More</div></div>
    </div>

  );
}
