import styled, {css} from "styled-components";
import {Container} from "../../components/Container.js";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social, SocialList} from "../../components/social/Social.tsx";
import {FlexWrapp} from "../../components/FlexWrapp.ts";

export const Header = () => {
    const menuItems: string[] = ['Обо мне', 'Услуги', 'Проекты', 'Отзывы', 'Контакты']

    return (
        <StyledHeader>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <Logo/>
                    <Menu>
                        <MenuBurger/>
                        <MenuBody isOpen={true}>
                            <MenuList>
                                {menuItems.map(el => <MenuItem><MenuLink href="">{el}</MenuLink></MenuItem>)}
                            </MenuList>
                        </MenuBody>
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
  background-color: rgba(255, 255, 255, .8);
  @media ${({theme}) => theme.media.mobile} {
    padding: 10px 0;
  }

  ${SocialList} {
    @media ${({theme}) => theme.media.mobile} {
      flex-grow: 1;
      justify-content: flex-end;
      margin-right: 15px;
    }
  }
`
const Menu = styled.div`
  @media ${({theme}) => theme.media.mobile} {
    order: 3;
  }
`
const MenuBurger = styled.span`
  display: none;
  position: relative;
  width: 18px;
  height: 2px;
  background-color: ${({theme}) => theme.colors.title};
  border-radius: 3px;

  @media ${({theme}) => theme.media.mobile} {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.title};
    top: 0;
    left: 0;
    border-radius: 2px;
  }

  &::after {
    transform: translateY(5px);
  }

  &::before {
    transform: translateY(-5px);
  }
}
`

const MenuBody = styled.nav<{isOpen: boolean}>`
  @media ${({theme}) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    top: -1000%;
    right: 0;
    overflow: auto;
    background-color: ${({theme}) => theme.colors.secondaryBg};
    padding: 40px 10px;
    border-radius: 0 0 24px 24px;
    transition: all 0.2s ease 0s;
    z-index: 4;
    ${props=>props.isOpen && css<{isOpen: boolean}>`
      top: 48px;
    `}
  }
`
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  @media ${({theme}) => theme.media.mobile} {
    flex-direction: column;
  }
`
const MenuItem = styled.li`
  font-size: 0.9rem;
  color: ${({theme}) => theme.colors.title};
  line-height: 140%;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 0.8rem;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 1.1rem;
  }

  &:not(:last-child) {
    margin-right: 24px;
    @media ${({theme}) => theme.media.mobile} {
      margin-right: 0;
      margin-bottom: 15px;
    }
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