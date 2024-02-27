import {FC, memo} from "react";
import S from './ReviewsItem_Styles.ts'

type ReviewsItemPropsType = {
    name?: string
    text?: string
    title?: string
    link?: string
}
export const ReviewsItem: FC<ReviewsItemPropsType> = memo(({name, text, title, link}) => {
    const ReviewsBlockAs = link ? 'a' : 'article'

    return (
        <S.ReviewsItem as={ReviewsBlockAs} href={link} target='_blank'>
            {title && <S.ReviewsItemTitle>{title}</S.ReviewsItemTitle>}
            {name && <S.ReviewsItemName>{name}</S.ReviewsItemName>}
            {text && <S.ReviewsItemText>«{text}»</S.ReviewsItemText>}
        </S.ReviewsItem>
    );
})
