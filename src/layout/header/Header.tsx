import styled, {css} from "styled-components";
import {Container} from "../../components/Container.js";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social, SocialList} from "../../components/social/Social.tsx";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {FC, useState} from "react";

type HeaderPropsType = {
    isMenuOpenCallback: (isMenuOpen: boolean) => void
    openMenu: boolean
}
export const Header: FC<HeaderPropsType> = ({isMenuOpenCallback, openMenu}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(openMenu);
    const menuItems: string[] = ['Обо мне', 'Услуги', 'Проекты', 'Отзывы', 'Контакты']

    const onBurgerHandler = () => {
        setIsMenuOpen(!isMenuOpen)
        isMenuOpenCallback(!isMenuOpen)
    }

    return (
        <StyledHeader>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <Logo/>
                    <Menu isOpen={isMenuOpen}>
                        <MenuBurger onClick={onBurgerHandler}><span></span></MenuBurger>
                        <MenuBody>
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
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .8);
  z-index: 40;
  @media ${({theme}) => theme.media.mobile} {
    padding: 10px 0;
  }

  ${SocialList} {
    @media ${({theme}) => theme.media.mobile} {
      flex-grow: 1;
      justify-content: flex-end;
      margin-right: 15px;
    }

    a {
      @media screen and (max-width: 370px) {
        width: 30px;
        height: 30px;
      }
    }

    svg {
      @media screen and (max-width: 370px) {
        width: 22px;
        height: 22px;
      }
    }
  }
}
`
const Menu = styled.div<{isOpen: boolean}>`
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    ${MenuBody}{
      top: 54px;
      @media screen and (max-width: 370px) {
        top: 49px;
      }
    }
    ${MenuBurger}{
      span {
        transform: scale(0);
      }

      &::before {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }

      &::after {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }
    }
  `} 
  @media ${({theme}) => theme.media.mobile} {
    order: 3;
  }
`
const MenuBurger = styled.button`
  display: none;
  position: relative;
  transition: all .3s;

  @media ${({theme}) => theme.media.mobile} {
    display: block;
  }
  
  span{
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.colorMain};
    border-radius: 2px;
    transition: all .3s;
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
    transition: all .3s;
  }

  &::after {
    transform: translateY(5px);
  }

  &::before {
    transform: translateY(-5px);
  }
}
`

const MenuBody = styled.nav`
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
    width: 0;
    height: 3px;
    border-radius: 2px;
    background-color: ${({theme})=>theme.colors.colorMain};
    transition: all .3s;
  }
  @media (any-hover: hover){
    &:hover{
      &::before{
        width: 100%;
      }
    }
  }
`