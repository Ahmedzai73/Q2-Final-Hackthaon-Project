// import Image from 'next/image';
// import chefimage1 from '../../../public/chefs/Rectangle 8863-3.png'
// import chefimage2 from '../../../public/chefs/Rectangle 8863.png';
// import chefimage3 from '../../../public/chefs/Rectangle 8863-1.png';
// import chefimage4 from '../../../public/chefs/Rectangle 8863-2.png';

// export default function MeetOurChef() {
//   return (
//     <div> 
//       <div className="MeetOurChef mx-auto mt-[120px]">
//       <div className="Chefs text-[#ff9f0d] text-[32px] font-normal font-greatVibes leading-10">Chefs</div>
//         <span className="text-[#ff9f0d] text-5xl font-bold font-helvetica leading-[56px]">Me</span>
//         <span className="text-white text-5xl font-bold font-helvetica leading-[56px]">et Our Chef</span>
//       </div>
      
//       <div className="Card2 w-[312px] h-[391px] flex-col justify-center items-center inline-flex">
//         <div className="ChefCard1 w-[312px] h-[391px] relative flex-col justify-start items-start flex">
//           <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chefimage2} alt="Chef D.Scoriesh" width={312} height={391} />
//           <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md" />
//           <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D.Scoriesh</div>
//           <div className="ChiefChef text-[#333333] text-sm font-bold font-inter leading-snug">Assistant Chef</div>
//         </div>
//       </div>
//       <div className="Card3 w-[312px] h-[391px] flex-col justify-center items-center inline-flex">
//         <div className="ChefCard1 w-[312px] h-[391px] relative flex-col justify-start items-start flex">
//           <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chefimage3} alt="Chef M. William" width={312} height={391} />
//           <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md" />
//           <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">M. William</div>
//           <div className="ChiefChef text-[#333333] text-sm font-bold font-inter leading-snug">Advertising Chef</div>
//         </div>
//       </div>
//       <div className="Card4 w-[312px] h-[391px] flex-col justify-center items-center inline-flex">
//         <div className="ChefCard1 w-[312px] h-[391px] relative flex-col justify-start items-start flex">
//           <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chefimage4} alt="Chef W. Readfroad" width={312} height={391} />
//           <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md" />
//           <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">W. Readfroad</div>
//           <div className="ChiefChef text-[#333333] text-sm font-bold font-inter leading-snug">Chef</div>
//         </div>
//       </div>
//       <div className="Group1000002073 w-[155px] h-[50px] relative">
//         <div className="Rectangle8868 w-[155px] h-[50px] left-0 top-0 absolute rounded-[25px] border border-[#ff9f0d]" />
//         <div className="SeeMore left-[41px] top-[13px] absolute text-white text-base font-bold font-inter leading-normal">See More</div>
//       </div>
//       <div className="ChefCard w-[312px] h-[391px] flex-col justify-center items-center inline-flex">
//         <div className="ChefCard1 w-[312px] h-[391px] relative flex-col justify-start items-start flex">
//           <Image className="Rectangle8863 w-[312px] h-[391px] rounded-md" src={chefimage1} alt="Chef D. Estwood" width={312} height={391} />
//           <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md" />
//           <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D. Estwood</div>
//           <div className="ChiefChef text-[#333333] text-sm font-bold font-inter leading-snug">Chief Chef</div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';
import chefimage1 from '../../../public/chefs/Rectangle 8863-3.png';
import chefimage2 from '../../../public/chefs/Rectangle 8863.png';
import chefimage3 from '../../../public/chefs/Rectangle 8863-1.png';
import chefimage4 from '../../../public/chefs/Rectangle 8863-2.png';

export default function MeetOurChef() {
  return (
    <div className="mx-auto mt-[120px] max-w-[1320px]">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="text-[#ff9f0d] text-[32px] font-greatVibes">Chefs</div>
        <h2 className="text-5xl font-bold font-helvetica leading-[56px]">
          <span className="text-[#ff9f0d]">Me</span>
          <span className="text-white">et Our Chef</span>
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16 justify-items-center mx-auto">
        {/* Card 1 */}
        <div className="relative w-[312px] h-[391px] bg-white rounded-md shadow-lg overflow-hidden">
          <Image src={chefimage1} alt="Chef D. Estwood" layout="fill" objectFit="cover" />
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center p-3">
            <div className="text-white text-lg font-bold font-inter">D. Estwood</div>
            <div className="text-white text-sm font-inter">Chief Chef</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[312px] h-[391px] bg-white rounded-md shadow-lg overflow-hidden">
          <Image src={chefimage2} alt="Chef D. Scoriesh" layout="fill" objectFit="cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center p-3">
            <div className="text-white text-lg font-bold font-inter">D. Scoriesh</div>
            <div className="text-white text-sm font-inter">Assistant Chef</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-[312px] h-[391px] bg-white rounded-md shadow-lg overflow-hidden">
          <Image src={chefimage3} alt="Chef M. William" layout="fill" objectFit="cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center p-3">
            <div className="text-white text-lg font-bold font-inter">M. William</div>
            <div className="text-white text-sm font-inter">Advertising Chef</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-[312px] h-[391px] bg-white rounded-md shadow-lg overflow-hidden">
          <Image src={chefimage4} alt="Chef W. Readfroad" layout="fill" objectFit="cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center p-3">
            <div className="text-white text-lg font-bold font-inter">W. Readfroad</div>
            <div className="text-white text-sm font-inter">Chef</div>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <button className="w-[155px] h-[50px] rounded-[25px] border border-[#ff9f0d] text-white text-base font-bold font-inter">
          See More
        </button>
      </div>
    </div>
  );
}
