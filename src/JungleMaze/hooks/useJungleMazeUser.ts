import { useState } from "react";

interface Props {
  startPositon: [number, number];
}

function useJungleMazeUser({ startPositon }: Props) {
  const [position, setPosition] = useState(startPositon);

  return {
    position,
    setPosition,
  };
}

export default useJungleMazeUser;
