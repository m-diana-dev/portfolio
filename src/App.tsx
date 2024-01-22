import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Tools} from "./layout/sections/tools/Tools.tsx";
import {About} from "./layout/sections/about/About.tsx";
import styled from "styled-components";
import {Services} from "./layout/sections/services/Services.tsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Tools/>
            <Sections>
                <About/>
                <Services/>
            </Sections>
        </>
    )
}

const Sections = styled.div`
  section{
    padding: 110px 0;
    overflow: hidden;

    &:nth-child(odd){
      background-color: ${({theme}) => theme.colors.primaryBg}
    }
    &:nth-child(even){
      background-color: ${({theme}) => theme.colors.secondaryBg}
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
