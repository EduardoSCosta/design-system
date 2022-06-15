import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue500: string;
      blue600: string;
      blue700: string;
    
      gray100: string;
      gray200: string;
      gray300: string;
      gray500: string;
      gray600: string;
      gray900: string;
    },    
    space: {
      none: string;
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    },
    fontSizes: {
      xxSmall: string;
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    }    
    radii: {
      none: string;
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    }
  }
}
