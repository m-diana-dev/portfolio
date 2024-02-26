import {Header} from "./layout/header/Header.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Theme} from "./styles/Theme.tsx";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./layout/errorPage/errorPage.tsx";
import {MainPage} from "./layout/mainPage/MainPage.tsx";
import {S} from './App_Styles.ts'
import {Policy} from "./layout/policy/Policy.tsx";

function App() {
    const [openMenu, setOpenMenu] = useState(false)
    const isMenuOpenCallback = (isMenuOpen: boolean) => {
        setOpenMenu(isMenuOpen)
    }
    return (
        <>
            <Theme isMenuOpen={openMenu}>
                <BrowserRouter>
                    <S.Wrapper>
                        <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu}/>
                        <Routes>
                            <Route path={'/'} element={<MainPage/>}/>
                            <Route path={'/policy'} element={<Policy/>}/>
                            <Route path={'/*'} element={<ErrorPage/>}/>
                        </Routes>
                        <Footer/>
                    </S.Wrapper>
                </BrowserRouter>
            </Theme>
        </>
    )
}

export default App
