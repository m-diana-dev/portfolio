import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Tools = () => {
    const toolsItems = [
        {id: 'html', box: '0 0 20 20'},
        {id: 'javascript', box: '0 0 24 24'},
        {id: 'react', box: '0 0 27 24'},
        {id: 'css', box: '0 0 31 31'},
        {id: 'typescript', box: '0 0 24 24'},
        {id: 'redux', box: '0 0 24 24'},
    ]
    return (
        <StyledTools>
            <StyledToolsItems>
                {toolsItems.map(el => <Icon id={el.id} height={'80'} width={'80'} viewBox={el.box}/>)}
            </StyledToolsItems>
            <StyledToolsItems>
                {toolsItems.map(el => <Icon id={el.id} height={'80'} width={'80'} viewBox={el.box}/>)}
            </StyledToolsItems>
        </StyledTools>
    );
}

const StyledTools = styled.section`
  background-color: ${({theme}) => theme.colors.colorMain};
  padding: 25px 50px;
  position: relative;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 1200px){
    padding: 15px;
  }

  &::before,
  &::after {
    content: "";
    height: 100%;
    top: 0;
    width: 7%;
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 100%);
  }

  &:after {
    right: 0;
    background: linear-gradient(90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 100%);
  }
`
const StyledToolsItems = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  animation: scroll 20s linear infinite;

  &:not(:last-child) {
    margin-right: 20px;
  }

  svg {
    fill: #fff;

    &:not(:last-child) {
      margin-right: 20px;
    }

    @media screen and (max-width: 1200px){
      width: 50px;
      height: 50px;
    }
    @media ${({theme}) => theme.media.mobile} {
      width: 40px;
      height: 40px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      width: 30px;
      height: 30px;
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 20px));
    }
  }
`