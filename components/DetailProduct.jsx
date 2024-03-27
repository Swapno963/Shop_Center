import { priceAfterDiscount } from "@/utils/PriceAfterDiscount";
import { getDetailProduct } from "@/utils/getDetailProduct";
import { showRatingImge } from "@/utils/showRatingImage";
import Image from "next/image";
import Link from "next/link";

export default function DetailProduct({ productId }) {
  const product = getDetailProduct(productId);
  // console.log(product);
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20 text-gray-800">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              width={220}
              height={220}
              src={product.thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt="Main image"
            />

            <div className="flex gap-4 mt-4">
              {product.images.map((img,index) => (
                <Image
                width={220}
              height={220}
                key={index}
                  src={img}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/${product.category}`}>
                {" "}
                {product.category}
              </Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {showRatingImge(product.rating).map((img,index ) => (
                <Image
                key={index}
                  width={10}
                  height={20}
                  src={`/${img}`}
                  className="w-[30px] h-[40px] object-cover"
                  alt="rating image"
                />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product.price}
                </span>
                <span className="font-bold text-2xl">
                  $
                  {priceAfterDiscount(
                    product.price,
                    product.discountPercentage
                  )}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{product.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {priceAfterDiscount(product.price, product.discountPercentage)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
