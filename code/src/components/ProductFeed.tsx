import React from "react";
import Product from "./Product";

function ProductFeed({ products }: any) {
  return (
    <div className="md:-mt-20  flex px-9 md:px-20 lg:px-32 gap-5 flex-wrap  justify-center ">
      {products.map((item: any) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductFeed;
