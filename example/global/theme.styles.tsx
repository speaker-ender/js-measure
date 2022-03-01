import { css } from "styled-components";

export const OPACITY = {
  none: 1,
  partial: 0.9,
  medium: 0.8,
  half: 0.5,
  high: 0.4,
  most: 0.2,
  full: 0,
}

export const theme = {
  colors: {
    skyBlue: 'rgb(48, 194, 247)',
    skyBluePartialOpacity: `rgb(48, 194, 247, ${OPACITY.partial})`,
    skyBlueMediumOpacity: `rgb(48, 194, 247, ${OPACITY.medium})`,
    skyBlueHalfOpacity: `rgb(48, 194, 247, ${OPACITY.half})`,
    skyBlueLight: '#80ddff',
    skyBlueDark: '#0e93c4',
    greyBlue: '#016097',
    blood: '#rgb(216, 0, 0)',
    bloodPartialOpacity: `rgb(216, 0, 0, ${OPACITY.partial})`,
    bloodMediumOpacity: `rgb(216, 0, 0, ${OPACITY.medium})`,
    bloodHalfOpacity: `rgb(216, 0, 0, ${OPACITY.half})`,
    bloodLight: '#ff3e3e',
    bloodDark: '#6b0101',
    green: '#0afc47',
    black: '#000000',
    white: '#ffffff',
    dust: 'rgb(48, 48, 48)',
    dustPartialOpacity: `rgba(48, 48, 48, ${OPACITY.partial})`,
    dustMediumOpacity: `rgba(48, 48, 48, ${OPACITY.medium})`,
    dustHalfOpacity: `rgba(48, 48, 48, ${OPACITY.half})`,
    dustLight: '#3f3f3f',
    dustDark: '#1a1919',
    sand: 'rgb(236, 232, 209)',
    sandPartialOpacity: `rgba(236, 232, 209, ${OPACITY.partial})`,
    sandMediumOpacity: `rgba(236, 232, 209, ${OPACITY.medium})`,
    sandHalfOpacity: `rgba(236, 232, 209, ${OPACITY.half})`,
    sandLight: '#f3f2ea',
    sandDark: '#afab91',
  },
  isInvert: false,
  rounding: {
    borderRadius: '25px',
  }
};

export type ThemeType = typeof theme;

export const lightThemeProps = css`
  --text: ${({ theme }) => theme.colors.black};
  --text-invert: ${({ theme }) => theme.colors.white};
  --background: ${({ theme }) => theme.colors.white};
  --background-invert: ${({ theme }) => theme.colors.black};
  --primary: ${({ theme }) => theme.colors.skyBlue};
  --primary--light: ${({ theme }) => theme.colors.skyBlueLight};
  --primary--dark: ${({ theme }) => theme.colors.skyBlueDark};
  --secondary: ${({ theme }) => theme.colors.greyBlue};
  --secondary--light: ${({ theme }) => theme.colors.greyBlue};
  --secondary--dark: ${({ theme }) => theme.colors.greyBlue};
  --tertiary: ${({ theme }) => theme.colors.sand};
  --tertiary--partial-opacity: ${({ theme }) => theme.colors.sandPartialOpacity};
  --tertiary--medium-opacity: ${({ theme }) => theme.colors.sandMediumOpacity};
  --tertiary--half-opacity: ${({ theme }) => theme.colors.sandHalfOpacity};
  --tertiary--light: ${({ theme }) => theme.colors.sandLight};
  --tertiary--dark: ${({ theme }) => theme.colors.sandDark};
`;

// set up dark theme CSS variables
export const darkThemeProps = css`
  --text: ${({ theme }) => theme.colors.white};
  --text-invert: ${({ theme }) => theme.colors.black};
  --background: ${({ theme }) => theme.colors.black};
  --background-invert: ${({ theme }) => theme.colors.white};
  --primary: ${({ theme }) => theme.colors.blood};
  --primary--light: ${({ theme }) => theme.colors.bloodLight};
  --primary--dark: ${({ theme }) => theme.colors.bloodDark};
  --secondary: ${({ theme }) => theme.colors.green};
  --secondary--light: ${({ theme }) => theme.colors.green};
  --secondary--dark: ${({ theme }) => theme.colors.green};
  --tertiary: ${({ theme }) => theme.colors.dust};
  --tertiary--partial-opacity: ${({ theme }) => theme.colors.dustPartialOpacity};
  --tertiary--medium-opacity: ${({ theme }) => theme.colors.dustMediumOpacity};
  --tertiary--half-opacity: ${({ theme }) => theme.colors.dustHalfOpacity};
  --tertiary--light: ${({ theme }) => theme.colors.dustLight};
  --tertiary--dark: ${({ theme }) => theme.colors.dustDark};
`;
