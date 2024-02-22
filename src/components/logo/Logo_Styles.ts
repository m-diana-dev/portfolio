import styled from "styled-components";

const Logo = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({theme})=>theme.colors.colorMain};
  cursor: pointer;
  transition: all .3s;
  @media (any-hover: hover){
    &:hover{
      color: ${({theme})=>theme.colors.colorSecondary};
    }
  }
  @media ${({theme}) => theme.media.tablet} {
    font-size: 1rem;
  }
`

export const S = {
    Logo
}