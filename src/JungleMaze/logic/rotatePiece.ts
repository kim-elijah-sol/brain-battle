import { Street } from "../types";

function rotatePiece(street: Street): Street {
  return street === "n"
    ? "e"
    : street === "e"
    ? "s"
    : street === "s"
    ? "w"
    : "n";
}

export default rotatePiece;
