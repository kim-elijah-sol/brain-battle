import useJungleMaze from "./hooks/useJungleMaze";

function JungleMaze() {
  const { jungle } = useJungleMaze();

  console.log(jungle);

  return <></>;
}

export default JungleMaze;
