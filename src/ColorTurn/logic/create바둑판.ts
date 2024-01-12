import { 바둑칸 } from "../types";

const size = 6;

export function create바둑판(): 바둑칸[][] {
  const 바둑판: 바둑칸[][] = [];
  for (let i = 0; i < size; i++) {
    바둑판.push([]);
    for (let j = 0; j < size; j++) {
      바둑판[i].push({ 바둑알: null });
    }
  }
  return 바둑판;
}
