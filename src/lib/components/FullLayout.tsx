import { PropsWithChildren } from "react";

function FullLayout({ children }: PropsWithChildren) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default FullLayout;
