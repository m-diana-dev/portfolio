import styled from "styled-components";
import {font} from "./../styles/Common.ts";

export const SectionTitle = styled.h3`
  ${font({fontMin: 28, fontMax: 38, weight: 600, family: 'Montserrat', color: '#1B1B1B', lineHeight: 1})};
  >span{
    display: none;
  }
`