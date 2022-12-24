import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCartAlt, BiSearchAlt, BiMenu } from "react-icons/bi";
function Header() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    if (showNav == false) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  return (
    <header>
      {/* top nav */}
      <div className="dark:bg-secondary-bg bg-main-bg px-4 py-1 flex gap-2 md:gap-4 justify-between md:justify-center">
        <div>
          <Image src="/NEPNET.png" alt="NepNet logo" height={50} width={50} />
        </div>

        <form className="hidden sm:flex items-center justify-center flex-grow">
          <input
            type="text"
            className="h-7 rounded-l  outline-none pl-2 md:w-48 lg:w-96"
          />
          <button
            type="submit"
            className="bg-main-theme hover:bg-secondary-theme transition-all text-black-text h-7 px-2 rounded-r w-10"
          >
            <BiSearchAlt />
          </button>
        </form>
        <div className="flex items-center dark:text-black-text text-white-text ">
          <ul className="flex gap-3  sm:gap-6 justify-between items-center">
            <li className="hover:text-sky-400 transition cursor-pointer">
              <Link href="#">
                <p className="text-vs">Hello Abdullah</p>
                <p className="text-sm md:text-md text-md font-bold pt-2">
                  Account & List
                </p>
              </Link>
            </li>
            <li className="hover:text-main-theme transition cursor-pointer">
              <Link href="#">
                <p className="text-vs">Refunds</p>
                <p className="text-sm md:text-md font-bold pt-2">& Orders</p>
              </Link>
            </li>
            <li className="hover:text-sky-400 transition cursor-pointer">
              <Link href="#">
                <span className="relative">
                  <BiCartAlt className="inline text-4xl" />
                  <span className="bg-main-theme text-vs text-white font-bold absolute right-0 rounded-xl px-1 py-2">
                    2
                  </span>
                </span>
                <span className="text-sm hidden md:inline-block font-bold ml-1">
                  {" "}
                  Basket
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* bottom nav */}
      <div className="bg-secondary-black-bg py-2 px-4 text-white-text drop-shadow-xl">
        <ul className="flex gap-3">
          <li
            onClick={showNavHandler}
            className={
              showNav
                ? "cursor-pointer text-main-theme transition-all text-md"
                : "cursor-pointer hover:text-main-theme transition-all text-md"
            }
          >
            <BiMenu className="inline text-2xl" /> All
          </li>
          <li className="block md:hidden cursor-pointer hover:text-main-theme transition-all text-md">
            Search <BiSearchAlt className="inline" />
          </li>
          <li className="cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Offers</Link>
          </li>
          <li className="cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Recent</Link>
          </li>
          <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Technologies</Link>
          </li>
          <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Bags</Link>
          </li>
          <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Accessories</Link>
          </li>
          <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Laptops</Link>
          </li>
          <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Paints</Link>
          </li>
          <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Clothes</Link>
          </li>
          <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Phons</Link>
          </li>
          <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Anime</Link>
          </li>
          <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Sports</Link>
          </li>
          <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Chair</Link>
          </li>
          <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Stickers</Link>
          </li>
          <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Mics</Link>
          </li>
          <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Camera</Link>
          </li>
          <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Lights</Link>
          </li>
          <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Iphone</Link>
          </li>
          <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
            <Link href={"#"}>Covers</Link>
          </li>
        </ul>
        {showNav && (
          <div className=" border-solid border-t-2 border-t-main-theme ">
            <ul className="flex gap-4 flex-wrap mt-3">
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Offers</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Recent</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Technologies</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Bags</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Accessories</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Offers</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Recent</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Technologies</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Bags</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Accessories</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Offers</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Recent</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Technologies</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Bags</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Accessories</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Offers</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Recent</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Technologies</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Bags</Link>
              </li>
              <li className="cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Accessories</Link>
              </li>
              <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Laptops</Link>
              </li>
              <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Paints</Link>
              </li>
              <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Clothes</Link>
              </li>
              <li className="hidden sm:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Phons</Link>
              </li>
              <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Stickers</Link>
              </li>
              <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Mics</Link>
              </li>
              <li className="hidden md:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Camera</Link>
              </li>
              <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Anime</Link>
              </li>
              <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Sports</Link>
              </li>
              <li className="hidden lg:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Chair</Link>
              </li>
              <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Lights</Link>
              </li>
              <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Iphone</Link>
              </li>
              <li className="hidden xl:block cursor-pointer hover:text-main-theme transition-all text-md">
                <Link href={"#"}>Covers</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
