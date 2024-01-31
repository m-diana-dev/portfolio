import styled from "styled-components";
import {ReactNode} from "react";

type ButtonPropsType = {
    children: ReactNode
}
export const Button = ({children}: ButtonPropsType) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
}

export const StyledButton = styled.button`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${({theme})=>theme.colors.title};
  color: ${({theme})=>theme.colors.primaryBg};
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 140%; 
  transition: all .3s;

  @media ${({theme}) => theme.media.mobile} {
    font-size: 0.8rem;
  }

  @media (any-hover: hover){
    &:hover{
      background: ${({theme})=>theme.colors.colorMain};
    }
  }
`