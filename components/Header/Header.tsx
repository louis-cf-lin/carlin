import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import classes from "./header.module.scss";

const Header: FC = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <a href="#top" className={classes.logo}>
          <div className={classes.horizontal}>
            <Image
              src="/logo-horizontal-dark.png"
              width={4331}
              height={1000}
              alt="Carlin Tech"
            />
          </div>
          <div className={classes.icon}>
            <Image
              src="/icon.png"
              width={1000}
              height={1000}
              alt="Carlin Tech"
            />
          </div>
        </a>
        <div className={classes.container}>
          <Link target="_blank" href="tel:+6493099919">
            <a>
              <i className={`material-icons-outlined grad-icon`}>phone</i>
              <p>+64 9 309 9919</p>
            </a>
          </Link>
          <Link target="_blank" href="mailto:info@carlintech.com">
            <a>
              <i className={"material-icons-outlined grad-icon"}>email</i>
              <p>info@carlintech.com</p>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
