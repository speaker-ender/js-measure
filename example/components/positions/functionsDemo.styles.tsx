import styled from "styled-components";
import { StyledButton } from "../../global/button.styles";
import { CodeTextStyle, StyledVisibleLabel } from "../../global/typography";
import { StyledImage } from "../content/image.styles";
import { StyledContentItem } from "../layouts/content/contentItem.styles";

export const StyledFunctionDemo = styled(StyledContentItem)`
    & ${StyledImage} {
        height: auto;
    }

    & ${StyledVisibleLabel} {
        display: block;
    }
`

export const StyledFunctionDemoForm = styled.form`
    ${CodeTextStyle}

    div,
    & ${StyledVisibleLabel} {
        display: inline;
        ${CodeTextStyle}
    }

    & ${StyledButton} {
        width: 100%;
        margin: ${p => p.theme.spacingProps.textSpacingY} 0;
    }
`