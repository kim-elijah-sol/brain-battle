import { useState } from "react";
import { create바둑판 } from "../logic/create바둑판";
import useColorTurnUser from "./useColorTurnUser";

function useColorTurn() {
  const [차례, set차례] = useState<"흑돌" | "백돌">("흑돌");

  const 흑돌 = useColorTurnUser();

  const 백돌 = useColorTurnUser();

  const [바둑판, set바둑판] = useState(create바둑판());

  return {
    바둑판,
    흑돌,
    백돌,
    차례,
  };
}

export default useColorTurn;
