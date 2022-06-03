import Image from "next/image";
import { FC } from "react";

import classes from "./Blurb.module.scss";

const Blurb: FC = () => {
  return (
    <div className={classes.section}>
      <div className={classes.image}>
        <Image src="/blurb.jpg" layout="fill" objectFit="cover" alt="Blurb" />
      </div>
      <div className={classes.text}>
        Specialists in integrated IT infrastructure and security planning,
        design, deployment, &amp; project management.
      </div>
    </div>
  );
};

export default Blurb;
