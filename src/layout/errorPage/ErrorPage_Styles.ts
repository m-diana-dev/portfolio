import styled from "styled-components";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {font} from "../../styles/Common.ts";
import {Decor} from "../../components/Decor.ts";

const ErrorPage = styled.section`
  flex: 1 0 auto;
  display: flex;
  ${FlexWrapp}{
    padding: 100px 0 50px;
    height: 100%;
    @media  ${({theme}) => theme.media.mobile}{
      padding: 150px 0 40px;
    }
  }
  ${Decor} {
    svg:nth-child(1) {
      bottom: 70px;
      left: 0;
      transform: rotate(-30deg);
      @media ${({theme}) => theme.media.mobile} {
        width: 170px;
        height: 170px;
        bottom: 110px;
      }
    }
    svg:nth-child(2) {
      top: 120px;
      right: -80px;
      transform: rotate(199deg);
      @media ${({theme}) => theme.media.mobile} {
        width: 140px;
        height: 140px;
        top: 70px;
      }
    }
  }
`
const ErrorPageTitle = styled.div`
  ${font({fontMin: 26, fontMax: 30, lineHeight: 1.1})};
  margin-bottom: 10px;
`
const ErrorPageSubtitle = styled.div`
  ${font({fontMin: 18, fontMax: 22, lineHeight: 1.1})};
`
const ErrorPageStatus = styled.div`
  ${font({fontMin: 180, fontMax: 220, lineHeight: 1.1})};
  margin-bottom: 10px;
`

export const S = {
    ErrorPage,
    ErrorPageTitle,
    ErrorPageSubtitle,
    ErrorPageStatus
}