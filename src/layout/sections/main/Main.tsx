import {Button} from "../../../components/button/Button.ts";
import {Container} from "../../../components/Container.ts";
import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Link} from "react-scroll";

export const Main = () => {
    return (
        <StyledMain>
            <Decor>
                <Icon id={'decor1.1'} width={'269'} height={'251'} viewBox={'0 0 260 260'}/>
                <Icon id={'decor4.1'} width={'102'} height={'102'} viewBox={'0 0 100 100'}/>
                <Icon id={'decor2.1'} width={'235'} height={'198'} viewBox={'0 0 220 220'}/>
            </Decor>
            <Container>
                <MainTitle>Объединение опыта в Digital с пиксельной точностью!</MainTitle>
                <MainSubtitle>Превращение плоских макетов в удобные для пользователя веб-сайты с изюминкой
                    инноваций</MainSubtitle>
                <Button as={Link} to="contacts" spy={true} smooth={true} offset={-50}>Связаться!</Button>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 100px 0;

  @media ${({theme}) => theme.media.mobile} {
    padding: 80px 0;
  }

  ${Button} {
    display: inline-flex;
    margin: 0 auto;
  }

  ${Decor} {
    svg:nth-child(1) {
      top: 20%;
      left: 0;
      @media screen and (max-width: 1200px) {
        width: 220px;
        height: 200px;
        left: -100px;
        top: 10%;
      }
      @media ${({theme}) => theme.media.mobile} {
        left: -100px;
        top: auto;
        bottom: -30px;
      }
    }

    svg:nth-child(2) {
      top: 100px;
      right: 200px;
      @media screen and (max-width: 1200px) {
        width: 70px;
        height: 70px;
        top: 80px;
        right: 100px;
      }
      @media ${({theme}) => theme.media.mobile} {
        display: none;
      }
    }

    svg:nth-child(3) {
      bottom: 15%;
      right: 40px;
      @media screen and (max-width: 1200px) {
        width: 190px;
        height: 170px;
        bottom: 10%;
        right: 40px;
      }
      @media ${({theme}) => theme.media.mobile} {
        bottom: auto;
        top: 40px;
        right: -90px;
      }
    }
  }
`

const MainTitle = styled.h2`
  ${font({family: 'Montserrat', weight: 500, color: '#1B1B1B', lineHeight: 1, fontMin: 36, fontMax: 60})};
  max-width: 75%;
  width: 100%;
  margin: 0 auto 16px;
  @media ${({theme}) => theme.media.mobile} {
    max-width: 90%;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: 100%;
  }
`

const MainSubtitle = styled.h1`
  ${font({lineHeight: 1.3, fontMin: 17, fontMax: 20})};
  max-width: 50%;
  width: 100%;
  margin: 0 auto 40px;
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: 100%;
  }
`