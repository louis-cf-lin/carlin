import Image from "next/image";
import { FC } from "react";
import ButtonOutline from "../UI/ButtonOutline";
import classes from "./Prompt.module.scss";

const Prompt: FC = () => {
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>It&apos;s time to scale</h2>
      <div className={classes.subtitle}>We&apos;re more than just IT.</div>
      <ButtonOutline label="Get in touch" />
      <div className={classes.bg}>
        <Image src="/prompt.jpg" layout="fill" objectFit="cover" alt="Scale" />
      </div>
    </div>
  );
};

export default Prompt;
