import { streets } from "../constant";
import { Street } from "../types";

function createRandomStreet(): Street[] {
  /** 2개 혹은 3개 */
  const streetCount = Math.floor(Math.random() * 2) + 2;

  const street: Street[] = [];

  /** 중복되지 않는 랜덤한 길을 생성 */
  while (street.length < streetCount) {
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    if (!street.includes(randomStreet)) {
      street.push(randomStreet);
    }
  }

  return street;
}

export default createRandomStreet;
