import * as React from "react";
import Head from 'next/head';
import { useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import { StyledPage } from "../pages/page.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styles";
import { GlobalStyle } from "./global.styles";
import PositionsContainer from "../components/positions/positionsContainer";


const Layout: React.FC = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    const updateNavOpen = React.useCallback((newNavState?: boolean) => {
        console.log('trying to change nav state');
        setNavOpen(newNavState || !navOpen);
    }, [navOpen, setNavOpen]);

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <GlobalStyle />
                <Head>
                    <title>JS Positions</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Header updateNavOpen={updateNavOpen} />
                    <Navigation open={true} updateNavOpen={updateNavOpen} />
                    <StyledPage>
                        {children}
                    </StyledPage>
                    <PositionsContainer />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default Layout;