import styled from "styled-components";
import {font} from "../styles/Common.ts";

export const SectionSubtitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 8px;
  ${font({fontMin: 15, fontMax: 17, weight: 500, color: '#B285FF', lineHeight: 1})};
`