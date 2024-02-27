import {Button} from "../../../components/button/Button.ts";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Link} from "react-scroll";
import {S} from './Main_Styles.ts'
import {FC, memo} from "react";

export const Main: FC = memo(() => {
    return (
        <S.Main>
            <Decor>
                <Icon id={'decor1.1'} width={'269'} height={'251'} viewBox={'0 0 260 260'}/>
                <Icon id={'decor4.1'} width={'102'} height={'102'} viewBox={'0 0 100 100'}/>
                <Icon id={'decor2.1'} width={'235'} height={'198'} viewBox={'0 0 220 220'}/>
            </Decor>
            <Container>
                <S.MainTitle>Объединение опыта в Digital с пиксельной точностью!</S.MainTitle>
                <S.MainSubtitle>Превращение плоских макетов в удобные для пользователя веб-сайты с изюминкой
                    инноваций</S.MainSubtitle>
                <Button as={Link} to="contacts" spy={true} smooth={true} offset={-50}>Связаться!</Button>
            </Container>
        </S.Main>
    );
})
