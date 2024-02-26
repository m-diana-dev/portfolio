import styled from "styled-components";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import Styles from '../../components/social/Social_Styles.ts'

const Footer = styled.footer`
  flex: 0 0 auto;
  padding: 40px 0;
  background-color: ${({theme})=>theme.colors.secondaryBg};
  @media ${({theme}) => theme.media.mobile} {
    padding: 35px 0 25px;
  }
  ${FlexWrapp}{
    @media ${({theme}) => theme.media.mobile} {
     flex-direction: column-reverse;
    }
  }
  ${Styles.SocialList}{
    @media ${({theme}) => theme.media.mobile} {
      order: 1;
      margin-bottom: 10px;
    }
  }
  a{
    transition: all .3s;
    @media (any-hover: hover){
      &:hover{
        color: ${({theme})=>theme.colors.colorMain};
      }
    }
  }
`
const FooterText = styled.small`
  color: ${({theme})=>theme.colors.title};
  font-size: 14px;
  line-height: 100%;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 10px;
  }
`

export const S = {
    Footer,
    FooterText
}