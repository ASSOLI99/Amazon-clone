import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import ProductFeed from "../components/ProductFeed";

// interface ProductProp {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: { rate: number; count: number };
// }
// interface ProductsProps {
//   products: [ProductProp];
// }

const Home: NextPage = ({ products }: any) => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <div className={darkMood ? "dark bg-gray-100" : "bg-gray-100"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await axios
    .get("https://fakestoreapi.com/products", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    })
    .then((response) => response.data);
  return {
    props: {
      products: products,
    },
  };
};
