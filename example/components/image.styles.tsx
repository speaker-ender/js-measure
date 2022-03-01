import styled from "styled-components";

interface IStyledImage {
    isTarget?: boolean;
}

export const StyledImage = styled.div<IStyledImage>`
    position: relative;
    width: 100%;
    height: 100%;
    outline: ${p => p.isTarget ? `solid 2px var(--primary)` : 'solid 0px var(--primary)'};
    background-color: ${p => p.isTarget ? `var(--secondary)` : 'white'};
    backdrop-filter: invert();
    transition: background 400ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${p => p.isTarget ? `var(--secondary--dark)` : 'var(--secondary--light)'};
        outline: ${p => p.isTarget ? `solid 2px var(--primary--light)` : 'solid 1px var(--primary--light)'};
    }
`;