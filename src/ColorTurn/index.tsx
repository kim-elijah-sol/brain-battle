import ColorTurnUser from "./components/ColorTurnUser";
import 바둑칸 from "./components/바둑칸";
import useColorTurn from "./hooks/useColorTurn";

function ColorTurn() {
  const { 바둑판, 흑돌, 백돌 } = useColorTurn();

  return (
    <>
      <ColorTurnUser 남은_바둑알={백돌.남은_바둑알} name="백돌" />
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
              <바둑칸 key={x} />
            ))}
          </div>
        ))}
      </main>
      <ColorTurnUser 남은_바둑알={흑돌.남은_바둑알} name="흑돌" />
    </>
  );
}

export default ColorTurn;
