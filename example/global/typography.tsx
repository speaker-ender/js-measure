import styled, { css } from "styled-components";

export const FONTS = {
    main: `"Arial Black", Arial, Helvetica, sans-serif`,
    mainBold: `"Arial Black", Arial, Helvetica, sans-serif`,
    secondary: `"Arial Black", Arial, Helvetica, sans-serif`
};

export const Header1Style = css`
    font-family: ${FONTS.mainBold};
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

export const Header1 = styled.h1`
    ${Header1Style};
    color: var(--text);
`;

export const Header2Style = css`
    font-family: ${FONTS.main};
    font-size: 2.5rem;
    text-transform: uppercase;
`

export const Header2 = styled.h2`
    ${Header2Style};
    color: var(--text);
`;

export const Header3Style = css`
    font-family: ${FONTS.mainBold};
    font-size: 1.5rem;
    text-transform: uppercase;
`

export const Header3 = styled.h3`
    ${Header3Style};
    color: var(--text);
`;

export const Header4Style = css`
    font-family: ${FONTS.mainBold};
    font-size: 1.5rem;
`

export const Header4 = styled.h4`
    ${Header4Style};
    color: var(--text);
`;

export const Header5Style = css`
    font-family: ${FONTS.mainBold};
    font-size: 0.8rem;
`

export const Header5 = styled.h5`
    ${Header5Style};
    color: var(--text);
`;

export const ParagraphTextStyle = css`
    font-family: ${FONTS.main};
    font-size: 0.8rem; 
`

export const Paragraph = styled.p`
    ${ParagraphTextStyle}
    color: var(--text);
`

export const StyledLabel = styled.label`
    font-family: ${FONTS.main};
    font-size: 0;
    width: 0px;
    height: 0px;
`