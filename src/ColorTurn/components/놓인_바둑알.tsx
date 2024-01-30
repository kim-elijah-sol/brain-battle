import { HTMLAttributes } from "react";
import { 바둑알_사이즈_스타일 } from "./style";

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
  바둑알: "w" | "b";
  is마지막으로_놓인_자리: boolean;
}

function 놓인_바둑알({
  바둑알,
  onClick,
  is마지막으로_놓인_자리,
  ...props
}: Props) {
  return (
    <div
      css={[
        바둑알_사이즈_스타일,
        {
          borderRadius: "50%",
          backgroundColor: 바둑알 === "w" ? "white" : "black",
          cursor: is마지막으로_놓인_자리 ? "not-allowed" : "pointer",
          opacity: is마지막으로_놓인_자리 ? 0.7 : 1,
        },
      ]}
      onClick={is마지막으로_놓인_자리 ? undefined : onClick}
      {...props}
    ></div>
  );
}

export default 놓인_바둑알;
