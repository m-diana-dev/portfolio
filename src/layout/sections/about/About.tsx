import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import imgPng from "../../../assets/images/about/main.png";
import imgWebp from "../../../assets/images/about/main.webp";
import {AboutItem} from "../../../layout/sections/about/aboutItem/AboutItem.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Decor} from "../../../components/Decor.ts";
import {SectionText} from "../../../components/SectionText.ts";
import {S} from './About_Styles.ts'
import {FC} from "react";

export const About: FC = () => {
    return (
        <S.About id='about'>
            <Container>
                <FlexWrapp $justify={'space-between'} $align={'center'}>
                    <S.AboutContent>
                        <SectionSubtitle>Обо мне</SectionSubtitle>
                        <SectionTitle>Front-End Developer, сочетающий искусство и технологии</SectionTitle>
                        <SectionText>
                            Привет, я Диана, фронтенд-разработчик и верстальщик! Специализируюсь на создании визуально
                            привлекательных и удобных для пользователя веб-сайтов. Постоянно обучаюсь и слежу за
                            тенденциями отрасли, поэтому в работе использую актуальный стект технологий. Мои основные
                            инструменты: HTML, CSS, JavaScript, TypeScript, React.
                        </SectionText>
                        <S.AboutItems>
                            <AboutItem value={'150+'} title={'веб-сайтов разработано'}/>
                            <AboutItem value={'4+'} title={`года\nопыта`}/>
                            <AboutItem
                                img={<Icon id={'infinity'} width={'45'} height={'20'} viewBox={'0 0 34 16'}/>}
                                title={'строк кода напсано'}/>
                        </S.AboutItems>
                    </S.AboutContent>
                    <S.AboutImg>
                        <Decor>
                            <Icon id={'decor4.3'} width={'128'} height={'112'} viewBox={'0 0 118 118'}/>
                            <Icon id={'decor5.1'} width={'142'} height={'143'} viewBox={'0 0 140 140'}/>
                        </Decor>
                        <picture>
                            {/*<source srcSet={imgWebp} type="image/webp"/>*/}
                            <img src={imgPng} alt="developer"/>
                        </picture>
                    </S.AboutImg>
                </FlexWrapp>
            </Container>
        </S.About>
    );
}
