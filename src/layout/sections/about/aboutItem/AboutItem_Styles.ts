import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle.ts";

const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110px;
  width: 100%;
  &:not(:last-child){
    margin-right: 45px;
    @media screen and (max-width: 1200px){
      margin-right: 25px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-right: 15px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      margin-right: 10px;
    }
  }
  ${SectionTitle}{
    color: ${({theme}) => theme.colors.colorMain};
    margin-bottom: 8px;
    svg{
      @media ${({theme}) => theme.media.mobileSmall} {
        width: 35px;
        height: 16px;
      }
    }
  }
`
const AboutItemTitle = styled.div`
  text-align: center;
  font-size: 0.8rem;
  line-height: 140%;
  text-transform: uppercase;
  white-space: pre-line;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 0.7rem;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 0.65rem;
  }
`

export const S = {
    AboutItem,
    AboutItemTitle,
}