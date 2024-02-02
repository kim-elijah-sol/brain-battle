import { FullLayout } from "@/lib/components";
import { jungle길이 } from "./constant";
import useJungleMaze from "./hooks/useJungleMaze";

const zeroPositionProperty = {
  n: "top",
  e: "right",
  s: "bottom",
  w: "left",
};

const fiftyPositionProperty = {
  n: "left",
  e: "top",
  s: "left",
  w: "top",
};

function JungleMaze() {
  const {
    jungle,
    restPiece,
    남은_조각_돌리기,
    밀어_넣기,
    밀_수_있는_칸,
    이동할_수_있는_칸,
  } = useJungleMaze();

  return (
    <FullLayout>
      <div
        css={{
          border: "1px solid black",
          margin: "0 auto",
        }}
      >
        {jungle.map((행, y) => (
          <div
            key={y}
            css={{
              display: "flex",
            }}
          >
            {행.map((칸, x) => (
              <div
                key={x}
                css={{
                  width: 100,
                  height: 100,
                  border: "1px solid black",
                  borderLeft: "none",
                  borderTop: "none",
                  borderRightWidth: x === jungle길이 - 1 ? 0 : 1,
                  borderBottomWidth: y === jungle길이 - 1 ? 0 : 1,
                  boxSizing: "border-box",
                  position: "relative",
                  backgroundColor: "#30634b",
                }}
              >
                {칸.street.map((street, index) => (
                  <div
                    key={index}
                    css={{
                      position: "absolute",
                      transform: `translate${
                        street === "n" || street === "s" ? "X" : "Y"
                      }(-50%)`,
                      [street === "n" || street === "s"
                        ? "width"
                        : "height"]: 30,
                      [street === "n" || street === "s"
                        ? "height"
                        : "width"]: 50,
                      backgroundColor: 이동할_수_있는_칸.some(
                        ([_y, _x]) => x === _x && y === _y
                      )
                        ? "#a5dcc9"
                        : "#9f9598",
                      [zeroPositionProperty[street]]: 0,
                      [fiftyPositionProperty[street]]: "50%",
                    }}
                  />
                ))}
                <div
                  css={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 30,
                    height: 30,
                    backgroundColor: 이동할_수_있는_칸.some(
                      ([_y, _x]) => x === _x && y === _y
                    )
                      ? "#a5dcc9"
                      : "#9f9598",
                  }}
                />
                {밀_수_있는_칸.some(([_y, _x]) => _x === x && _y === y) && (
                  <div
                    onClick={() => 밀어_넣기([y, x])}
                    css={{
                      cursor: "pointer",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "rgba(235, 232, 67, 0.5)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        css={{
          width: 100,
          height: 100,
          border: "1px solid black",
          boxSizing: "border-box",
          position: "relative",
          backgroundColor: "#30634b",
          marginTop: 20,
        }}
      >
        {restPiece.map((street, index) => (
          <div
            key={index}
            css={{
              position: "absolute",
              transform: `translate${
                street === "n" || street === "s" ? "X" : "Y"
              }(-50%)`,
              [street === "n" || street === "s" ? "width" : "height"]: 30,
              [street === "n" || street === "s" ? "height" : "width"]: 50,
              backgroundColor: "#9f9598",
              [zeroPositionProperty[street]]: 0,
              [fiftyPositionProperty[street]]: "50%",
            }}
          />
        ))}
        <div
          css={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 30,
            height: 30,
            backgroundColor: "#9f9598",
          }}
        />
      </div>

      <button
        css={{
          marginTop: 20,
        }}
        onClick={남은_조각_돌리기}
      >
        남은 조각 돌리기
      </button>
    </FullLayout>
  );
}

export default JungleMaze;
