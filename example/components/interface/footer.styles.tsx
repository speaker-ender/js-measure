import { ParagraphTextStyle } from "../../global/typography";
import styled from "styled-components";
import { LAYERS } from "../../global/variables/layers";
import { transition } from "../../global/animation.styles";

interface IStyledFooter {
}

export const StyledFooter = styled.div<IStyledFooter>`
    background: ${p => p.theme.themeProps.background};
    transition: background-color ${transition.appear};
    color: ${p => p.theme.themeProps.text};
`;

export const StyledFooterContent = styled.div<IStyledFooter>`
    ${ParagraphTextStyle};
    padding: ${p => p.theme.spacingProps.defaultSpacing};
`;