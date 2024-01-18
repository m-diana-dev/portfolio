import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href='#'>
            {'<devDiana />'}
        </StyledLogo>
    );
}

const StyledLogo = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({theme})=>theme.colors.colorMain};
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