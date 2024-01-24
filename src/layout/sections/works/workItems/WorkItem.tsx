import {FC} from "react";
import styled from "styled-components";
import {Button, StyledButton} from "../../../../components/button/Button.tsx";

type WorkItemPropsType = {
    img: string
    imgWebp: string
    title: string
}
export const WorkItem: FC<WorkItemPropsType> = ({img, imgWebp, title}) => {
    return (
        <StyledWorkItem>
            <WorkItemImg>
                <picture>
                    <source srcSet={imgWebp} type="image/webp"/>
                    <img src={img} alt="work"/>
                </picture>
                <Button>Посмотреть</Button>
            </WorkItemImg>
            <WorkItemTitle href='#'>{title}</WorkItemTitle>
        </StyledWorkItem>
    );
}

const StyledWorkItem = styled.article`
  width: calc(33.3333% - 20px);
  margin-left: 20px;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.tablet} {
    width: calc(50% - 20px);
  }
  @media ${({theme}) => theme.media.mobile} {
    width: calc(50% - 15px);
    margin-left: 15px;
    margin-bottom: 15px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    width: 100%;
  }
`

const WorkItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: all .3s;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 10px;
    height: 300px;
    border-radius: 10px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, .7);
    opacity: 0;
    pointer-events: none;
    transition: all .3s;
  }

  &:hover {
    &::before,
    ${StyledButton} {
      opacity: 1;
      pointer-events: auto;
    }
    img{
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    transition: all .3s;
    @media ${({theme}) => theme.media.mobile} {
      border-radius: 10px;
    }
  }

  ${StyledButton} {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
  }
`
const WorkItemTitle = styled.a`
  color: ${({theme})=>theme.colors.title};
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 100%; 
  transition: all .3s;
  
  @media (any-hover: hover){
    &:hover{
      color: ${({theme})=>theme.colors.colorMain};
    }
  }

  @media ${({theme}) => theme.media.mobile} {
    font-size: 0.85rem;
  }
`