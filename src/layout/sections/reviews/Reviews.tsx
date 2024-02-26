import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {ReviewsItem} from "../../../layout/sections/reviews/reviewsItem/ReviewsItem.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Icon} from "../../../components/icon/Icon.tsx";
import {Decor} from "../../../components/Decor.ts";
import {FC} from "react";
import {S} from './Reviews_Styles.ts'

export const Reviews: FC = () => {
    const sliderItems = [
        <ReviewsItem name={'Надежда'}
                     text={'Задача выполнена оперативно, коммуникация очень приятная, а результат отличный! Спасибо, Диана! Смело рекомендую исполнителя, даже не сомневайтесь!'}/>,
        <ReviewsItem name={'Дмитрий'}
                     text={'Вёрстка выполнена очень аккуратно, и в срок! Результат оказался технически даже лучше, чем я ожидал получить на выходе. Большое спасибо! <3'}/>,
        <ReviewsItem name={'Николай'}
                     text={'Frontend-разработчик выполнил задачу в этот же день! Всё сделано быстро, качественно, профессионально. Строго рекомендую к сотрудничеству данного исполнителя.'}/>,
        <ReviewsItem name={'Руслан'}
                     text={'Вновь и вновь возвращаюсь к исполнителю! Быстро, четко и со всеми рекомендациями. Диана, спасибо за оперативность : )'}/>,
        <ReviewsItem name={'Роман'}
                     text={'Комфортное общение, исполнитель понимает с полуслова. Быстро и очень качественно. Однозначно рекомендую и буду работать с исполнителем еще.'}/>,
        <ReviewsItem name={'Евгений'}
                     text={'Всё отлично! Работа выполнена на все 100%, нужны корректировки внесены оперативно. Качество верстки на высоте, с добавлением анимации, а не просто выполнение работы. Отличный исполнитель - не сомневайтесь.'}/>,
        <ReviewsItem name={'Михаил'}
                     text={'Все отлично! Не первый раз обращаемся. Всегда все в срок, без ошибок. Приятно работать.'}/>,
        <ReviewsItem title={'Посмотреть другие отзывы'} link={'https://kwork.ru/user/diana_dev'}/>
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
        <S.Reviews id='reviews'>
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
        </S.Reviews>
    );
}