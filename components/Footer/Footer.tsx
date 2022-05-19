import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import classes from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <Link href="#top">
        <a className={classes.logo}>
          <div className={classes.logoVertical}>
            <Image
              src="/logo-vertical-dark.png"
              width={1000}
              height={1451}
              alt="Carlin Tech"
            />
          </div>
          <div className={classes.logoHorizontal}>
            <Image
              src="/logo-horizontal-dark.png"
              width={4331}
              height={1000}
              alt="Carlin Tech"
            />
          </div>
        </a>
      </Link>
      <Link href="https://goo.gl/maps/PEtSSewDp2Fr8RAf6" target="_blank">
        <a className={classes.footerBlock}>
          <i className={`material-icons-outlined ${classes.icon}`}>place</i>
          <div className={classes.address}>
            <p>74E France Street South</p>
            <p>Eden Terrace</p>
            <p>Auckland 1010</p>
            <p>New Zealand</p>
          </div>
        </a>
      </Link>
      <Link href="tel:+6493099919" target="_blank">
        <a className={classes.footerBlock}>
          <i className={`material-icons-outlined ${classes.icon} grad-icon`}>
            phone
          </i>
          <p>+64 9 309 9919</p>
        </a>
      </Link>
      <Link href="mailto:info@carlintech.com" target="_blank">
        <a className={classes.footerBlock}>
          <i className={`material-icons-outlined ${classes.icon} grad-icon"`}>
            email
          </i>
          <p>info@carlintech.com</p>
        </a>
      </Link>
      <div className={classes.legal}>
        &#169; 2020 Carlin Technology Solutions. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

// TODO - grad-icon style
