import styled from "styled-components";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Decor} from "../../../components/Decor.ts";
import {Button} from "../../../components/button/Button.ts";


const Services = styled.section`
  overflow: hidden;

  ${SectionSubtitle} {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  ${SectionTitle} {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 30px;
    }
  }

  ${Button} {
    max-width: fit-content;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  ${Decor} {
    z-index: 0;
    overflow: visible;

    svg:nth-child(1) {
      top: -10px;
      right: 20px;
      @media screen and (max-width: 1200px) {
        width: 200px;
        height: 200px;
        top: 10px;
      }
      @media ${({theme}) => theme.media.mobile} {
        top: auto;
        bottom: 0;
        right: -30px;
      }
    }

    svg:nth-child(2) {
      bottom: 10px;
      left: -18px;
      @media screen and (max-width: 1200px) {
        width: 140px;
        height: 140px;
      }
      @media ${({theme}) => theme.media.mobile} {
        top: 30px;
        bottom: auto;
        left: -40px;
      }
    }
  }
`
const ServicesItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 20px;
  }
`

export const S = {
    Services,
    ServicesItems
}