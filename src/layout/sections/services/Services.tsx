import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/button/Button.ts";
import {ServicesItem} from "../../../layout/sections/services/servicesItem/ServicesItem.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Link} from "react-scroll";
import {FC} from "react";
import {S} from './Services_Styles.ts'


type ServicesItemsType = {
    iconId: string
    iconBox: string
    title: string
    text: string
}[]
export const Services: FC = () => {
    const ServicesItems: ServicesItemsType = [
        {
            iconId: 'code',
            iconBox: '0 0 52 52',
            title: 'Верстка сайтов',
            text: 'Соответствующая макету, надежная, быстрая, кроссбраузерная, семантичная и доступная верстка'
        },
        {
            iconId: 'bug',
            iconBox: '0 0 245 245',
            title: 'Доработка сайтов',
            text: 'Устранение ошибок, написание дополнительных скриптов, адаптация верстки под различные устройства'
        },
        {
            iconId: 'react',
            iconBox: '0 0 28 28',
            title: 'Разработка на React',
            text: 'Разработка и верстка интерфейсов на React, покрытие кода тестами, внедрение новой функциональности'
        },
        {
            iconId: 'wordpress',
            iconBox: '0 0 45 45',
            title: 'Разработка на WordPress',
            text: 'Натяжка верстки на CMS WordPress, доработка уже существующих сайтов'
        },
    ]
    return (
        <S.Services id='services'>
            <Container>
                <Decor>
                    <Icon id={'decor3.1'} width={'267'} height={'267'} viewBox={'0 0 250 250'}/>
                    <Icon id={'decor6.3'} width={'174'} height={'174'} viewBox={'0 0 160 160'}/>
                </Decor>
                <SectionSubtitle>услуги</SectionSubtitle>
                <SectionTitle>Мой опыт</SectionTitle>
                <S.ServicesItems>
                    {ServicesItems.map((el, index) => <ServicesItem key={index}
                                                                    iconId={el.iconId}
                                                                    iconBox={el.iconBox}
                                                                    title={el.title}
                                                                    text={el.text}/>)}
                </S.ServicesItems>
                <Button as={Link} to="contacts" spy={true} smooth={true} offset={-50}>Связаться!</Button>
            </Container>
        </S.Services>
    );
}
