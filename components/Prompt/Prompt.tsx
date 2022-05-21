import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ButtonOutline from "../UI/ButtonOutline";
import classes from "./Prompt.module.scss";

const Prompt: FC = () => {
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>It&apos;s time to scale</h2>
      <div className={classes.subtitle}>
        Become one of many of our clients around the world.
      </div>
      <Link href="/contact">
        <a>
          <ButtonOutline label="Get in touch" />
        </a>
      </Link>
      <div className={classes.bg}>
        <Image src="/prompt.jpg" layout="fill" objectFit="cover" alt="Scale" />
      </div>
    </div>
  );
};

export default Prompt;
