import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { EMAIL } from "../../constants/email";
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
            priority={true}
            alt="Motherboard"
          />
        </div>
      </div>
      <div className={classes.logo}>
        <Image src="/icon.png" layout="fill" alt="Carlin Tech" />
      </div>
      <div className={classes.contact}>
        <Link href="/contact">
          <a title="Contact Us">
            <p>Contact Us</p>
            <i className="material-icons-outlined">send</i>
          </a>
        </Link>
      </div>
      <h1 className={classes.title}>Tomorrow&apos;s tech solutions, today.</h1>
      <Link href="/contact">
        <a className={classes.getStarted}>
          <ButtonSolid label="Get Started" style={{ zIndex: 1 }} />
        </a>
      </Link>
      <div className={classes.scrollIcon}></div>
    </div>
  );
};

export default Landing;
