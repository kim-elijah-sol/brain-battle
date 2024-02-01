import { jungle길이 } from "../constant";
import { Piece } from "../types";

function createJungle(): Piece[][] {
  const jungle: Piece[][] = [];

  for (let y = 0; y < jungle길이; y++) {
    const row: Piece[] = [];
    for (let x = 0; x < jungle길이; x++) {
      row.push({
        street: [],
      });
    }
    jungle.push(row);
  }

  return jungle;
}

export default createJungle;
