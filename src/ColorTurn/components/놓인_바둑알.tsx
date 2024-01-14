import { HTMLAttributes } from "react";

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
  바둑알: "w" | "b";
}

function 놓인_바둑알({ 바둑알, ...props }: Props) {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: 바둑알 === "w" ? "white" : "black",
        cursor: "pointer",
      }}
      {...props}
    ></div>
  );
}

export default 놓인_바둑알;
