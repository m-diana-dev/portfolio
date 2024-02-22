import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Tools} from "./layout/sections/tools/Tools.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Reviews} from "./layout/sections/reviews/Reviews.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Theme} from "./styles/Theme.tsx";
import {useState} from "react";
import {S} from "./App_Styles.ts"

function App() {
    const [openMenu, setOpenMenu] = useState(false)
    const isMenuOpenCallback = (isMenuOpen: boolean) => {
        setOpenMenu(isMenuOpen)
    }
    return (
        <>
            <Theme isMenuOpen={openMenu}>
                <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu}/>
                <Main/>
                <Tools/>
                <S.Sections>
                    <About/>
                    <Services/>
                    <Works/>
                    <Reviews/>
                    <Contacts/>
                </S.Sections>
                <Footer/>
            </Theme>
        </>
    )
}
export default App
