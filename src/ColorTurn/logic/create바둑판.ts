import { 바둑판_길이 } from "../constant";
import { 바둑칸 } from "../types";
import { get지뢰Indexs } from "./get지뢰Indexs";

export function create바둑판(): 바둑칸[][] {
  const 바둑판: 바둑칸[][] = [];
  for (let i = 0; i < 바둑판_길이; i++) {
    const 지뢰Indexs = get지뢰Indexs();

    바둑판.push([]);
    for (let j = 0; j < 바둑판_길이; j++) {
      바둑판[i].push({ 바둑알: null, is지뢰: 지뢰Indexs.includes(j) });
    }
  }
  return 바둑판;
}
