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
    이동하기,
    action,
    blueUser,
    redUser,
    targets,
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
                  cursor: "pointer",
                }}
                onClick={() => 이동하기([y, x])}
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
                      backgroundColor:
                        이동할_수_있는_칸.some(
                          ([_y, _x]) => x === _x && y === _y
                        ) && action === "이동"
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
                    backgroundColor:
                      이동할_수_있는_칸.some(
                        ([_y, _x]) => x === _x && y === _y
                      ) && action === "이동"
                        ? "#a5dcc9"
                        : "#9f9598",
                  }}
                />
                {y === blueUser.position[0] && x === blueUser.position[1] && (
                  <div
                    css={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      opacity: 0.5,
                      backgroundColor: "blue",
                    }}
                  />
                )}
                {y === redUser.position[0] && x === redUser.position[1] && (
                  <div
                    css={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      opacity: 0.5,
                      backgroundColor: "red",
                    }}
                  />
                )}
                {밀_수_있는_칸.some(([_y, _x]) => _x === x && _y === y) &&
                  action === "밀어내기" && (
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
                {targets
                  .filter(({ position: [_y, _x] }) => _y === y && _x === x)
                  .map(({ target }) => (
                    <div
                      key={target}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: 20,
                        width: 50,
                        height: 50,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {target.toUpperCase()}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        css={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 100,
        }}
      >
        <p>
          <strong css={{ color: "blue", marginRight: 20 }}>blueUser</strong>
          <span>
            {blueUser.targets
              .filter(({ isFind }) => !isFind)
              .map((target) => target.target)
              .join(", ")}
          </span>
        </p>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            css={{
              width: 100,
              height: 100,
              border: "1px solid black",
              boxSizing: "border-box",
              position: "relative",
              backgroundColor: "#30634b",
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
        </div>
        <p>
          <strong css={{ color: "red", marginRight: 20 }}>redUser</strong>
          <span>
            {redUser.targets
              .filter(({ isFind }) => !isFind)
              .map((target) => target.target)
              .join(", ")}
          </span>
        </p>
      </div>
    </FullLayout>
  );
}

export default JungleMaze;
