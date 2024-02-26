import {FC} from "react";
import {Icon} from "../../components/icon/Icon.tsx";
import S from './Social_Styles.ts'

type SocialPropsType = {
    items: { id: 'telegram' | 'whatsapp' | 'mail' | 'mail2' | 'linkedin' | 'github' | 'codewars', link: string }[]
}
export const Social: FC<SocialPropsType> = ({items}) => {
    return (
        <S.SocialList>
            {items.map((el, index) => <S.SocialItem key={index}>
                <S.SocialLink href={el.link} target='_blank'><Icon id={el.id} width={'25'} height={'25'}
                                                   viewBox={'0 0 240 240'}/></S.SocialLink>
            </S.SocialItem>)}
        </S.SocialList>
    );
}