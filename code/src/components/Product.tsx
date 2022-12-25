import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
// interface ProductProp {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: { rate: number; count: number };
// }
function Product({ item }: any) {
  const { id, title, price, description, category, image, rating } = item;
  return (
    <div
      key={id}
      className="z-20 min-h-96 flex flex-col drop-shadow-lg items-start w-96 md:w-64 lg:w-72 rounded-lg bg-white p-2"
    >
      <p className="text-sm text-gray-600 self-end flex justify-end mb-2">
        {category}
      </p>
      <Link
        href={`product/${id}`}
        className="self-center mb-2 h-56 flex items-center justify-center"
      >
        <Image src={image} width={150} height={150} alt="product image" />
      </Link>
      <h4 className="font-bold text-md mb-2">{title}</h4>
      <div className="flex mb-1 items-center text-gray-600 text-sm">
        {Array(Math.round(rating.rate))
          .fill("")
          .map((_, i: number) => {
            return (
              <AiTwotoneStar className="text-main-theme text-lg" key={i} />
            );
          })}
        ({rating.count})
      </div>
      <p className="text-sm text-gray-800">
        {description.length > 60
          ? `${description.slice(0, 60)}...`
          : description}
      </p>
      <p className="font-bold text-gray-700 mb-10">{`$${price}`}</p>
      <button className="drop-shadow w-full bottom-0 absolute left-1/2 -translate-x-1/2 font-bold rounded-b-lg py-1 bg-sky-400 active:bg-sky-600 hover:bg-secondary-theme transition-all  ">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
