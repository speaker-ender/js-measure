import styled from "styled-components";
import { media } from "../../../global/variables/breakpoints";
import { StyledFooter } from "../../interface/footer.styles";
import { StyledHeader } from "../../interface/header.styles";
import { StyledNavigation } from "../../interface/navigation.styles";
import { StyledContentLayout } from "../page/content.layout.styles";


interface IStyledLibrary {
}

export const StyledLibrary = styled.div<IStyledLibrary>`
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid: "header header"
        "navigation navigation"
        "content content"
        "footer footer";
    align-content: center;
    grid-auto-flow: dense;

    @media ${media.tablet} {
        grid: "header header"
        "navigation content"
        "navigation footer";
        grid-template-columns: 25% 1fr; 

    }

    & ${StyledHeader} {
        grid-area: header;
    }

    & ${StyledNavigation} {
        grid-area: navigation;
    }

    & ${StyledContentLayout} {
        grid-area: content;
    }

    & ${StyledFooter} {
        grid-area: footer;
    }
`;