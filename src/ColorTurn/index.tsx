import 바둑칸 from "./components/바둑칸";
import useColorTurn from "./hooks/useColorTurn";

function ColorTurn() {
  const { 바둑판 } = useColorTurn();

  return (
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
  );
}

export default ColorTurn;
