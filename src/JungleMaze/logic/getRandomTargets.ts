import { Target } from "../types";

function getRandomTargets(): Target[] {
  return (["a", "b", "c", "d"] as Target[]).sort(() => Math.random() - 0.5);
}

export default getRandomTargets;
