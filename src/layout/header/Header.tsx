import {Container} from "../../components/Container.js";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {FC} from "react";
import {S} from './Header_Styles.ts'

type HeaderPropsType = {
    isMenuOpenCallback: (isMenuOpen: boolean) => void
    openMenu: boolean
}
export const Header: FC<HeaderPropsType> = ({isMenuOpenCallback, openMenu}) => {
    const menuItems = [
        {title: 'Обо мне', href: 'about'},
        {title: 'Услуги', href: 'services'},
        {title: 'Проекты', href: 'projects'},
        {title: 'Отзывы', href: 'reviews'},
        {title: 'Контакты', href: 'contacts'}
    ]

    const onBurgerHandler = () => {
        isMenuOpenCallback(!openMenu)
    }

    const onLinkHandler = () => {
        if(openMenu){
            isMenuOpenCallback(!openMenu)
        }
    }

    return (
        <S.Header>
            <Container>
                <FlexWrapp $justify={'space-between'}>
                    <Logo/>
                    <S.Menu $isopen={openMenu}>
                        <S.MenuBurger onClick={onBurgerHandler}><span></span></S.MenuBurger>
                        <S.MenuBody>
                            <S.MenuList>
                                {menuItems.map((el, index) => <S.MenuItem key={index}>
                                    <S.MenuLink onClick={onLinkHandler}
                                              activeClass="_active"
                                              spy={true}
                                              smooth={true}
                                              offset={-50}
                                              to={el.href}>{el.title}</S.MenuLink>
                                </S.MenuItem>)}
                            </S.MenuList>
                        </S.MenuBody>
                    </S.Menu>
                    <Social items={['telegram', 'whatsapp', 'mail2']}/>
                </FlexWrapp>
            </Container>
        </S.Header>
    );
};
