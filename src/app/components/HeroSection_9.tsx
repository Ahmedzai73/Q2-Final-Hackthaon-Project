import Image from "next/image";
import backgroundimage from "../../../public/unsplash_E6DsqnZbZ4o.png"
import { FiPlay } from "react-icons/fi";


export default function HeroSection_9() {
  return (
    <div className="RestraindCreativeProcess w-[1918px] h-[558px] relative mx-auto mt-[120px]">
    <div className="Group1000002245 w-[1918px] h-[558px] left-0 top-0 absolute">
      <Image className="UnsplashE6dsqnzbz4o w-[1918px] h-[558px] left-0 top-0 absolute" src={backgroundimage} alt="" />
      <div className="RestaurantActiveProcess left-[1346px] top-[112px] absolute text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Restaurant Active Process</div>
      <div className="WeDocumentEveryFoodBeanProcessUntileItIsSaved left-[914px] top-[160px] absolute text-right"><span className="text-[#ff9f0d] text-5xl font-bold font-['Helvetica'] leading-[56px]">We</span><span className="text-white text-5xl font-bold font-['Helvetica'] leading-[56px]"> Document Every Food<br/>Bean Process untile it is saved</span></div>
      <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitQuisqueDiamPellentesqueBibendumNonDuiVolutpatFringillaBibendumUrnaElitAugueUrna w-[651px] left-[968px] top-[304px] absolute text-right text-white text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </div>
      <div className="Button w-[369px] h-[60px] left-[1250px] top-[385px] absolute">
        <div className="Button w-[190px] h-[60px] left-0 top-0 absolute">
          <div className="Rectangle8841 w-[190px] h-[60px] left-0 top-0 absolute rounded-[30px] border border-[#ff9f0d]" />
          <div className="ReadMore left-[47px] top-[18px] absolute text-white text-base font-bold font-['Inter'] leading-normal">Read More</div>
        </div>
        <div className="PlayVideo left-[286px] top-[17px] absolute text-white text-base font-bold font-['Inter'] leading-normal">Play Video</div>
      </div>
    </div>
    <div className="Play w-[60px] h-[60px] left-[1464px] top-[384px] absolute">
      <div className="Ellipse10 w-[60px] h-[60px] left-0 top-0 absolute bg-[#ff9f0d] rounded-full" />
      <div className="Play w-6 h-6 left-[18px] top-[18px] absolute justify-center items-center inline-flex">
        <FiPlay className="Play w-6 h-6 relative text-white"/>
        
      </div>
    </div>
  </div>

  );
}
