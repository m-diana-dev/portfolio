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
            lightText: string
        }
        media: {
            tablet: string,
            mobile: string,
            mobileSmall: string,
        },
        isMenuOpen: boolean
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
        text: '#494949',
        lightText: '#F7F3FF',
    },
    media: {
        tablet: 'screen and (max-width: 991px)',
        mobile: 'screen and (max-width: 768px)',
        mobileSmall: 'screen and (max-width: 480px)',
    }
}

type ThemeType= {
    children: ReactNode
    isMenuOpen: boolean
}
export const Theme: FC<ThemeType> = ({children, isMenuOpen}) => {
    return (
        <ThemeProvider theme={{ ...theme, isMenuOpen }}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    );
}