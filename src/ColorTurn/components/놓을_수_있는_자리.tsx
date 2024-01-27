import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { 바둑판_길이 } from "../constant";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {}

function 놓을_수_있는_자리(props: Props) {
  const size = `calc(calc(calc(100vw - 32px) / ${바둑판_길이}) * 0.6)`;

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;

        &::after {
          content: "";
          width: ${size};
          height: ${size};
          max-width: 60px;
          max-height: 60px;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: 0.32s;
          background-color: #00ff00;
          opacity: 0.35;
        }

        &:hover {
          &::after {
            opacity: 1;
          }
        }
      `}
      {...props}
    />
  );
}

export default 놓을_수_있는_자리;
