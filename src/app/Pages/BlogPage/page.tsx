import Header2 from "@/app/components/MenuPage/Header2";
import Footer_HA from "../../components/HomePage/Footer_HA";
import Herosection_001 from "../../components/BlogPage/Herosection_001";
import Herosection_002 from "../../components/BlogPage/Herosection_002";

export default function Blog() {
  return (
    <div className="bg-whiteColor">
      <Header2 />
      <Herosection_001 />
      <Herosection_002 />
      <div className="footer bg-blackColor">
        <div className="blackbox w-full h-[121px] mt-[121px]" />
        <Footer_HA />
      </div>
    </div>
  );
}
