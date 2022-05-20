import { ButtonHTMLAttributes, FC } from "react";

import classes from "./ButtonOutline.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonOutline: FC<Props> = ({ label, className, ...rest }) => {
  return (
    <button className={`${classes.btn} ${className}`} title={label} {...rest}>
      {label}
    </button>
  );
};

export default ButtonOutline;
