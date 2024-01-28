import { 바둑알, 바둑칸 } from "../types";
import { get게임_승자 } from "./get게임_승자";

function create바둑판Mock(바둑알_목록: 바둑알[][]): 바둑칸[][] {
  return 바둑알_목록.map((바둑알_행) =>
    바둑알_행.map((바둑알) => ({ 바둑알, is지뢰: false }))
  );
}

describe("get게임_승자", () => {
  it("게임이 종료되었는지 확인한다. : 가로 감지", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          ["b", "b", "b", "b", "w", null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("b");
  });

  it("게임이 종료되었는지 확인한다. : 세로 감지", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          ["b", "w", "b", "b", "w", null],
          [null, "w", null, null, null, null],
          [null, "w", null, null, null, null],
          [null, "w", null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("w");
  });

  it("게임이 종료되었는지 확인한다. : 24분면 방향 감지", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          ["b", "w", "b", "b", "w", null],
          [null, "b", null, null, null, null],
          [null, "w", "b", null, null, null],
          [null, "w", null, "b", null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("b");

    expect(
      get게임_승자(
        create바둑판Mock([
          [null, "b", null, null, null, null],
          [null, null, "b", null, null, null],
          [null, null, null, "b", null, null],
          [null, null, null, null, "b", null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("b");

    expect(
      get게임_승자(
        create바둑판Mock([
          [null, null, null, null, null, null],
          ["b", null, null, null, null, null],
          [null, "b", null, null, null, null],
          [null, null, "b", null, null, null],
          [null, null, null, "b", null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("b");
  });

  it("게임이 종료되었는지 확인한다. : 13분면 방향 감지", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          ["b", "w", "b", "b", "w", null],
          [null, null, null, "w", null, null],
          [null, "b", "w", null, null, null],
          [null, "w", null, "b", null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("w");

    expect(
      get게임_승자(
        create바둑판Mock([
          [null, null, null, null, null, null],
          [null, null, null, null, null, "w"],
          [null, null, null, null, "w", null],
          [null, null, null, "w", null, null],
          [null, null, "w", null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe("w");
  });

  it("게임이 종료되었는지 확인한다. : 미종료", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          [null, null, null, null, null, null],
          [null, "w", null, null, null, null],
          [null, null, "w", null, null, null],
          [null, null, null, "w", null, null],
          [null, "b", "b", "b", null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe(null);
  });

  it("게임이 종료되었는지 확인한다. 4목 초과 Case", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          ["b", "b", "b", "b", "b", null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          ["b", null, null, null, null, null],
          ["b", null, null, null, null, null],
          ["b", null, null, null, null, null],
        ])
      )
    ).toBe(null);
  });

  it("게임이 종료되었는지 확인한다. 이중 승리 Case", () => {
    expect(
      get게임_승자(
        create바둑판Mock([
          [null, null, null, null, null, null],
          [null, null, "w", "w", "w", "w"],
          [null, "b", "b", "b", "b", null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ])
      )
    ).toBe(null);
  });
});
