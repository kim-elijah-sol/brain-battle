interface Props {
  남은_바둑알: number;
  name: string;
  is내_차례: boolean;
}

function ColorTurnUser({ 남은_바둑알, name, is내_차례 }: Props) {
  return (
    <p style={{ textAlign: "center" }}>
      {name}님의 남은 바둑알 : {남은_바둑알}개
      <button style={{ marginLeft: 8 }} type="button" disabled={!is내_차례}>
        돌 놓기
      </button>
    </p>
  );
}

export default ColorTurnUser;
