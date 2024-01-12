import { useState } from "react";
import { create바둑판 } from "../logic/create바둑판";

function useColorTurn() {
  const [바둑판, set바둑판] = useState(create바둑판());

  return {
    바둑판,
  };
}

export default useColorTurn;
