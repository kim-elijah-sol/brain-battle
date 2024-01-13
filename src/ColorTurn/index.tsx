/* eslint-disable react/jsx-pascal-case */
import ColorTurnUser from "./components/ColorTurnUser";
import 놓을_수_있는_자리 from "./components/놓을_수_있는_자리";
import 놓인_바둑알 from "./components/놓인_바둑알";
import 바둑칸 from "./components/바둑칸";
import useColorTurn from "./hooks/useColorTurn";

function ColorTurn() {
  const {
    바둑판,
    흑돌,
    백돌,
    차례,
    돌_놓기,
    놓을_수_있는_위치,
    가진_돌_놓기,
    is가진_돌_놓을_수_없음,
  } = useColorTurn();

  return (
    <>
      <ColorTurnUser
        남은_바둑알={백돌.남은_바둑알}
        name="백돌"
        is돌_놓기Disabled={차례 !== "백돌" || is가진_돌_놓을_수_없음}
        onClick돌_놓기={돌_놓기}
      />
      <main
        style={{
          border: "1px solid black",
          width: 600,
          height: 600,
          margin: "auto",
        }}
      >
        {바둑판.map((행, y) => (
          <div
            key={y}
            style={{
              display: "flex",
            }}
          >
            {행.map((셀, x) => (
              <바둑칸 key={x}>
                {셀.바둑알 !== null && <놓인_바둑알 바둑알={셀.바둑알} />}
                {놓을_수_있는_위치.some(([_x, _y]) => x === _x && y === _y) && (
                  <놓을_수_있는_자리 onClick={() => 가진_돌_놓기(x, y)} />
                )}
              </바둑칸>
            ))}
          </div>
        ))}
      </main>
      <ColorTurnUser
        남은_바둑알={흑돌.남은_바둑알}
        name="흑돌"
        is돌_놓기Disabled={차례 !== "흑돌" || is가진_돌_놓을_수_없음}
        onClick돌_놓기={돌_놓기}
      />
    </>
  );
}

export default ColorTurn;
