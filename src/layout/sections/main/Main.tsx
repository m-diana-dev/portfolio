import {Button, StyledButton} from "../../../components/button/Button.tsx";
import {Container} from "../../../components/Container.ts";
import styled from "styled-components";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainTitle>Объединение опыта в Digital с пиксельной точностью!</MainTitle>
                <MainSubtitle>Превращение плоских макетов в удобные для пользователя веб-сайты с изюминкой
                    инноваций</MainSubtitle>
                <Button>Связаться!</Button>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 100px 0;

  ${StyledButton} {
    margin: 0 auto;
  }
`

const MainTitle = styled.h2`
  ${font({family: 'Montserrat', weight: 500, color: '#1B1B1B', lineHeight: 1, fontMin: 36, fontMax: 60})};
  max-width: 902px;
  width: 100%;
  margin: 0 auto 16px;
`

const MainSubtitle = styled.h1`
  ${font({lineHeight: 1.3, fontMin: 17, fontMax: 20})};
  max-width: 634px;
  width: 100%;
  margin: 0 auto 40px;
`