import { css } from "@emotion/react";
import { 바둑판_길이 } from "../constant";

const 바둑알_크기 = `calc(calc(calc(100vw - 32px) / ${바둑판_길이}) * 0.6)`;

export const 바둑알_사이즈_스타일 = css`
  width: ${바둑알_크기};
  height: ${바둑알_크기};
  max-width: 60px;
  max-height: 60px;
`;
