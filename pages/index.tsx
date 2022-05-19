import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Landing from "../components/Landing/Landing";
import classes from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Carlin Tech</title>
        <meta
          name="description"
          content="Carlin Tech - tomorrow's tech solutions, today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={classes.main}>
        <Landing />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
