import styled from "styled-components";

type FlexWrappPropsType = {
    direction?: 'row' | 'row-reverse'| 'column' | 'column-reverse'
    justify?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center' | 'stretch'
    align?: 'baseline' | 'center' | 'flex-start' | 'flex-end'
    wrap?: 'wrap-reverse' | 'wrap' | 'nowrap'
}
export const FlexWrapp = styled.div<FlexWrappPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`