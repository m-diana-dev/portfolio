import {FC} from "react";
import S from './ReviewsItem_Styles.ts'

type ReviewsItemPropsType = {
    name?: string
    text?: string
    title?: string
    link?: string
}
export const ReviewsItem: FC<ReviewsItemPropsType> = ({name, text, title, link}) => {
    const ReviewsBlockAs = link ? 'a' : 'article'

    return (
        <S.ReviewsItem as={ReviewsBlockAs} href={link}>
            {title && <S.ReviewsItemTitle>{title}</S.ReviewsItemTitle>}
            <S.ReviewsItemName>{name}</S.ReviewsItemName>
            <S.ReviewsItemText>{text}</S.ReviewsItemText>
        </S.ReviewsItem>
    );
}
