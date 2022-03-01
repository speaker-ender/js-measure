import styled from "styled-components";
import { StyledImage } from "./image.styles";

interface IStyledPanel {
}

export const StyledPanel = styled.div<IStyledPanel>`
        padding: 25px 50px;
        margin-bottom: 25px;
        background: var(--tertiary--partial-opacity);
        border-radius: ${p => p.theme.rounding.borderRadius}
`;