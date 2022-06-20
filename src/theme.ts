export type Colors = keyof typeof theme.colors;

const colors = {
  blue500: '#40A9FF',
  blue600: '#1890FF',
  blue700: '#096DD9',

  gray100: '#FCFCFC',
  gray200: '#FAFAFA',
  gray300: '#F5F5F5',
  gray500: '#D9D9D9',
  gray600: '#BFBFBF',
  gray900: '#262626',
}

const space = {
  none: '0px',
  xSmall: '2px',
  small: '4px',
  medium: '8px',
  large: '16px',
  xLarge: '32px',
  xxLarge: '64px',
}

const fontSizes = {
  xxSmall: '8px',
  xSmall: '12px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '28px',
  xxLarge: '32px',
}

const radii = {
  none: '0px',
  xSmall: '5px',
  small: '10px',
  medium: '15px',
  large: '20px',
  xLarge: '25px',
  xxLarge: '30px',
}

const theme = {
  colors,
  space,
  fontSizes,
  radii
}


export default theme;
