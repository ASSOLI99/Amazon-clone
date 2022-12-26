import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slice/basketSlice";

function CheckoutProduct({ item }: any) {
  const { id, title, price, description, category, image, rating } = item;
  const dispatch = useDispatch();
  const addToBasketHandler = () => {
    dispatch(addToBasket(item));
  };
  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        loading="lazy"
        alt="product image"
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
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
        <p className="text-sm my-2">
          {description.length > 60
            ? `${description.slice(0, 60)}...`
            : description}
        </p>
        <p className="font-bold text-gray-700 mb-10">{`$${price}`}</p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <button
          onClick={addToBasketHandler}
          className=" bg-main-theme text-sm sm:text-md  text-white-text font-bold rounded py-1   w-full active:bg-sky-600 hover:bg-secondary-theme transition-all"
        >
          Add
        </button>
        <button
          onClick={removeItem}
          className="bg-main-theme text-sm sm:text-md text-white-text font-bold rounded py-1  w-full active:bg-sky-600 hover:bg-secondary-theme transition-all"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
