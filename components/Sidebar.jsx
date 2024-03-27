import Link from "next/link";

export default function Sidebar({ categoryName }) {
  console.log(categoryName);
  return (
    <>
      {" "}
      <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <Link
          href={`/category/all`}
          className={`hover:border-b  ${
            categoryName === "all"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          All
        </Link>
        <Link
          href={`/category/smartphones`}
          className={`hover:border-b  ${
            categoryName === "smartphones"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          Smartphones
        </Link>
        <Link
          href={`/category/laptops`}
          className={`hover:border-b  ${
            categoryName === "laptops"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          Laptops
        </Link>
        <Link
          href={`/category/fragrances`}
          className={`hover:border-b  ${
            categoryName === "fragrances"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          Fragrances
        </Link>
        <Link
          href={`/category/skincare`}
          className={`hover:border-b  ${
            categoryName === "skincare"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          Skincare
        </Link>
        <Link
          href={`/category/groceries`}
          className={`hover:border-b  ${
            categoryName === "groceries"
              ? "bg-blue-400 font-bold px-1 "
              : "border-black"
          }  block h-6 box-border mt-5`}
        >
          Groceries
        </Link>
      </div>
    </>
  );
}
