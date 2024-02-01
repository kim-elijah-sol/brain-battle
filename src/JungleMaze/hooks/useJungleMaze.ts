import { useState } from "react";
import createJungle from "../logic/createJungle";

function useJungleMaze() {
  const [jungle, setJungle] = useState(createJungle());

  return {
    jungle,
  };
}

export default useJungleMaze;
