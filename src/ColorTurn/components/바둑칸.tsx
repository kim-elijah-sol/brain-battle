import { PropsWithChildren } from "react";

function 바둑칸({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: "1px solid black",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddb35b",
      }}
    >
      {children}
    </div>
  );
}

export default 바둑칸;
