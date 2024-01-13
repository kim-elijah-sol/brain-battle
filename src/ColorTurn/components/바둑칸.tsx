/* eslint-disable react/jsx-pascal-case */
import { 바둑알 } from "../types";
import 놓인_바둑알 from "./놓인_바둑알";

interface Props {
  바둑알: 바둑알;
}

function 바둑칸({ 바둑알 }: Props) {
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
      {바둑알 !== null && <놓인_바둑알 바둑알={바둑알} />}
    </div>
  );
}

export default 바둑칸;
