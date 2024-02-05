import {
  jungle길이,
  고정칸Street,
  고정칸_좌표,
  유동칸_중_3갈래_개수,
} from "../constant";
import { Piece, Street } from "../types";
import createRandomStreet from "./createRandomStreet";

function createJungle(): Piece[][] {
  const jungle: Piece[][] = [];

  const randomSteetCountArray = Array.from({
    length: jungle길이 ** 2 - 고정칸_좌표.length,
  })
    .map((_, index) => (index < 유동칸_중_3갈래_개수 ? 3 : 2))
    .sort(() => Math.random() - 0.5);

  let randomStreetCount = 0;

  for (let y = 0; y < jungle길이; y++) {
    const row: Piece[] = [];
    for (let x = 0; x < jungle길이; x++) {
      const is고정칸 = 고정칸_좌표.some(([_y, _x]) => _y === y && _x === x);

      let street: Street[];

      if (is고정칸) {
        street = 고정칸Street[`${y},${x}`];
      } else {
        street = createRandomStreet(randomSteetCountArray[randomStreetCount++]);
      }

      row.push({
        street,
      });
    }
    jungle.push(row);
  }

  return jungle;
}

export default createJungle;
