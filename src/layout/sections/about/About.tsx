import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import imgPng from "../../../assets/images/about/main.png";
import imgWebp from "../../../assets/images/about/main.webp";
import {AboutItem} from "../../../layout/sections/about/aboutItem/AboutItem.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {font} from "../../../styles/Common.ts";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapp justify={'space-between'} align={'center'}>
                    <AboutContent>
                        <SectionSubtitle>Обо мне</SectionSubtitle>
                        <SectionTitle>Front-End Developer, сочетающий искусство и технологии</SectionTitle>
                        <AboutText>
                            Привет, я Диана, фронтенд-разработчик и верстальщик! Специализируюсь на создании визуально
                            привлекательных и удобных для пользователя веб-сайтов. Постоянно обучаюсь и слежу за
                            тенденциями отрасли, поэтому в работе использую актуальный стект технологий. Мои основные
                            инструменты: HTML, CSS, JavaScript, TypeScript, React.
                        </AboutText>
                        <AboutItems>
                            <AboutItem value={'150+'} title={'веб-сайтов разработано'}/>
                            <AboutItem value={'4+'} title={`года\nопыта`}/>
                            <AboutItem
                                img={<Icon id={'infinity'} width={'45'} height={'20'} viewBox={'0 0 34 16'}/>}
                                title={'строк кода напсано'}/>
                        </AboutItems>
                    </AboutContent>
                    <AboutImg>
                        <AboutImgDecor>
                            <Icon id={'decor4.3'} width={'128'} height={'112'} viewBox={'0 0 118 118'}/>
                            <Icon id={'decor5.1'} width={'142'} height={'143'} viewBox={'0 0 140 140'}/>
                        </AboutImgDecor>
                        <picture>
                            <source srcSet={imgWebp} type="image/webp"/>
                            <img src={imgPng} alt="developer"/>
                        </picture>
                    </AboutImg>
                </FlexWrapp>
            </Container>
        </StyledAbout>
    );
}

const StyledAbout = styled.section`
  padding: 110px 0;
  @media ${({theme}) => theme.media.tablet} {
    padding: 80px 0;
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 50px 0;
  }

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
`
const AboutText = styled.p`
  ${font({fontMin: 16, fontMax: 19, lineHeight: 1.3})};
  margin-bottom: 35px;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 20px;
  }
`
const AboutImg = styled.div`
  max-width: 525px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1200px){
    max-width: 430px;
  }
  
  img{
    width: 100%;
    object-fit: contain;
  }
`
const AboutImgDecor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  svg{
    position: absolute;
  }
  svg:nth-child(1) {
    top: 40px;
    right: 0;
    @media screen and (max-width: 1200px){
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
    @media screen and (max-width: 1200px){
      width: 110px;
      height: 111px;
    }
    @media ${({theme}) => theme.media.tablet} {
      left: -30px;
      bottom: 10px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      width: 90px;
      height: 80px;
      left: -40px;
      bottom: 10px;
    }
  }
`
const AboutItems = styled.div`
  display: flex;
  align-items: center;
`