import { useMemo, useState } from "react";
import { 바둑판_길이 } from "../constant";
import { create바둑판 } from "../logic/create바둑판";
import useColorTurnUser from "./useColorTurnUser";

function useColorTurn() {
  const [차례, set차례] = useState<"흑돌" | "백돌">("흑돌");

  const [놓을_수_있는_위치, set놓을_수_있는_위치] = useState<
    Array<[number, number]>
  >([]);

  const 흑돌 = useColorTurnUser();

  const 백돌 = useColorTurnUser();

  const [바둑판, set바둑판] = useState(create바둑판());

  function 돌_놓기() {
    set놓을_수_있는_위치(가진_돌_놓을_수_있는_위치);
  }

  function 가진_돌_놓기(x: number, y: number) {
    set바둑판((바둑판) =>
      바둑판.map((행, _y) =>
        행.map((셀, _x) =>
          x === _x && y === _y
            ? {
                ...셀,
                바둑알: 차례 === "백돌" ? "w" : "b",
              }
            : 셀
        )
      )
    );
    set놓을_수_있는_위치([]);
    set차례(차례 === "백돌" ? "흑돌" : "백돌");
    if (차례 === "백돌") 백돌.바둑알_놓기();
    else 흑돌.바둑알_놓기();
  }

  const 가진_돌_놓을_수_있는_위치 = useMemo(() => {
    const y = 차례 === "백돌" ? 0 : 바둑판_길이 - 1;

    return Array.from({ length: 바둑판_길이 })
      .map((_, x) => [x, y] as [number, number])
      .filter(([x, y]) => 바둑판[y][x].바둑알 === null);
  }, [차례, 바둑판]);

  return {
    바둑판,
    흑돌,
    백돌,
    차례,
    돌_놓기,
    놓을_수_있는_위치,
    가진_돌_놓기,
    is가진_돌_놓을_수_없음: 가진_돌_놓을_수_있는_위치.length === 0,
  };
}

export default useColorTurn;
