import { useEffect, useMemo, useRef, useState } from "react";
import { 바둑판_길이 } from "../constant";
import { create바둑판 } from "../logic/create바둑판";
import { get게임_승자 } from "../logic/get게임_승자";
import useColorTurnUser from "./useColorTurnUser";

function useColorTurn() {
  const $놓을_돌 = useRef<"가진_돌" | "놓인_돌">();

  const $옮길_돌 = useRef<[number, number]>();

  const [차례, set차례] = useState<"흑돌" | "백돌">("흑돌");

  const [놓을_수_있는_위치, set놓을_수_있는_위치] = useState<
    Array<[number, number]>
  >([]);

  const [마지막으로_놓인_돌_위치, set마지막으로_놓인_돌_위치] =
    useState<[number, number]>();

  const 흑돌 = useColorTurnUser();

  const 백돌 = useColorTurnUser();

  const [바둑판, set바둑판] = useState(create바둑판());

  function 돌_놓기() {
    $놓을_돌.current = "가진_돌";
    $옮길_돌.current = undefined;
    set놓을_수_있는_위치(가진_돌_놓을_수_있는_위치);
  }

  function 가진_돌_놓기(x: number, y: number) {
    let 놓을_알: "w" | "b" = 차례 === "백돌" ? "w" : "b";

    const { is지뢰 } = 바둑판[y][x];

    if (is지뢰) 놓을_알 = 차례 === "백돌" ? "b" : "w";

    set바둑판((바둑판) =>
      바둑판.map((행, _y) =>
        행.map((셀, _x) =>
          x === _x && y === _y
            ? {
                ...셀,
                바둑알: 놓을_알,
              }
            : 셀
        )
      )
    );
    set놓을_수_있는_위치([]);
    set차례(차례 === "백돌" ? "흑돌" : "백돌");
    set마지막으로_놓인_돌_위치([x, y]);
    if (차례 === "백돌") 백돌.바둑알_놓기();
    else 흑돌.바둑알_놓기();

    if (is지뢰) {
      const 바뀌는_알 = 놓을_알 === "b" ? "흑돌" : "백돌";
      console.log(`지뢰 발견 : "${차례}"이 "${바뀌는_알}"로 바뀝니다.`);
    }
  }

  function 놓인_돌_클릭(x: number, y: number) {
    $놓을_돌.current = "놓인_돌";
    $옮길_돌.current = [x, y];

    const 놓을_수_있는_주변_위치: Array<[number, number]> = [
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
    ]
      .filter(([_x, _y]) => 바둑판[y + _y]?.[x + _x]?.바둑알 === null)
      .map(([_x, _y]) => [x + _x, y + _y]);

    set놓을_수_있는_위치(놓을_수_있는_주변_위치);
  }

  function 놓인_돌_옮기기(x: number, y: number) {
    if ($옮길_돌.current) {
      const [_x, _y] = $옮길_돌.current;

      let 옮겨질_알 = 바둑판[_y][_x].바둑알;

      const { is지뢰 } = 바둑판[y][x];

      if (is지뢰) 옮겨질_알 = 옮겨질_알 === "w" ? "b" : "w";

      set바둑판((바둑판) =>
        바둑판.map((행, __y) =>
          행.map((셀, __x) =>
            // 옮겨질 위치 찾기
            x === __x && y === __y
              ? {
                  ...셀,
                  바둑알: 옮겨질_알,
                }
              : // 비워질 위치 찾기
              _x === __x && _y === __y
              ? {
                  ...셀,
                  바둑알: null,
                }
              : 셀
          )
        )
      );

      set놓을_수_있는_위치([]);
      set차례(차례 === "백돌" ? "흑돌" : "백돌");
      set마지막으로_놓인_돌_위치([x, y]);

      if (is지뢰) {
        const 옮겨진_알 = 바둑판[_y][_x].바둑알 === "b" ? "흑돌" : "백돌";
        const 바뀌는_알 = 옮겨질_알 === "b" ? "흑돌" : "백돌";
        console.log(`지뢰 발견 : "${옮겨진_알}"이 "${바뀌는_알}"로 바뀝니다.`);
      }
    }
  }

  const 가진_돌_놓을_수_있는_위치 = useMemo(() => {
    const y = 차례 === "백돌" ? 0 : 바둑판_길이 - 1;

    return Array.from({ length: 바둑판_길이 })
      .map((_, x) => [x, y] as [number, number])
      .filter(([x, y]) => 바둑판[y][x].바둑알 === null);
  }, [차례, 바둑판]);

  useEffect(() => {
    const 게임_승자 = get게임_승자(바둑판);

    if (게임_승자) {
      alert(
        `게임 종료 : [${
          게임_승자 === "b" ? "흑돌" : "백돌"
        }] 님이 승리하셨습니다.`
      );
    }
  }, [바둑판]);

  return {
    바둑판,
    흑돌,
    백돌,
    차례,
    돌_놓기,
    놓을_수_있는_위치,
    가진_돌_놓기,
    is가진_돌_놓을_수_없음: 가진_돌_놓을_수_있는_위치.length === 0,
    놓인_돌_클릭,
    $놓을_돌,
    놓인_돌_옮기기,
    마지막으로_놓인_돌_위치,
  };
}

export default useColorTurn;
