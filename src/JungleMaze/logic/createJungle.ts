import { jungle길이, 고정칸Street, 고정칸_좌표 } from "../constant";
import { Piece, Street } from "../types";

function createJungle(): Piece[][] {
  const jungle: Piece[][] = [];

  for (let y = 0; y < jungle길이; y++) {
    const row: Piece[] = [];
    for (let x = 0; x < jungle길이; x++) {
      const is고정칸 = 고정칸_좌표.some(([_y, _x]) => _y === y && _x === x);

      let street: Street[];

      if (is고정칸) {
        street = 고정칸Street[`${y},${x}`];
      }

      street = [];

      row.push({
        street,
      });
    }
    jungle.push(row);
  }

  return jungle;
}

export default createJungle;
