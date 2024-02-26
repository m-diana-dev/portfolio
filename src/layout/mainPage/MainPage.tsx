import {FC} from "react";
import {Main} from "../../layout/sections/main/Main.tsx";
import {Tools} from "../../layout/sections/tools/Tools.tsx";
import {About} from "../../layout/sections/about/About.tsx";
import {Services} from "../../layout/sections/services/Services.tsx";
import {Works} from "../../layout/sections/works/Works.tsx";
import {Reviews} from "../../layout/sections/reviews/Reviews.tsx";
import {Contacts} from "../../layout/sections/contacts/Contacts.tsx";
import {S} from "./MainPage_Styles.ts"


export const MainPage: FC = () => {
    return (
        <>
            <Main/>
            <Tools/>
            <S.Sections>
                <About/>
                <Services/>
                <Works/>
                <Reviews/>
                <Contacts/>
            </S.Sections>
        </>
    );
};

