import styled from "styled-components";
import {Decor} from "../../../components/Decor.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import Styled from './reviewsItem/ReviewsItem_Styles.ts'

const Reviews = styled.section`
  position: relative;
  ${Decor} {
    z-index: 0;
    svg:nth-child(1) {
      bottom: -100px;
      right: 50px;
      transform: rotate(290deg);
      @media screen and (max-width: 1200px) {
        width: 170px;
        height: 170px;
      }
      @media ${({theme}) => theme.media.tablet} {
        width: 150px;
        height: 150px;
        bottom: -90px;
      }
      @media ${({theme}) => theme.media.mobile} {
        width: 130px;
        height: 130px;
        bottom: -80px;
        right: -10px;
      }
    }
  }
  ${SectionTitle} {
    margin-bottom: 40px;
    width: calc(100% - 100px);
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
      width: 100%;
    }
  }
  
  a{
    cursor: pointer;
  }

  .alice-carousel {
    width: calc(100% + 20px);
    margin: 0 -10px;
  }

  .alice-carousel__stage {
    display: flex
  }

  .alice-carousel__wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  li.alice-carousel__stage-item :not(.__cloned) {
    margin: 0 10px;
    width: auto !important;
  }

  li.alice-carousel__stage-item {
    flex: 1 0 auto;
    height: auto;

    &:nth-child(odd) {
      ${Styled.ReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorSecondary};
      }
    }

    &:nth-child(even) {
      ${Styled.ReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorTertiary};
      }
    }

    &:last-child {
      ${Styled.ReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorMain};
      }

      ${Styled.ReviewsItemName} {
        color: ${({theme}) => theme.colors.primaryBg}
      }

      ${Styled.ReviewsItemTitle} {
        color: ${({theme}) => theme.colors.primaryBg}
      }

      ${Styled.ReviewsItemText} {
        color: ${({theme}) => theme.colors.lightText}
      }
    }
  }

  .alice-carousel__next-btn,
  .alice-carousel__prev-btn {
    position: absolute;
    top: -80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(27, 27, 27, 0.16);
    cursor: pointer;
    transition: all .3s;
    @media (any-hover: hover) {
      &:hover {
        background-color: #fff;
        border-color: #fff;
      }
    }
    @media ${({theme}) => theme.media.mobile} {
      position: static;
      margin-top: 10px;
      top: auto;
    }
  }

  .alice-carousel__next-btn {
    right: 0;

    svg {
      transform: translate(2px, 1px);
    }
  }

  .alice-carousel__prev-btn {
    right: 50px;
    @media ${({theme}) => theme.media.mobile} {
      margin-left: 10px;
      margin-right: 10px;
    }

    svg {
      transform: translate(-2px, 1px);
    }
  }
`
export const S = {
    Reviews,
}