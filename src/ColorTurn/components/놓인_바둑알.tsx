interface Props {
  바둑알: "w" | "b";
}

function 놓인_바둑알({ 바둑알 }: Props) {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: 바둑알 === "w" ? "white" : "black",
      }}
    ></div>
  );
}

export default 놓인_바둑알;
