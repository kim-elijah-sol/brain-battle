import { Street } from "../types";

function getNextPosition(
  [y, x]: [number, number],
  street: Street
): [number, number] {
  const [dy, dx] = (() => {
    switch (street) {
      case "n":
        return [-1, 0];
      case "s":
        return [1, 0];
      case "w":
        return [0, -1];
      case "e":
        return [0, 1];
    }
  })();

  return [y + dy, x + dx];
}

export default getNextPosition;
