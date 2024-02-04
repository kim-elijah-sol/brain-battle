import { jungle길이 } from "../constant";
import { Piece } from "../types";

function getMovablePosition(
  jungle: Piece[][],
  [y, x]: [number, number]
): [number, number][] {
  const movablePosition: [number, number][] = [[y, x]];

  const visited: boolean[][] = Array.from({ length: jungle길이 }, () =>
    Array(jungle길이).fill(false)
  );

  visited[y][x] = true;

  let 탐색할_칸: [number, number][] = [[y, x]];

  while (true) {
    let 다음_탐색할_칸: [number, number][] = [];

    for (const 칸 of 탐색할_칸) {
      const [y, x] = 칸;

      for (const street of jungle[y][x].street) {
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

        const findStreet = (() => {
          switch (street) {
            case "n":
              return "s";
            case "s":
              return "n";
            case "w":
              return "e";
            case "e":
              return "w";
          }
        })();

        const [ny, nx] = [y + dy, x + dx];

        // 맵에서 벗어나는 경우
        if (ny < 0 || ny >= jungle길이 || nx < 0 || nx >= jungle길이) {
          continue;
        }

        // 이동할 수 없는 길인 경우
        if (jungle[ny][nx].street.includes(findStreet) === false) {
          continue;
        }

        // 이미 방문한 경우
        if (visited[ny][nx]) {
          continue;
        }

        visited[ny][nx] = true;
        다음_탐색할_칸.push([ny, nx]);
        movablePosition.push([ny, nx]);
      }
    }

    if (다음_탐색할_칸.length === 0) {
      break;
    }

    탐색할_칸 = 다음_탐색할_칸;
  }

  return movablePosition;
}

export default getMovablePosition;
