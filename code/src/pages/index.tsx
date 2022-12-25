import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import Banner from "../components/Banner";
const Home: NextPage = () => {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <div className={darkMood ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
