import { 바둑판_길이, 지뢰_개수 } from "../constant";

export function get지뢰Indexs(): number[] {
  const 지뢰Indexs: number[] = [];
  while (지뢰Indexs.length < 지뢰_개수) {
    const 지뢰Index = Math.floor(Math.random() * 바둑판_길이);
    if (!지뢰Indexs.includes(지뢰Index)) {
      지뢰Indexs.push(지뢰Index);
    }
  }
  return 지뢰Indexs;
}
