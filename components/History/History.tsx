import { FC } from "react";

import classes from "./History.module.scss";

const History: FC = () => {
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>A History of Technological Evolution.</h2>
      <div className={classes.text}>
        Carlin was founded in 1996 in Auckland, New Zealand, where it is still
        based in today. We specialise in large new integrated IT infrastructure
        and security, with a focus on the Pacific Rim. We have clients from
        Australia, Singapore, Malaysia, Papua New Guinea, and New Zealand.
      </div>
    </div>
  );
};

export default History;
