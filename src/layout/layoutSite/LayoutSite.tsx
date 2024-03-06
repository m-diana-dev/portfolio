import {S} from '../../layout/layoutSite/LayoutSite_Styles.ts'
import {Outlet} from "react-router-dom";
import {Footer} from "../../layout/layoutSite/footer/Footer.tsx";
import {Header} from "../../layout/layoutSite/header/Header.tsx";
import {useState} from "react";
import {Theme} from "../../styles/Theme.tsx";

export const LayoutSite = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isMenuOpenCallback = (isMenuOpen: boolean) => {
        setOpenMenu(isMenuOpen)
    }
    return (
        <Theme isMenuOpen={openMenu}>
            <S.Wrapper>
                <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu}/>
                <Outlet/>
                <Footer/>
            </S.Wrapper>
        </Theme>
    );
}
