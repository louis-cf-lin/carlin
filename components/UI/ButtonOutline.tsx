import { FC, HTMLAttributes } from "react";

import classes from "./ButtonOutline.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonOutline: FC<Props> = ({ label, ...rest }) => {
  return (
    <button className={classes.btn} title={label} {...rest}>
      {label}
    </button>
  );
};

export default ButtonOutline;
