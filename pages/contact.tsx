import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm/ContactForm";
import { EMAIL } from "../constants/email";

import classes from "../styles/contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Contact | Carlin Tech</title>
        <meta name="description" content="Contact Carlin Tech." />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <div className={classes.bg}>
        <Image
          src="/contact.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <header className={classes.header}>
        <Link href="/">
          <a className={classes.logo} title="Home">
            <Image src="/icon.png" height={24} width={24} alt="Carlin Tech" />
          </a>
        </Link>
        <Link href="/">
          <a className={classes.homeBtn} title="Home">
            Home
          </a>
        </Link>
      </header>
      <main className={classes.main}>
        <div className={classes.textContainer}>
          <h1 className={classes.h1}>Let&apos;s make it happen.</h1>
          <div className={classes.contactContainer}>
            <Link href="tel:+6493099919" target="_blank">
              <a className={classes.contact} title="Phone +64 9 309 9919">
                <i className="material-icons-outlined">phone</i>+64 9 309 9919
              </a>
            </Link>
            <Link href={`mailto:${EMAIL}`} target="_blank">
              <a className={classes.contact} title={`Email ${EMAIL}`}>
                <i className="material-icons-outlined">email</i>
                {EMAIL}
              </a>
            </Link>
          </div>
        </div>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
