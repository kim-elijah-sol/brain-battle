import { 바둑판_길이, 종료_개수 } from "../constant";
import { 바둑알, 바둑칸 } from "../types";

type 바둑알_그룹 = {
  바둑알: 바둑알;
  개수: number;
};

function get바둑알_그룹(acc: 바둑알_그룹[], current: 바둑알) {
  const last = acc[acc.length - 1];

  if (last?.바둑알 === current) {
    return acc.map((바둑알_그룹, index) => {
      if (index === acc.length - 1) {
        return {
          ...바둑알_그룹,
          개수: 바둑알_그룹.개수 + 1,
        };
      } else {
        return 바둑알_그룹;
      }
    });
  } else {
    return acc.concat({
      바둑알: current,
      개수: 1,
    });
  }
}

function is승리(바둑알_목록: 바둑알[], 바둑알: "w" | "b") {
  return 바둑알_목록
    .reduce(get바둑알_그룹, [])
    .some(
      (바둑알_그룹) =>
        바둑알_그룹.바둑알 === 바둑알 && 바둑알_그룹.개수 === 종료_개수
    );
}

function 탐색(바둑판: 바둑칸[]): 바둑알 {
  const 바둑알_목록 = 바둑판.map((바둑알) => 바둑알.바둑알);

  if (is승리(바둑알_목록, "b")) return "b";
  if (is승리(바둑알_목록, "w")) return "w";
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
    대각선_바둑판.push(바둑판[y][x]);
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

    if (i === 0 || i === 바둑판_길이 - 1) {
      const 아래_1단계_대각선으로_승리한_바둑알 = 탐색(
        get대각선_바둑판(
          바둑판,
          [i, 1],
          i < 바둑판_길이 / 2 ? "24분면" : "13분면"
        )
      );

      if (아래_1단계_대각선으로_승리한_바둑알)
        return 아래_1단계_대각선으로_승리한_바둑알;

      const 아래_2단계_대각선으로_승리한_바둑알 = 탐색(
        get대각선_바둑판(
          바둑판,
          [i, 2],
          i < 바둑판_길이 / 2 ? "24분면" : "13분면"
        )
      );

      if (아래_2단계_대각선으로_승리한_바둑알)
        return 아래_2단계_대각선으로_승리한_바둑알;
    }
  }

  return null;
}
