import { PropsWithChildren } from "react";
import { 바둑판_길이 } from "../constant";

interface Props {
  is지뢰?: boolean;
}

function 바둑칸({ is지뢰, children }: PropsWithChildren<Props>) {
  const size = `calc(calc(100vw - 32px) / ${바둑판_길이})`;

  return (
    <div
      css={{
        border: "1px solid black",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: is지뢰 ? "#f00" : "#ddb35b",
        width: size,
        height: size,
        maxWidth: 100,
        maxHeight: 100,
      }}
    >
      {children}
    </div>
  );
}

export default 바둑칸;
