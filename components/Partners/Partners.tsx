import Image from "next/image";
import { FC } from "react";

import classes from "./Partners.module.scss";

const Partners: FC = () => {
  return (
    <div className={classes.section}>
      <div className={classes.logo}>
        <Image
          src="/shuttle.png"
          layout="fill"
          objectFit="contain"
          alt="Shuttle"
        />
      </div>
      <div className={classes.logo}>
        <Image
          src="/microsoft.png"
          layout="fill"
          objectFit="contain"
          alt="Microsoft"
        />
      </div>
      <div className={classes.logo}>
        <Image src="/bosch.png" layout="fill" objectFit="contain" alt="Bosch" />
      </div>
      <div className={classes.logo}>
        <Image src="/intel.png" layout="fill" objectFit="contain" alt="Intel" />
      </div>
      <div className={classes.logo}>
        <Image
          src="/infortrend.png"
          layout="fill"
          objectFit="contain"
          alt="Infortrend"
        />
      </div>
    </div>
  );
};

export default Partners;
