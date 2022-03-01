import styled from "styled-components";

interface IStyledImage {
    isTarget?: boolean;
}

export const StyledImage = styled.div<IStyledImage>`
    position: relative;
    width: 100%;
    height: 100%;
    outline: ${p => p.isTarget ? `solid 2px var(--primary--light)` : ''};
    background: white;
    backdrop-filter: invert();
`;