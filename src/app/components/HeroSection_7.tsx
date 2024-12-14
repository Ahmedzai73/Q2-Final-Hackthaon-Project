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


export default function MeetOurChef() {
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
          <img className="Rectangle8863 w-[312px] h-[391px] rounded-md" src="/chefs/Rectangle 8863-3.png" alt='D.Estwood' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500  absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D.Estwood</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Chief Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}

        {/* this is card 2 */}
        <div className="divcard2 main relative cursor-pointer group ">
          <img className="Rectangle8863 w-[312px] h-[391px] rounded-md" src="/chefs/Rectangle 8863.png" alt='D.Scoriesh' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">D.Scoriesh</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Assistant Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}
      
        {/* this is card 3 */}
        <div className="divcard3 main relative cursor-pointer group ">
          <img className="Rectangle8863 w-[312px] h-[391px] rounded-md" src="/chefs/Rectangle 8863-1.png" alt='M. William' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">M. William</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Assistant Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}

        {/* this is card 4 */}
        <div className="divcard4 main relative cursor-pointer group ">
          <img className="Rectangle8863 w-[312px] h-[391px] rounded-md" src="/chefs/Rectangle 8863-2.png" alt='W.Readfroad' />
          <div className="Rectangle8867 w-[181px] h-[67px] bg-white rounded-bl-md px-4 py-2 opacity-0 group-hover:opacity-100 transform duration-500 absolute bottom-0">
          <div className="DEstwood text-[#333333] text-lg font-bold font-inter leading-relaxed">W.Readfroad</div>
          <div className="ChiefChef text-[#333333] text-sm font-normal font-inter leading-snug">Chef</div>
          </div>
        </div>
        {/* _______________________________________________________________________________________ */}
      </div>
     
    </div>

  );
}
