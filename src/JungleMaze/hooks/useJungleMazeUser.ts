import { useState } from "react";
import getRandomTargets from "../logic/getRandomTargets";

interface Props {
  startPositon: [number, number];
}

function useJungleMazeUser({ startPositon }: Props) {
  const [position, setPosition] = useState(startPositon);

  const [targets, setTargets] = useState(
    getRandomTargets().map((target) => ({
      target,
      isFind: false,
    }))
  );

  const nextTarget = targets.find(({ isFind }) => !isFind)?.target;

  function handleFindTarget() {
    setTargets(
      targets.map((target) => {
        if (target.target === nextTarget) {
          return {
            ...target,
            isFind: true,
          };
        }

        return target;
      })
    );
  }

  return {
    position,
    targets,
    nextTarget,
    setPosition,
    handleFindTarget,
  };
}

export default useJungleMazeUser;
