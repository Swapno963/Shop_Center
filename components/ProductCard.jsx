import { priceAfterDiscount } from "@/utils/PriceAfterDiscount";
import Link from "next/link";

export default function ProductCard({ pd }) {
  return (
    <div>
      <div
        className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] transition-all duration-3000 ease-in-out transform`}
        style={{
          backgroundImage: `url("${pd.thumbnail}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <h2 className="text-sm lg:text-base mt-8 text-[#919090]">
        <Link className="text-base font-bold" href={`/products/${pd.id}`}>
          {pd.title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${pd.category}`}>({pd.category})</Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{pd.description} </p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${pd.price}</span> $
        {priceAfterDiscount(pd.price, pd.discountPercentage)}
      </p>
    </div>
  );
}
