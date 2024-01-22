import styled from "styled-components";
import {FC} from "react";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {font} from "../../../../styles/Common.ts";

type ServicesItemPropsType = {
    iconId: string
    iconBox: string
    title: string
    text: string
}
export const ServicesItem: FC<ServicesItemPropsType> = ({iconId, iconBox, title, text}) => {
    return (
        <StyledServicesItem>
            <Icon id={iconId} width={'54'} height={'54'} viewBox={iconBox}/>
            <ServicesItemTitle>{title}</ServicesItemTitle>
            <ServicesItemText>
                {text}
            </ServicesItemText>
        </StyledServicesItem>
    );
}

export const ServicesItemTitle = styled.div`
  ${font({family: 'Montserrat', color: '#1B1B1B', lineHeight: 1, fontMin: 24, fontMax: 28})};
  margin-bottom: 12px;
  max-width: 96%;
`
export const ServicesItemText = styled.div`
  font-size: 16px;
  line-height: 140%;
`
export const StyledServicesItem = styled.article`
  width: calc(25% - 20px);
  padding: 40px 24px 30px;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: all .3s;

  &:nth-child(1) {
    background-color: ${({theme}) => theme.colors.colorMain};

    ${ServicesItemTitle} {
      color: ${({theme}) => theme.colors.primaryBg}
    }

    ${ServicesItemText} {
      color: ${({theme}) => theme.colors.lightText}
    }

    svg {
      fill: ${({theme}) => theme.colors.primaryBg};
    }
  }

  &:nth-child(2) {
    background-color: ${({theme}) => theme.colors.colorSecondary};
  }

  &:nth-child(3) {
    background-color: ${({theme}) => theme.colors.colorMain};

    ${ServicesItemTitle} {
      color: ${({theme}) => theme.colors.primaryBg}
    }

    ${ServicesItemText} {
      color: ${({theme}) => theme.colors.primaryBg}
    }

    svg {
      fill: ${({theme}) => theme.colors.primaryBg};
    }
  }

  &:nth-child(4) {
    background-color: ${({theme}) => theme.colors.colorTertiary};
  }

  @media (any-hover: hover) {
    &:hover {
      box-shadow: 8px 8px 0 0 rgba(20, 20, 20, 0.16);
      transform: translate(-5px, -5px);
    }
  }

  @media screen and (max-width: 1200px) {
    width: calc(50% - 10px);
  }

  @media ${({theme}) => theme.media.mobile} {
    width: 100%;
    padding: 30px 20px 25px;
  }

  svg {
    fill: #1B1B1B;
    margin-bottom: 25px;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
    }
  }
`