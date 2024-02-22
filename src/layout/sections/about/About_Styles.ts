import styled from "styled-components";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {SectionText} from "../../../components/SectionText.ts";
import {Decor} from "../../../components/Decor.ts";

const About = styled.section`

  ${FlexWrapp} {
    @media ${({theme}) => theme.media.tablet} {
      flex-direction: column;
    }
  }
`

const AboutContent = styled.div`
  max-width: 575px;
  width: 100%;
  margin-right: 50px;
  text-align: left;
  @media ${({theme}) => theme.media.tablet} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }

  ${SectionTitle} {
    margin-bottom: 15px;
  }

  ${SectionText} {
    margin-bottom: 35px;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
    }
  }
`
const AboutImg = styled.div`
  max-width: 525px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1200px) {
    max-width: 430px;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  ${Decor} {
    z-index: 1;
    overflow: visible;

    svg:nth-child(1) {
      top: 40px;
      right: 0;
      @media screen and (max-width: 1200px) {
        width: 90px;
        height: 75px;
        right: 20px;
      }
      @media ${({theme}) => theme.media.tablet} {
        right: 0;
      }
      @media ${({theme}) => theme.media.mobileSmall} {
        width: 80px;
        height: 65px;
      }
    }

    svg:nth-child(2) {
      bottom: -30px;
      left: 100px;
      @media screen and (max-width: 1200px) {
        width: 110px;
        height: 111px;
      }
      @media ${({theme}) => theme.media.tablet} {
        left: -30px;
        bottom: 10px;
      }
      @media ${({theme}) => theme.media.mobileSmall} {
        display: none;
      }
    }
  }
`
const AboutItems = styled.div`
  display: flex;
  align-items: center;
`

export const S = {
    About,
    AboutContent,
    AboutImg,
    AboutItems
}