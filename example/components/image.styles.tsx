import styled from "styled-components";

interface IStyledImage {
    isTarget?: boolean;
}

export const StyledImage = styled.div<IStyledImage>`
    position: relative;
    width: 100%;
    height: 100%;
    border: ${p => p.isTarget ? 'solid 2px blue' : ''};
`;