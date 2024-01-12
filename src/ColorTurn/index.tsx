import { useEffect } from "react";
import useColorTurn from "./hooks/useColorTurn";

function ColorTurn() {
  const { 바둑판 } = useColorTurn();

  useEffect(() => {
    console.log(바둑판);
  }, [바둑판]);

  return <></>;
}

export default ColorTurn;
