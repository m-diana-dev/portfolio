import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Tools} from "./layout/sections/tools/Tools.tsx";
import {About} from "./layout/sections/about/About.tsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Tools/>
            <About/>
        </>
    )
}


export default App
