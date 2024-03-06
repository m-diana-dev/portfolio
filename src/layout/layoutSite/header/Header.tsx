import {Container} from "../../../components/Container.ts";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Social} from "../../../components/social/Social.tsx";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {FC, memo} from "react";
import {S} from './Header_Styles.ts'
import {NavLink, useLocation} from "react-router-dom";

type HeaderPropsType = {
    isMenuOpenCallback: (isMenuOpen: boolean) => void
    openMenu: boolean
}
export const Header: FC<HeaderPropsType> = memo(({isMenuOpenCallback, openMenu}) => {
    const path = useLocation().pathname;
    const innerPage = path.split('/')[1];

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
        if (openMenu) {
            isMenuOpenCallback(!openMenu)
        }
    }

    return (
        <S.Header>
            <Container>
                <FlexWrapp $justify={'space-between'}>
                    {innerPage ? <NavLink to={'/'}><Logo/></NavLink> : <Logo/>}
                    <S.Menu $isopen={openMenu}>
                        <S.MenuBurger onClick={onBurgerHandler}><span></span></S.MenuBurger>
                        <S.MenuBody>
                            {innerPage ? <S.HeaderLink onClick={onLinkHandler} to={'/'}>На главную</S.HeaderLink> :
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
                                }
                        </S.MenuBody>
                    </S.Menu>
                    <Social items={[
                        {id: 'telegram', link: 'tg://resolve?domain=dev_diana'},
                        {id: 'whatsapp', link: 'https://wa.me/79283637910'},
                        {id: 'mail2', link: 'mailto:m.diana.dev@gmail.com'},
                    ]}/>
                </FlexWrapp>
            </Container>
        </S.Header>
    );
})
