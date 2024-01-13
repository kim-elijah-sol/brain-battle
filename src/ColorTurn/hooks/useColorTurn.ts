import { useState } from "react";
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
    const y = 차례 === "백돌" ? 0 : 바둑판_길이 - 1;

    const 놓을_수_있는_위치 = Array.from({ length: 바둑판_길이 }).map(
      (_, x) => [x, y] as [number, number]
    );

    set놓을_수_있는_위치(놓을_수_있는_위치);
  }

  return {
    바둑판,
    흑돌,
    백돌,
    차례,
    돌_놓기,
    놓을_수_있는_위치,
  };
}

export default useColorTurn;
