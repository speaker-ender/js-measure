import styled from "styled-components";

interface IStyledImage {
    isTarget?: boolean;
}

export const StyledImage = styled.div<IStyledImage>`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    backdrop-filter: invert();
    transition: background 400ms ease-in-out;
    outline: ${p => p.isTarget ? `solid 2px var(--primary)` : 'solid 0px var(--primary)'};
`;