import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ButtonSolid from "../UI/ButtonSolid";

import classes from "./Landing.module.scss";

const Landing: FC = () => {
  return (
    <div id="top" className={classes.landing}>
      <div className={classes.bgOuter}>
        <div className={classes.bgInner}>
          <Image
            src="/landing.jpg"
            layout="fill"
            objectFit="cover"
            alt="Motherboard"
          />
        </div>
      </div>
      <div className={classes.logo}>
        <Image src="/icon.png" layout="fill" alt="Carlin Tech" />
      </div>
      <div className={classes.contact}>
        <Link href="tel:+6493099919" target="_blank">
          <a title="Phone +64 9 309 9919">
            <i className="material-icons-outlined">phone</i>
            <p>+64 9 309 9919</p>
          </a>
        </Link>
        <Link href="mailto:info@carlintech.com" target="_blank">
          <a title="Email info@carlintech.com">
            <i className="material-icons-outlined">email</i>
            <p>info@carlintech.com</p>
          </a>
        </Link>
      </div>
      <h1 className={classes.title}>Tomorrow&apos;s tech solutions, today.</h1>
      <ButtonSolid label="Get Started" style={{ zIndex: 1 }} />
      <div className={classes.scrollIcon}></div>
    </div>
  );
};

export default Landing;
