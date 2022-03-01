import styled from "styled-components";

export const StyledPositionsContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 25px 50px;
    margin: 25px;
    transform: translate3d(0, 0, 0);
    background: var(--tertiary--partial-opacity);
    backdrop-filter: blur(15px);
    color: var(--text);
    border-radius: ${p => p.theme.rounding.borderRadius}
`;
