import {FC, memo} from "react";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from './ServicesItem_Styles.ts'

type ServicesItemPropsType = {
    iconId: string
    iconBox: string
    title: string
    text: string
}
export const ServicesItem: FC<ServicesItemPropsType> = memo(({iconId, iconBox, title, text}) => {
    return (
        <S.ServicesItem>
            <Icon id={iconId} width={'54'} height={'54'} viewBox={iconBox}/>
            <S.ServicesItemTitle>{title}</S.ServicesItemTitle>
            <S.ServicesItemText>
                {text}
            </S.ServicesItemText>
        </S.ServicesItem>
    );
})
