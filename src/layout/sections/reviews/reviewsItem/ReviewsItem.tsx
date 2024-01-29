import {FC} from "react";
import styled from "styled-components";

type ReviewsItemPropsType = {
    name?: string
    text?: string
    title?: string
}
export const ReviewsItem: FC<ReviewsItemPropsType> = ({name, text, title}) => {
    return (
        <StyledReviewsItem>
            {title && <ReviewsItemTitle>{title}</ReviewsItemTitle>}
            <ReviewsItemName>{name}</ReviewsItemName>
            <ReviewsItemText>{text}</ReviewsItemText>
        </StyledReviewsItem>
    );
}

export const ReviewsItemName = styled.div`
  color: ${({theme}) => theme.colors.title};
  font-family: 'Montserrat';
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 100%;
  margin: 0 0 15px 0!important;
  @media ${({theme}) => theme.media.mobile} {
    font-size: 1rem;
  }
`
export const ReviewsItemTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.colors.title};
  font-family: 'Montserrat';
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 120%;
  margin: 0!important;
  @media ${({theme}) => theme.media.mobile} {
    font-size: 1rem;
  }
`

export const ReviewsItemText = styled.div`
  font-size: 1.02rem;
  font-style: italic;
  line-height: 140%;
  letter-spacing: 0.21px;
  margin: 0!important;
  @media ${({theme}) => theme.media.mobile} {
    font-size: 0.9rem;
  }
`

export const StyledReviewsItem = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 24px 30px;
  border-radius: 12px;
  transition: all .3s;

  @media (any-hover: hover) {
    &:hover {
      box-shadow: 8px 8px 0 0 rgba(20, 20, 20, 0.16);
      transform: translate(-5px, -5px);
    }
  }

  @media ${({theme}) => theme.media.mobile} {
    padding: 25px 20px 25px;
  }
`