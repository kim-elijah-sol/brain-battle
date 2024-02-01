import { useState } from "react";
import createJungle from "../logic/createJungle";
import createRandomStreet from "../logic/createRandomStreet";
import rotatePiece from "../logic/rotatePiece";

function useJungleMaze() {
  const [jungle, setJungle] = useState(createJungle());

  const [restPiece, setRestPiece] = useState(createRandomStreet());

  function 남은_조각_돌리기() {
    setRestPiece(restPiece.map(rotatePiece));
  }

  return {
    jungle,
    restPiece,
    남은_조각_돌리기,
  };
}

export default useJungleMaze;
