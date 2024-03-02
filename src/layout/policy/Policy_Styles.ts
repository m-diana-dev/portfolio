import styled from "styled-components";
import {Decor} from "../../components/Decor.ts";

const Policy = styled.section`
  padding: 100px 0;
  @media ${({theme}) => theme.media.mobile} {
    padding: 80px 0;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 1.2;
    font-weight: 500;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 1.2;
    font-weight: 500;
  }

  h2 + ul {
    margin-bottom: 15px;
  }

  ul {
    li {
      font-size: 16px;
      line-height: 1.2;

      &:not(:last-child) {
        margin-bottom: 7px;
      }

      ul {
        margin-top: 10px;
        padding-left: 30px;
      }
    }
  }

  ${Decor} {
    svg:nth-child(1) {
      top: 70px;
      right: 10%;
      @media ${({theme}) => theme.media.tablet} {
        width: 90px;
        height: 90px;
      }
      @media ${({theme}) => theme.media.mobile} {
        display: none;
      }
    }
  }
`
const PolicyNote = styled.small`
  display: block;
  font-size: 11px;
  margin-bottom: 20px;
`

export const S = {
    Policy,
    PolicyNote
}