import {FC} from "react";
import {Button} from "../../../../components/button/Button.ts";
import {HTMLMotionProps} from "framer-motion";
import {S} from './WorkItem_Styles.ts'

export type WorkItemPropsType = {
    img?: string
    imgWebp?: string
    title?: string,
} & HTMLMotionProps<"div">
export const WorkItem: FC<WorkItemPropsType> = ({img, imgWebp, title, ...restProps}) => {
    return (
        <S.WorkItem {...restProps}>
            <S.WorkItemImg>
                <picture>
                    <source srcSet={imgWebp} type="image/webp"/>
                    <img src={img} alt="work"/>
                </picture>
                <Button as='a'>Посмотреть</Button>
            </S.WorkItemImg>
            <S.WorkItemTitle href='#'>{title}</S.WorkItemTitle>
        </S.WorkItem>
    );
}
