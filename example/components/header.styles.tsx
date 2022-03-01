import { Header2 } from "../global/typography";
import styled from "styled-components";

interface IStyledHeader {
}

export const StyledHeader = styled.div<IStyledHeader>`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    column-gap: 25px;
    row-gap: 25px;
    align-content: center;
    top: 0;
    width: 100vw;
    background: var(--tertiary--partial-opacity);
    backdrop-filter: blur(15px);
    color: var(--text);
    z-index: 100;
`;

export const StyledHeaderTitle = styled(Header2)`
    grid-column: 1 / span 4;
    grid-row: 1;
    margin: 0.5rem;
    mix-blend-mode: invert;
`;