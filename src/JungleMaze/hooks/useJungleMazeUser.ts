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

  function 초기화() {
    setPosition(startPositon);
    setTargets(
      getRandomTargets().map((target) => ({
        target,
        isFind: false,
      }))
    );
  }

  return {
    position,
    targets,
    nextTarget,
    setPosition,
    handleFindTarget,
    초기화,
  };
}

export default useJungleMazeUser;
