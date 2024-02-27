import {FC, memo, ReactElement} from "react";
import {SectionTitle} from "../../../../components/SectionTitle.ts";
import {S} from './AboutItem_Styles.ts'


type AboutItemsPropsType = {
    value?: string
    title?: string
    img?: ReactElement
}
export const AboutItem: FC<AboutItemsPropsType> = memo(({value, title, img}) => {
    return (
        <S.AboutItem>
            <SectionTitle as="div">
                {value || img}
            </SectionTitle>
            <S.AboutItemTitle>
                {title}
            </S.AboutItemTitle>
        </S.AboutItem>
    );
})
