import { act, renderHook } from "@testing-library/react";
import useColorTurnUser from "./useColorTurnUser";

test("useColorTurnUser", () => {
  const { result } = renderHook(() => useColorTurnUser());

  expect(result.current.남은_바둑알).toBe(7);

  act(() => {
    result.current.바둑알_놓기();
  });

  expect(result.current.남은_바둑알).toBe(6);

  act(() => {
    // 5
    result.current.바둑알_놓기();
  });
  act(() => {
    // 4
    result.current.바둑알_놓기();
  });
  act(() => {
    // 3
    result.current.바둑알_놓기();
  });
  act(() => {
    // 2
    result.current.바둑알_놓기();
  });
  act(() => {
    // 1
    result.current.바둑알_놓기();
    result.current.바둑알_놓기();
  });
  act(() => {
    // 0
    result.current.바둑알_놓기();
  });

  expect(result.current.남은_바둑알).toBe(0);

  // 0 미만으로 내려가지 않는다.
  act(() => {
    result.current.바둑알_놓기();
  });

  expect(result.current.남은_바둑알).toBe(0);
});
