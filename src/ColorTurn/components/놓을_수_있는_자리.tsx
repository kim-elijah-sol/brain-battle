import { HTMLAttributes } from "react";
import style from "./놓을_수_있는_자리.module.css";

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "className"> {}

function 놓을_수_있는_자리(props: Props) {
  return <div className={style.p} {...props} />;
}

export default 놓을_수_있는_자리;
