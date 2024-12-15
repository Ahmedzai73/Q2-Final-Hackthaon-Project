import Image from "next/image";

interface OurMenuCardsProps {
  name: string;
  dis: string;
  price: string;
  imgSrc: string;
  alt: string;
}
export default function OurMenuCards({name, dis, price, imgSrc, alt}:OurMenuCardsProps){
return (
    <div className="card w-[376px] h-[79px] flex cursor-pointer hover:scale-105 transform duration-300">
    <Image className="Image  rounded-md object-cover" src={imgSrc} alt={alt} width={80} height={79} layout="intrinsic" />
    <div className="textcontentholder h-[79px] relative flex flex-col ml-2 items-start justify-between">
    <h1 className="Name  text-white text-xl font-bold font-inter  leading-7">{name}</h1>
    <p className="Description text-white text-sm font-normal font-inter leading-snug">{dis}</p>
    <h2 className="Price  text-[#ff9f0d] text-lg font-bold font-inter leading-relaxed">{price}</h2>
    </div>
    </div>
)

}
