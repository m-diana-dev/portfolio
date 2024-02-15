import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/button/Button.ts";
import {ServicesItem} from "../../../layout/sections/services/servicesItem/ServicesItem.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Link} from "react-scroll";

export const Services = () => {
    return (
        <StyledServices id='services'>
            <Container>
                    <Decor>
                        <Icon id={'decor3.1'} width={'267'} height={'267'} viewBox={'0 0 250 250'}/>
                        <Icon id={'decor6.3'} width={'174'} height={'174'} viewBox={'0 0 160 160'}/>
                    </Decor>
                <SectionSubtitle>услуги</SectionSubtitle>
                <SectionTitle>Мой опыт</SectionTitle>
                <ServicesItems>
                    <ServicesItem iconId={'code'}
                                  iconBox={'0 0 52 52'}
                                  title={'Верстка сайтов'}
                                  text={'Соответствующая макету, надежная, быстрая, кроссбраузерная, семантичная и доступная верстка'}/>
                    <ServicesItem iconId={'bug'}
                                  iconBox={'0 0 245 245'}
                                  title={'Доработка сайтов'}
                                  text={'Устранение ошибок, написание дополнительных скриптов, адаптация верстки под различные устройства'}/>
                    <ServicesItem iconId={'react'}
                                  iconBox={'0 0 28 28'}
                                  title={'Разработка на React'}
                                  text={'Разработка и верстка интерфейсов на React, покрытие кода тестами, внедрение новой функциональности'}/>
                    <ServicesItem iconId={'wordpress'}
                                  iconBox={'0 0 45 45'}
                                  title={'Разработка на WordPress'}
                                  text={'Натяжка верстки на CMS WordPress, доработка уже существующих сайтов'}/>
                </ServicesItems>
                <Button as={Link} to="contacts" spy={true} smooth={true} offset={-50}>Связаться!</Button>
            </Container>
        </StyledServices>
    );
}

const StyledServices = styled.section`
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