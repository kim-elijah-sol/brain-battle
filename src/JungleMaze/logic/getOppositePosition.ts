import { jungle길이 } from "../constant";

function getOppositePosition(position: number): number {
  return position === 0
    ? jungle길이 - 1
    : position === jungle길이 - 1
    ? 0
    : position;
}

export default getOppositePosition;
