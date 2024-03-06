import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {Social} from "../../../components/social/Social.tsx";
import {S} from './Footer_Styles.ts'
import {Link} from "react-router-dom";
import {FC, memo} from "react";

export const Footer: FC = memo(() => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapp $justify={'space-between'}>
                    <S.FooterText>© 2022 devDiana, Все права защищены</S.FooterText>
                    <Social items={[
                        {id: 'github', link: 'https://github.com/m-diana-dev'},
                        {id: 'codewars', link: 'https://www.codewars.com/users/diana_dev'},
                        {id: 'linkedin', link: '#'}
                    ]}/>
                    <S.FooterText><Link to={'/policy'}>Политика конфиденциальности</Link></S.FooterText>
                </FlexWrapp>
            </Container>
        </S.Footer>
    );
})