interface Props {
  남은_바둑알: number;
  name: string;
}

function ColorTurnUser({ 남은_바둑알, name }: Props) {
  return (
    <p style={{ textAlign: "center" }}>
      {name}님의 남은 바둑알 : {남은_바둑알}개
    </p>
  );
}

export default ColorTurnUser;
