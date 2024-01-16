import styled from "styled-components";
import {Container} from "../../components/Container.js";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social} from "../../components/social/Social.tsx";

export const Header = () => {
    const menuItems: string[] = ['Обо мне', 'Услуги', 'Проекты', 'Отзывы', 'Контакты']
    return (
        <StyledHeader>
            <Container>
                <div>
                    <Logo/>
                    <nav>
                        <ul>
                            {menuItems.map(el => <li><a href="">{el}</a></li>)}
                        </ul>
                    </nav>
                    <Social items={[]}/>
                </div>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

`