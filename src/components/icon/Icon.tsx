import {FC} from "react";
import iconSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    id: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon: FC<IconPropsType> = ({
                                            id,
                                            width,
                                            height,
                                            viewBox
                                        }) => {
    return (
        <svg width={width || "30"} height={height || "30"} viewBox={viewBox || "0 0 30 30"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${id}`}/>
        </svg>
    );
}