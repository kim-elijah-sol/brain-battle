import { 바둑판_길이, 종료_개수 } from "../constant";
import { 바둑알, 바둑칸 } from "../types";

function create승리한_바둑알_텍스트(바둑알: "w" | "b") {
  return Array.from({ length: 종료_개수 }).fill(바둑알).join("");
}

function 탐색(바둑판: 바둑칸[]): 바둑알 {
  const 바둑알_텍스트 = 바둑판.map((바둑알) => 바둑알.바둑알 ?? "n").join("");

  if (바둑알_텍스트.includes(create승리한_바둑알_텍스트("b"))) return "b";
  if (바둑알_텍스트.includes(create승리한_바둑알_텍스트("w"))) return "w";
  return null;
}

function get대각선_바둑판(
  바둑판: 바둑칸[][],
  시작_인덱스: [number, number],
  방향: "24분면" | "13분면"
): 바둑칸[] {
  let [x, y] = 시작_인덱스;

  const 대각선_바둑판: 바둑칸[] = [];

  while (x < 바둑판_길이 && y < 바둑판_길이 && x > -1 && y > -1) {
    대각선_바둑판.push(바둑판[x][y]);
    if (방향 === "24분면") {
      x++;
      y++;
    } else {
      x--;
      y++;
    }
  }

  return 대각선_바둑판;
}

export function get게임_승자(바둑판: 바둑칸[][]): 바둑알 {
  for (let i = 0; i < 바둑판_길이; i++) {
    const 가로로_승리한_바둑알 = 탐색(바둑판[i]);

    if (가로로_승리한_바둑알) return 가로로_승리한_바둑알;

    const 세로로_승리한_바둑알 = 탐색(
      Array.from({ length: 바둑판_길이 }).map((_, j) => 바둑판[j][i])
    );

    if (세로로_승리한_바둑알) return 세로로_승리한_바둑알;

    const 대각선으로_승리한_바둑알 = 탐색(
      get대각선_바둑판(
        바둑판,
        [i, 0],
        i < 바둑판_길이 / 2 ? "24분면" : "13분면"
      )
    );

    if (대각선으로_승리한_바둑알) return 대각선으로_승리한_바둑알;
  }

  return null;
}
