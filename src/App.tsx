import { useState } from "react";
import ColorTurn from "./ColorTurn";
import JungleMaze from "./JungleMaze";

function App() {
  const [game, setGame] = useState<string>("JungleMaze");

  return (
    <>
      <div>
        <input
          type="radio"
          id="ColorTurn"
          checked={game === "ColorTurn"}
          onChange={() => setGame("ColorTurn")}
        />
        <label htmlFor="ColorTurn">ColorTurn</label>
        <input
          type="radio"
          id="JungleMaze"
          checked={game === "JungleMaze"}
          onChange={() => setGame("JungleMaze")}
        />
        <label htmlFor="JungleMaze">JungleMaze</label>
      </div>
      {game === "ColorTurn" && <ColorTurn />}
      {game === "JungleMaze" && <JungleMaze />}
    </>
  );
}

export default App;
