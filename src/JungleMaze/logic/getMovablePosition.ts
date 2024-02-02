import { jungle길이 } from "../constant";
import { Piece } from "../types";

function getMovablePosition(
  jungle: Piece[][],
  [y, x]: [number, number]
): [number, number][] {
  const movablePosition: [number, number][] = [[y, x]];

  const visited: boolean[][] = Array.from({ length: jungle길이 }, () =>
    Array(7).fill(false)
  );

  visited[y][x] = true;

  while (true) {
    /**
     * 북쪽으로 이동 가능한지 확인
     */
    if (jungle[y][x].street.includes("n")) {
      if (!visited[y - 1][x] && jungle[y - 1][x].street.includes("s")) {
        movablePosition.push([y - 1, x]);
        visited[y - 1][x] = true;
        y -= 1;
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return movablePosition;
}

export default getMovablePosition;
