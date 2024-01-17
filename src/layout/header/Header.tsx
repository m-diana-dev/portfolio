import styled from "styled-components";
import {Container} from "../../components/Container.js";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapp} from "../../components/FlexWrapp.ts";

export const Header = () => {
    const menuItems: string[] = ['Обо мне', 'Услуги', 'Проекты', 'Отзывы', 'Контакты']

    return (
        <StyledHeader>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <Logo/>
                    <Menu>
                        <MenuList>
                            {menuItems.map(el => <MenuItem><MenuLink href="">{el}</MenuLink></MenuItem>)}
                        </MenuList>
                    </Menu>
                    <Social items={['telegram', 'whatsapp', 'mail2']}/>
                </FlexWrapp>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(30px);
  background-color: rgba(255,255,255,.8);
`
const Menu = styled.nav`
  
`
const MenuList = styled.ul`
  display: flex;
  align-items: center;
`
const MenuItem = styled.li`
  font-size: 0.9rem;
  color: ${({theme})=>theme.colors.title};
  line-height: 140%;
  &:not(:last-child){
    margin-right: 24px;
  }
`
const MenuLink = styled.a`
  padding-bottom: 4px;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${({theme})=>theme.colors.colorMain};
    opacity: 0;
    transition: all .3s;
  }
  &:hover{
    &::before{
      opacity: 1;
    }
  }
`