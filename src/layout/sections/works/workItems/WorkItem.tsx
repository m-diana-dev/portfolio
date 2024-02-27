import {FC, memo} from "react";
import {Button} from "../../../../components/button/Button.ts";
import {HTMLMotionProps} from "framer-motion";
import {S} from './WorkItem_Styles.ts'

export type WorkItemPropsType = {
    img?: string
    imgWebp?: string
    title?: string
    link?: string
} & HTMLMotionProps<"div">
export const WorkItem: FC<WorkItemPropsType> = memo(({img, imgWebp, title, link, ...restProps}) => {
    return (
        <S.WorkItem {...restProps}>
            <S.WorkItemImg>
                <picture>
                    <source srcSet={imgWebp} type="image/webp"/>
                    <img src={img} alt="work"/>
                </picture>
                <Button as='a' href={`http://diana-dev.ru/${link}`} target='_blank'>Посмотреть</Button>
            </S.WorkItemImg>
            <S.WorkItemTitle href={`http://diana-dev.ru/${link}`} target='_blank'>{title}</S.WorkItemTitle>
        </S.WorkItem>
    );
})
