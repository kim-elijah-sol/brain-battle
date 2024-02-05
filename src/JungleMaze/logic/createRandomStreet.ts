import { streets } from "../constant";
import { Street } from "../types";

function createRandomStreet(streetCount: number): Street[] {
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
