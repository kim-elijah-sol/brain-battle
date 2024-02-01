import { useState } from "react";
import createJungle from "../logic/createJungle";
import createRandomStreet from "../logic/createRandomStreet";

function useJungleMaze() {
  const [jungle, setJungle] = useState(createJungle());

  const [restPiece, setRestPiece] = useState(createRandomStreet());

  return {
    jungle,
    restPiece,
  };
}

export default useJungleMaze;
