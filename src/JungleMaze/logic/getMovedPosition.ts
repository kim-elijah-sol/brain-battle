function getMovedPosition(
  currentPosition: [number, number],
  옮겨지는_칸: [number, number],
  방향: "x" | "y",
  이동_방향: 1 | -1
): [number, number] {
  const [cy, cx] = currentPosition;

  const [my, mx] = 옮겨지는_칸;

  if (방향 === "x" && cy === my) {
    return [cy, cx - 이동_방향];
  }

  if (방향 === "y" && cx === mx) {
    return [cy - 이동_방향, cx];
  }

  return [cy, cx];
}

export default getMovedPosition;
