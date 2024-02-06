import { Street } from "../types";

function getNextPosition(
  [y, x]: [number, number],
  street: Street
): [number, number] {
  const [dy, dx] = {
    n: [1, 0],
    s: [-1, 0],
    w: [0, 1],
    e: [0, -1],
  }[street];

  return [y + dy, x + dx];
}

export default getNextPosition;
