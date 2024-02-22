import styled from "styled-components";

const Tools = styled.section`
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
const ToolsItems = styled.div`
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

export const S = {
    Tools,
    ToolsItems
}