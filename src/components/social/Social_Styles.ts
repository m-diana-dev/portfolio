import styled from "styled-components";

const SocialList = styled.ul`
  display: flex;
  align-items: center;
`
const SocialItem = styled.li`
  &:not(:last-child){
    margin-right: 3px;
  }
`
const SocialLink = styled.a`
  display: block;
  color: ${({theme})=>theme.colors.colorMain};
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all .3s;
  @media (any-hover: hover){
    &:hover{
       background-color: ${({theme})=>theme.colors.colorSecondary};
    }
  }
  svg{
    transition: all .3s;
  }
`

const S = {
    SocialList,
    SocialItem,
    SocialLink
}

export default S