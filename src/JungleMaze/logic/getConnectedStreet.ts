import { Street } from "../types";

function getConnectedStreet(street: Street): Street {
  return street === "n"
    ? "s"
    : street === "s"
    ? "n"
    : street === "w"
    ? "e"
    : "w";
}

export default getConnectedStreet;
