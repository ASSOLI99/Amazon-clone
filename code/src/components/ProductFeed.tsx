import Image from "next/image";
import Link from "next/link";
import React from "react";
import Product from "./Product";

function ProductFeed({ products }: any) {
  return (
    <div className="md:-mt-20  flex px-9 md:px-20 lg:px-32 gap-5 flex-wrap  justify-center ">
      {products.map((item: any, index: number) => {
        if (index == 4) {
          return (
            <div key={item.id} className="relative w-full h-72">
              <Link
                href="/offers"
                className="font-bold rounded-xl md:rounded-none bg-main-theme/90 hover:bg-secondary-theme transition-all text-white-text text-center  absolute left-1/2 top-1/2 -translate-x-1/2 z-20 w-64 md:w-full text-2xl md:text-6xl"
              >
                AMAZING OFFERS !
              </Link>
              <Image
                style={{ objectFit: "cover" }}
                fill
                alt="background image"
                src={
                  "https://images.pexels.com/photos/985287/pexels-photo-985287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
            </div>
          );
        }
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductFeed;
