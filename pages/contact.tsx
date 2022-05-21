import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ButtonOutline from "../components/UI/ButtonOutline";
import { EMAIL } from "../constants/email";

import classes from "../styles/contact.module.scss";

const Contact: NextPage = () => {
  const [mailState, setMailState] = useState("IDLE");

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
        {mailState === "ERROR" && (
          <div className={`${classes.textContainer} ${classes.errorContainer}`}>
            <h1 className={classes.h1}>
              <i className="material-icons-outlined">error_outline</i>Error
            </h1>
            <p className={classes.p}>
              Something went wrong, please refresh the page and try again.
            </p>
            <p className={classes.p}>
              If the problem persists, please email us with your inquiry at{" "}
              <Link href={`mailto:${EMAIL}`}>
                <a title={`Email ${EMAIL}`}>{EMAIL}</a>
              </Link>
              .
            </p>
          </div>
        )}
        {mailState === "SUCCESS" && (
          <div
            className={`${classes.textContainer} ${classes.successContainer}`}
          >
            <h1 className={classes.h1}>Message sent!</h1>
            <p className={classes.p}>
              Thanks for your message! We&apos;ll be in touch with you soon.
            </p>
            <ButtonOutline
              label="Send another message"
              onClick={() => setMailState("IDLE")}
              className={classes.sendAnother}
            />
          </div>
        )}
        {mailState === "IDLE" && (
          <>
            <div className={classes.textContainer}>
              <h1 className={classes.h1}>Let&apos;s make it happen.</h1>
              <div className={classes.contactContainer}>
                <Link href="tel:+6493099919" target="_blank">
                  <a className={classes.contact} title="Phone +64 9 309 9919">
                    <i className="material-icons-outlined">phone</i>+64 9 309
                    9919
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
            <ContactForm mailState={mailState} setMailState={setMailState} />
          </>
        )}
      </main>
    </div>
  );
};

export default Contact;
