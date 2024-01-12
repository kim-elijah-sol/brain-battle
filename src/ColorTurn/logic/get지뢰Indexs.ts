export function get지뢰Indexs(): number[] {
  const 지뢰Indexs: number[] = [];
  while (지뢰Indexs.length < 3) {
    const 지뢰Index = Math.floor(Math.random() * 6);
    if (!지뢰Indexs.includes(지뢰Index)) {
      지뢰Indexs.push(지뢰Index);
    }
  }
  return 지뢰Indexs;
}
