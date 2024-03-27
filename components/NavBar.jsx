import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto ">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            width={220}
            height={320}
            src="/assets/svg/menu.svg"
            className="lg:hidden  w-[114px] h-[40px]"
            alt=""
          />
          <Link href="/">
            <Image
              width={120}
              height={120}
              src="/assets/lws-logo-black.svg"
              className=" w-[114px] h-[40px]"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          width={20}
          height={20}
          src="/assets/svg/avatar.svg"
          className="hidden lg:block w-[30px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          width={20}
          height={20}
          src="/assets/svg/shopping-Cart.svg"
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}
