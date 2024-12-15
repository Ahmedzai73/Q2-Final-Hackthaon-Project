import Image from "next/image";
import foodimage1 from "../../../public/unsplash_dphM2U1xq0U.png"
import foodimage2 from "../../../public/unsplash_MqT0asuoIcU.png"
import foodimage3 from "../../../public/unsplash_lP5MCM6nZ5A@2x.png"
import { LuThumbsUp } from "react-icons/lu";



export default function HeroSection_10() {
  return (
    <div className="Blog w-[1320px] h-[732px] relative mx-auto mt-[120px]">
    <div className="LatestNewsBlog left-[429px] top-[48px] absolute"><span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]"> La</span><span className="text-white text-5xl font-bold font-helvetica leading-[56px]">test News & Blog</span></div>
    <div className="BlogPost left-[598px] top-0 absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Blog Post</div>
    <div className="BlogCard1 w-[424px] h-[569px] left-0 top-[160px] absolute">
      <div className="Container w-[424px] h-[569px] left-0 top-0 absolute border border-white" />
      <div className="LearnMore left-[43px] top-[515px] absolute text-white text-base font-normal font-inter leading-normal">Learn More</div>
      <div className="PellentesqueNonEfficiturMiAliquamConvallisMiQuis w-[338px] left-[43px] top-[419px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
      <div className="February2022 left-[43px] top-[379px] absolute text-[#ff9f0d] text-base font-normal font-inter leading-normal">10 February 2022 </div>
      <Image className="UnsplashDphm2u1xq0u w-[423px] h-[349px] left-0 top-0 absolute" src={foodimage1} alt=""/>
      <div className="Icon w-[76px] h-5 left-[305px] top-[519px] absolute">
        <div className="Chatdots w-5 h-5 left-[28px] top-0 absolute justify-center items-center inline-flex">
          <div className="Chatdots w-5 h-5 relative">
          </div>
        </div>
        <div className="Sharenetwork w-5 h-5 left-[56px] top-0 absolute justify-center items-center inline-flex">
          <div className="Sharenetwork w-5 h-5 relative">
          </div>
        </div>
        <div className="Thumbsup w-5 h-5 left-0 top-0 absolute justify-center items-center inline-flex">
          <div className="Thumbsup w-5 h-5 relative"><LuThumbsUp />
          </div>
        </div>
      </div>
    </div>
    <div className="BlogCard2 w-[424px] h-[569px] left-[896px] top-[160px] absolute">
      <div className="Container w-[424px] h-[569px] left-0 top-0 absolute border border-white" />
      <div className="LearnMore left-[43px] top-[515px] absolute text-white text-base font-normal font-inter leading-normal">Learn More</div>
      <div className="PellentesqueNonEfficiturMiAliquamConvallisMiQuis w-[338px] left-[43px] top-[419px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Curabitur rutrum velit ac congue malesuada</div>
      <div className="February2022 left-[43px] top-[379px] absolute text-[#ff9f0d] text-base font-normal font-inter leading-normal">10 February 2022 </div>
      <Image className="UnsplashLp5mcm6nz5a w-[423px] h-[349px] left-0 top-0 absolute" src={foodimage3} alt=""/>
      <div className="Icon w-[76px] h-5 left-[305px] top-[519px] absolute">
        <div className="Chatdots w-5 h-5 left-[28px] top-0 absolute justify-center items-center inline-flex">
          <div className="Chatdots w-5 h-5 relative">
          </div>
        </div>
        <div className="Sharenetwork w-5 h-5 left-[56px] top-0 absolute justify-center items-center inline-flex">
          <div className="Sharenetwork w-5 h-5 relative">
          </div>
        </div>
        <div className="Thumbsup w-5 h-5 left-0 top-0 absolute justify-center items-center inline-flex">
          <div className="Thumbsup w-5 h-5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="BlogCard3 w-[424px] h-[569px] left-[448px] top-[163px] absolute">
      <div className="Container w-[424px] h-[569px] left-0 top-0 absolute border border-white" />
      <div className="LearnMore left-[43px] top-[515px] absolute text-white text-base font-normal font-inter leading-normal">Learn More</div>
      <div className="PellentesqueNonEfficiturMiAliquamConvallisMiQuis w-[338px] left-[43px] top-[419px] absolute text-white text-2xl font-bold font-helvetica leading-loose">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
      <div className="February2022 left-[43px] top-[379px] absolute text-[#ff9f0d] text-base font-normal font-inter leading-normal">10 February 2022 </div>
      <Image className="UnsplashMqt0asuoicu w-[423px] h-[349px] left-0 top-0 absolute" src={foodimage2} alt=""/>
      <div className="Icon w-[76px] h-5 left-[305px] top-[519px] absolute">
        <div className="Chatdots w-5 h-5 left-[28px] top-0 absolute justify-center items-center inline-flex">
          <div className="Chatdots w-5 h-5 relative">
          </div>
        </div>
        <div className="Sharenetwork w-5 h-5 left-[56px] top-0 absolute justify-center items-center inline-flex">
          <div className="Sharenetwork w-5 h-5 relative">
          </div>
        </div>
        <div className="Thumbsup w-5 h-5 left-0 top-0 absolute justify-center items-center inline-flex">
          <div className="Thumbsup w-5 h-5 relative">
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
