import styled from "styled-components";
import {Button} from "./components/button/Button.ts";

const Sections = styled.div`
  section {
    padding: 110px 0;

    &:nth-child(odd) {
      background-color: ${({theme}) => theme.colors.primaryBg};

      ${Button} {
        color: ${({theme}) => theme.colors.primaryBg};
      }
    }

    &:nth-child(even) {
      background-color: ${({theme}) => theme.colors.secondaryBg};

      ${Button} {
        color: ${({theme}) => theme.colors.secondaryBg};
      }
    }

    @media ${({theme}) => theme.media.tablet} {
      padding: 80px 0;
    }
    @media ${({theme}) => theme.media.mobile} {
      padding: 60px 0;
    }
  }
`

export const S = {
    Sections
}