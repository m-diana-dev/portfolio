import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Tools} from "./layout/sections/tools/Tools.tsx";
import {About} from "./layout/sections/about/About.tsx";
import styled from "styled-components";
import {Services} from "./layout/sections/services/Services.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Reviews} from "./layout/sections/reviews/Reviews.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {StyledButton} from "./components/button/Button.tsx";
import {Theme} from "./styles/Theme.tsx";
import {useState} from "react";

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
                <Sections>
                    <About/>
                    <Services/>
                    <Works/>
                    <Reviews/>
                    <Contacts/>
                </Sections>
                <Footer/>
            </Theme>
        </>
    )
}

const Sections = styled.div`
  section {
    padding: 110px 0;

    &:nth-child(odd) {
      background-color: ${({theme}) => theme.colors.primaryBg};

      ${StyledButton} {
        color: ${({theme}) => theme.colors.primaryBg};
      }
    }

    &:nth-child(even) {
      background-color: ${({theme}) => theme.colors.secondaryBg};

      ${StyledButton} {
        color: ${({theme}) => theme.colors.secondaryBg};
      }
    }

    @media ${({theme}) => theme.media.tablet} {
      padding: 80px 0;
    }
    @media ${({theme}) => theme.media.mobile} {
      padding: 60px 0;
    }
  }
`
export default App
