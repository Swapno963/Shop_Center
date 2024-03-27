import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProductArea from "@/components/ProductArea";
import { priceAfterDiscount } from "@/utils/PriceAfterDiscount";
import { getData } from "@/utils/getData";
import Image from "next/image";

export default function Home() {
  const data = getData(12);
  // console.log(data);
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <ProductArea />
      <Footer />
    </div>
  );
}
