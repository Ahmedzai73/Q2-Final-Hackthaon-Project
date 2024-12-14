import OurMenuCards from "./OurMenuCards";

export default function MenuCardsData() {
  return (
    <div className=" w-[784px] h-[412px]  grid gap-8 grid-cols-2">
      {/* Card 1 */}
      <OurMenuCards
        name="Lettuce Leaf"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_OFismyezPnY.png"
        alt="Lettuce Leaf"
      />
      {/* Card 5 */}
      <OurMenuCards
        name="Glow Cheese"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_ZqREbckCRQA.png"
        alt="Glow Cheese"
      />
      {/* Card 2 */}
      <OurMenuCards
        name="Fresh Breakfast"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="14.5$"
        imgSrc="/img/unsplash_-GFCYhoRe48.png"
        alt="Fresh Breakfast"
      />
      {/* Card 6 */}
      <OurMenuCards
        name="Italian Pizza"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="14.5$"
        imgSrc="/img/unsplash_cLpdEA23Z44.png"
        alt="Italian Pizza"
      />
      {/* Card 3 */}
      <OurMenuCards
        name="Mild Butter"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_Yr4n8O_3UPc.png"
        alt="Mild Butter"
      />
      {/* Card 7 */}
      <OurMenuCards
        name="Sllice Beef"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_mAQZ3X_8_l0.png"
        alt="Sllice Beef"
      />
      {/* Card 4 */}
      <OurMenuCards
        name="Fresh Bread"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_W9OKrxBqiZA.png"
        alt="Fresh Bread"
      />
      {/* Card 8 */}
      <OurMenuCards
        name="Mushaom Pizza"
        dis="Lacus nisi, et ac dapibus velit in consequat."
        price="12.5$"
        imgSrc="/img/unsplash_dphM2U1xq0U.png"
        alt="Mushaom Pizza"
      />
    </div>
  );
}
