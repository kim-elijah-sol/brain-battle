import { useState } from "react";
import { 기본_바둑알_수 } from "../constant";

function useColorTurnUser() {
  const [남은_바둑알, set남은_바둑알] = useState(기본_바둑알_수);

  function 바둑알_놓기() {
    if (남은_바둑알 === 0) return;
    set남은_바둑알(남은_바둑알 - 1);
  }

  function 알_채우기() {
    set남은_바둑알(기본_바둑알_수);
  }

  return {
    남은_바둑알,
    바둑알_놓기,
    알_채우기,
  };
}

export default useColorTurnUser;
