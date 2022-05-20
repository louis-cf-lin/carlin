import type { NextPage } from "next";
import Head from "next/head";
import Blurb from "../components/Blurb/Blurb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import History from "../components/History/History";
import Landing from "../components/Landing/Landing";
import Partners from "../components/Partners/Partners";
import Services from "../components/Services/Services";
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
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Header />

      <main className={classes.main}>
        <Landing />
        <Services />
        <Blurb />
        <Partners />
        <History />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
