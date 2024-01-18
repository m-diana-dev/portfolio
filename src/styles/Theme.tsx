import {GlobalStyle} from "./Global.styled.ts";
import {ThemeProvider} from "styled-components";
import {FC, ReactNode} from "react";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryBg: string,
            secondaryBg: string,
            colorMain: string,
            colorSecondary: string,
            colorTertiary: string,
            title: string,
            text: string,
        }
        media: {
            tablet: string,
            mobile: string,
            mobileSmall: string,
        }
    }
}
export const theme = {
    colors: {
        primaryBg: '#FFF',
        secondaryBg: '#FFEFE4',
        colorMain: '#B285FF',
        colorSecondary: '#FFD885',
        colorTertiary: '#D2FF85',
        title: '#1B1B1B',
        text: '#494949'
    },
    media: {
        tablet: 'screen and (max-width: 991px)',
        mobile: 'screen and (max-width: 768px)',
        mobileSmall: 'screen and (max-width: 480px)',
    }
}

type ThemeType= {
    children: ReactNode
}
export const Theme: FC<ThemeType> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    );
}