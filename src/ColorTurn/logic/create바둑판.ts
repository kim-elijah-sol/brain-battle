import { 바둑칸 } from "../types";
import { get지뢰Indexs } from "./get지뢰Indexs";

const size = 6;

export function create바둑판(): 바둑칸[][] {
  const 바둑판: 바둑칸[][] = [];
  for (let i = 0; i < size; i++) {
    const 지뢰Indexs = get지뢰Indexs();

    바둑판.push([]);
    for (let j = 0; j < size; j++) {
      바둑판[i].push({ 바둑알: null, is지뢰: 지뢰Indexs.includes(j) });
    }
  }
  return 바둑판;
}
