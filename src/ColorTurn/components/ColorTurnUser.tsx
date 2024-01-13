interface Props {
  남은_바둑알: number;
  name: string;
  is내_차례: boolean;
  onClick돌_놓기: () => void;
}

function ColorTurnUser({
  남은_바둑알,
  name,
  is내_차례,
  onClick돌_놓기,
}: Props) {
  return (
    <p style={{ textAlign: "center" }}>
      {name}님의 남은 바둑알 : {남은_바둑알}개
      <button
        style={{ marginLeft: 8 }}
        type="button"
        disabled={!is내_차례}
        onClick={onClick돌_놓기}
      >
        돌 놓기
      </button>
    </p>
  );
}

export default ColorTurnUser;
