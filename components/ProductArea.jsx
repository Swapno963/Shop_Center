import { priceAfterDiscount } from "@/utils/PriceAfterDiscount";
import { getData } from "@/utils/getData";
import Link from "next/link";
import ProductCard from "./ProductCard";
import EmailSection from "./EmailSection";

export default function ProductArea() {
  const data = getData(12);

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {data.map((pd) => (
            <ProductCard pd={pd} key={pd.id}/>
          ))}
        </div>
      </section>

      <EmailSection />
    </main>
  );
}
