import {Container} from "../../components/Container.ts";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {Social} from "../../components/social/Social.tsx";
import {S} from './Footer_Styles.ts'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapp $justify={'space-between'}>
                    <S.FooterText>© 2022 devDiana, Все права защищены</S.FooterText>
                    <Social items={['github', 'linkedin', 'codewars']}/>
                    <S.FooterText href={'#'} as={'a'}>Политика конфиденциальности</S.FooterText>
                </FlexWrapp>
            </Container>
        </S.Footer>
    );
}