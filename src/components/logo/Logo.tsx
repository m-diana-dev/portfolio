import {animateScroll as scroll} from "react-scroll";
import {FC} from "react";
import {S} from './Logo_Styles.ts'

export const Logo: FC = () => {
    return (
        <S.Logo onClick={()=>{scroll.scrollToTop()}}>
            {'<devDiana />'}
        </S.Logo>
    );
}
