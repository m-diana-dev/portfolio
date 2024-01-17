import {FC} from "react";
import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";

type SocialPropsType = {
    items: Array<'telegram'|'whatsapp'|'mail'|'mail2'|'linkedin'|'github'|'codewars'>
}
export const Social: FC<SocialPropsType> = ({items}) => {
    return (
        <SocialList>
            {items.map(el => <SocialItem><SocialLink href='#'><Icon id={el} width={'25'} height={'25'} viewBox={'0 0 240 240'}/></SocialLink></SocialItem>)}
        </SocialList>
    );
}

const SocialList = styled.ul`
  display: flex;
  align-items: center;
`
const SocialItem = styled.li`
  &:not(:last-child){
    margin-right: 10px;
  }
`
const SocialLink = styled.a`
  display: block;
  color: ${({theme})=>theme.colors.colorMain};
  &:hover{
    svg{
      fill: ${({theme})=>theme.colors.colorMain};
    }
  }
  svg{
    transition: all .3s;
  }
`