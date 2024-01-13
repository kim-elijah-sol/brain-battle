interface Props {
  남은_바둑알: number;
  name: string;
  onClick돌_놓기: () => void;
  is돌_놓기Disabled: boolean;
}

function ColorTurnUser({
  남은_바둑알,
  name,
  is돌_놓기Disabled,
  onClick돌_놓기,
}: Props) {
  return (
    <p style={{ textAlign: "center" }}>
      {name}님의 남은 바둑알 : {남은_바둑알}개
      <button
        style={{ marginLeft: 8 }}
        type="button"
        disabled={is돌_놓기Disabled}
        onClick={onClick돌_놓기}
      >
        돌 놓기
      </button>
    </p>
  );
}

export default ColorTurnUser;
