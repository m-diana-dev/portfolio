type FontPropsType = {
    family?: string
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    color?: string
    lineHeight?: number
    fontMin?: number
    fontMax?: number
}

export const font = ({family, weight, color, lineHeight, fontMax, fontMin}: FontPropsType) => `
    font-family: ${family || 'Roboto'};
    font-weight: ${weight || 400};
    color: ${color || '#494949'};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 320px)/(1280 - 320) * (${fontMax} - ${fontMin}) + ${fontMin}px );
`