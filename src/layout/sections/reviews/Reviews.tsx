import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {
    ReviewsItem,
    ReviewsItemName, ReviewsItemText, ReviewsItemTitle,
    StyledReviewsItem
} from "../../../layout/sections/reviews/reviewsItem/ReviewsItem.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Icon} from "../../../components/icon/Icon.tsx";
import {Decor} from "../../../components/Decor.ts";

export const Reviews = () => {
    const sliderItems = [
        <ReviewsItem name={'Надежда'}
                     text={'Задача выполнена оперативно, коммуникация очень приятная, а результат отличный! Спасибо, Диана! Смело рекомендую исполнителя, даже не сомневайтесь!'}/>,
        <ReviewsItem name={'Руслан'}
                     text={'Вновь и вновь возвращаюсь к исполнителю! Быстро, четко и со всеми рекомендациями. Диана, спасибо за оперативность : )'}/>,
        <ReviewsItem name={'Роман'}
                     text={'Комфортное общение, исполнитель понимает с полуслова. Быстро и очень качественно. Однозначно рекомендую и буду работать с исполнителем еще.'}/>,
        <ReviewsItem name={'Евгений'}
                     text={'Всё отлично! Работа выполнена на все 100%, нужны корректировки внесены оперативно. Качество верстки на высоте, с добавлением анимации, а не просто выполнение работы. Отличный исполнитель - не сомневайтесь.'}/>,
        <ReviewsItem name={'Михаил'}
                     text={'Все отлично! Не первый раз обращаемся. Всегда все в срок, без ошибок. Приятно работать.'}/>,
        <ReviewsItem title={'Посмотреть другие отзывы'}/>
    ]
    const responsive = {
        991: {
            items: 3,
        },
        768: {
            items: 2,
        },
        600: {
            items: 2,
        },
    }
    return (
        <StyledReviews>
            <Decor>
                <Icon id={'decor1.2'} width={'200'} height={'200'} viewBox={'0 0 270 270'}/>
            </Decor>
            <Container>
                <SectionSubtitle>Отзывы</SectionSubtitle>
                <SectionTitle>Что говорят мои заказчики</SectionTitle>
                <AliceCarousel mouseTracking
                               disableDotsControls
                               responsive={responsive}
                               items={sliderItems}
                               renderNextButton={() => {
                                   return <Icon id={'arrow-right'} width={'10'} height={'20'} viewBox={'0 0 10 20'}/>
                               }}
                               renderPrevButton={() => {
                                   return <Icon id={'arrow-left'} width={'10'} height={'20'} viewBox={'0 0 10 20'}/>
                               }}
                />
            </Container>
        </StyledReviews>
    );
}

const StyledReviews = styled.section`
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
      ${StyledReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorSecondary};
      }
    }

    &:nth-child(even) {
      ${StyledReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorTertiary};
      }
    }

    &:last-child {
      ${StyledReviewsItem} {
        background-color: ${({theme}) => theme.colors.colorMain};
      }

      ${ReviewsItemName} {
        color: ${({theme}) => theme.colors.primaryBg}
      }

      ${ReviewsItemTitle} {
        color: ${({theme}) => theme.colors.primaryBg}
      }

      ${ReviewsItemText} {
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
