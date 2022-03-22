import styled from "styled-components";
import { transition } from "../../global/animation.styles";

interface IStyledImage {
    isTarget?: boolean;
}

export const StyledImage = styled.div<IStyledImage>`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${p => p.isTarget ? `linear-gradient(-45deg, ${p.theme.themeProps.primaryLight}, ${p.theme.themeProps.primaryDark}, ${p.theme.themeProps.secondaryLight}, ${p.theme.themeProps.secondaryDark})` : 'white'};
    background-size: 120% 120%;
    backdrop-filter: invert();
    transition: background-size ${transition.appearSecondary};
    outline: ${p => p.isTarget ? `solid 2px ${p.theme.themeProps.primary}` : `solid 0px ${p.theme.themeProps.primary}`};

    &:hover {
        background: ${p => `linear-gradient(-45deg, ${p.theme.themeProps.primaryLight}, ${p.theme.themeProps.primaryDark}, ${p.theme.themeProps.secondaryLight}, ${p.theme.themeProps.secondaryDark})`};
        background-size: ${p => p.isTarget ? '120% 120%' : '300% 300%'};
    }
`;