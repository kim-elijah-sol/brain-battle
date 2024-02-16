import { Target } from "../types";

export type TargetItem = {
  target: Target;
  position: [number, number];
};

const targetStartPosition = [
  [0, 0],
  [1, 3],
  [5, 3],
  [6, 6],
] as [number, number][];

function createTarget(): TargetItem[] {
  return (["a", "b", "c", "d"] as Target[])
    .sort(() => Math.random() - 0.5)
    .map((target, index) => ({
      target,
      position: targetStartPosition[index],
    }));
}

export default createTarget;
