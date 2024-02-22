import styled from "styled-components";

const WorkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  @media ${({theme}) => theme.media.mobile} {
    margin-left: -15px;
  }
`

export const S = {
    WorkItems,
}