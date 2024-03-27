import DetailProduct from "@/components/DetailProduct";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { getCategoryWiseProducts } from "@/utils/categoryWiseProducts";

export default function ProductPage({ params: { categoryName } }) {
  const categoryWiseProducts = getCategoryWiseProducts(categoryName);
  console.log(categoryName, categoryWiseProducts);
  return (
    <div className="bg-white text-gray-700">
      <NavBar />
      <HeroSection />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <Sidebar categoryName={categoryName} />
        {/* starts products */}
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {categoryWiseProducts.map((pd) => (
            <ProductCard pd={pd} key={pd.id} />
          ))}
        </div>
      </section>
      <EmailSection />
      <Footer />
    </div>
  );
}
