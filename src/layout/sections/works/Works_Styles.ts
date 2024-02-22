import styled, {css} from "styled-components";
import {Decor} from "../../../components/Decor.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";


const Works = styled.section`
  position: relative;

  ${Decor} {
    z-index: 1;
    overflow: visible;

    svg:nth-child(1) {
      top: 50px;
      right: 100px;
      @media screen and (max-width: 1200px) {
        width: 90px;
        height: 80px;
      }
      @media ${({theme}) => theme.media.mobile} {
        display: none;
      }
    }

    svg:nth-child(2) {
      bottom: -100px;
      right: 35%;
      @media screen and (max-width: 1200px) {
        width: 140px;
        height: 140px;
        bottom: -80px;
        right: 35%;
      }
      @media ${({theme}) => theme.media.tablet} {
        width: 115px;
        height: 115px;
        bottom: -70px;
      }
      @media ${({theme}) => theme.media.mobile} {
        width: 100px;
        height: 100px;
        right: 25%;
        bottom: -60px;
      }
    }
  }

  ${SectionTitle} {
    margin-bottom: 40px;
    @media ${({theme}) => theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
    }
  }
`
const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media ${({theme}) => theme.media.tablet} {
    padding-bottom: 5px;
    overflow-x: auto;
    margin-bottom: 25px;
    margin-right: -20px;
    margin-left: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 15px;
  }
`
const TabsItem = styled.li`
  font-size: 0.9rem;
  color: ${({theme}) => theme.colors.title};
  line-height: 140%;
  white-space: nowrap;
  @media ${({theme}) => theme.media.mobile} {
    font-size: 0.8rem;
  }

  &:not(:last-child) {
    margin-right: 24px;
    @media ${({theme}) => theme.media.tablet} {
      margin-right: 15px;
    }
  }
`
const TabsLink = styled.button<{ active: boolean }>`
  padding-bottom: 4px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    border-radius: 2px;
    background-color: ${({theme}) => theme.colors.colorMain};
    transition: all .3s;

    ${({active}) => active && css<{ active: boolean }>`
      width: 100%;
    `}
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`

export const S = {
    Works,
    Tabs,
    TabsItem,
    TabsLink,
}