import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { 바둑알_사이즈_스타일 } from "./style";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {}

function 놓을_수_있는_자리(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;

        &::after {
          ${바둑알_사이즈_스타일}
          content: "";
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
