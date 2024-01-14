import { PropsWithChildren } from "react";

interface Props {
  is지뢰?: boolean;
}

function 바둑칸({ is지뢰, children }: PropsWithChildren<Props>) {
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
        backgroundColor: is지뢰 ? "#f00" : "#ddb35b",
      }}
    >
      {children}
    </div>
  );
}

export default 바둑칸;
