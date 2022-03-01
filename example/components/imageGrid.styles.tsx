import styled from "styled-components";
import { StyledImage } from "./image.styles";

interface IStyledImageGrid {
}

export const StyledImageGrid = styled.div<IStyledImageGrid>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 25px;
    align-content: center;

    & ${StyledImage} {
        grid-column: span 1;
    }
`;