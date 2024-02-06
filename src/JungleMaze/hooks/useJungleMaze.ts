import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { jungle길이, 밀_수_있는_칸 } from "../constant";
import createJungle from "../logic/createJungle";
import createRandomStreet from "../logic/createRandomStreet";
import getMovablePosition from "../logic/getMovablePosition";
import getOppositePosition from "../logic/getOppositePosition";
import rotatePiece from "../logic/rotatePiece";
import useJungleMazeUser from "./useJungleMazeUser";

function useJungleMaze() {
  const blueUser = useJungleMazeUser({ startPositon: [jungle길이 - 1, 0] });

  const redUser = useJungleMazeUser({ startPositon: [0, jungle길이 - 1] });

  const [action, setAction] = useState<"밀어내기" | "이동">("밀어내기");

  const [turn, setTurn] = useState<"blue" | "red">("blue");

  const [jungle, setJungle] = useState(createJungle());

  const [restPiece, setRestPiece] = useState(createRandomStreet(2));

  const [방금_밀어낸_칸, set방금_밀어낸_칸] = useState<[number, number]>([
    -1, -1,
  ]);

  function 남은_조각_돌리기() {
    setRestPiece(restPiece.map(rotatePiece));
  }

  function 밀어_넣기([y, x]: [number, number]) {
    if (action === "이동") return;

    const 반대_좌표 = [getOppositePosition(y), getOppositePosition(x)] as const;

    const 밀려_나가는_조각 = jungle[반대_좌표[0]][반대_좌표[1]].street;

    setRestPiece([...밀려_나가는_조각]);

    const 방향 = x === 0 || x === 6 ? "x" : "y";

    const 이동_방향 = 방향 === "x" ? (x === 0 ? -1 : 1) : y === 0 ? -1 : 1;

    setJungle(
      jungle.map((행, _y) =>
        행.map((칸, _x) => {
          if (_y === y && _x === x) {
            return {
              street: restPiece,
            };
          }

          if (방향 === "x" && _y === y) {
            return {
              street: [...jungle[_y][_x + 이동_방향].street],
            };
          }

          if (방향 === "y" && _x === x) {
            return {
              street: [...jungle[_y + 이동_방향][_x].street],
            };
          }

          return {
            ...칸,
          };
        })
      )
    );

    set방금_밀어낸_칸([반대_좌표[0], 반대_좌표[1]]);
    setAction("이동");
  }

  function 이동하기([y, x]: [number, number]) {
    if (action === "밀어내기") return;

    if (이동할_수_있는_칸.some(([_y, _x]) => _y === y && _x === x) === false) {
      toast.error("이동할 수 없는 칸입니다.");
      return;
    }

    if (turn === "blue") {
      blueUser.setPosition([y, x]);
    } else {
      redUser.setPosition([y, x]);
    }

    setTurn(turn === "blue" ? "red" : "blue");
    setAction("밀어내기");
  }

  const 이동할_수_있는_칸 = useMemo(() => {
    return getMovablePosition(
      jungle,
      turn === "blue" ? blueUser.position : redUser.position
    );
  }, [jungle, turn, blueUser.position, redUser.position]);

  const _밀_수_있는_칸 = useMemo(() => {
    const [by, bx] = blueUser.position;

    const blueUser의_반대 = [
      getOppositePosition(by),
      getOppositePosition(bx),
    ] as const;

    const [ry, rx] = redUser.position;

    const redUser의_반대 = [
      getOppositePosition(ry),
      getOppositePosition(rx),
    ] as const;

    const 밀_수_없는_칸 = [
      blueUser의_반대,
      redUser의_반대,
      방금_밀어낸_칸,
    ] as const;

    return 밀_수_있는_칸.filter(([y, x]) => {
      return 밀_수_없는_칸.some(([by, bx]) => by === y && bx === x) === false;
    });
  }, [방금_밀어낸_칸, blueUser.position, redUser.position]);

  return {
    jungle,
    restPiece,
    남은_조각_돌리기,
    밀어_넣기,
    밀_수_있는_칸: _밀_수_있는_칸,
    이동할_수_있는_칸,
    blueUserPositon: blueUser.position,
    redUserPositon: redUser.position,
    이동하기,
    action,
  };
}

export default useJungleMaze;
