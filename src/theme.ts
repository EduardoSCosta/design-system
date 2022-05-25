const colors = {
  blue500: '#40A9FF',
  blue600: '#1890FF',
  blue700: '#096DD9',

  gray100: '#F2F2F2',
  gray200: '#FAFAFA',
  gray300: '#F5F5F5',
  gray500: '#D9D9D9',
  gray600: '#BFBFBF',
  gray900: '#262626',

}

const space = [0, 2, 4, 8, 16, 32, 64].map(value => `${value}px`);

const fontSizes = [8, 12, 16, 20, 24, 28, 32].map(value => `${value}px`);

const radii = [0, 5, 10, 15, 20, 25, 30].map(value => `${value}px`);

const sizes = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600].map(value => `${value}px`);

const theme = {
  colors,
  space,
  fontSizes,
  radii,
  sizes
}

export default theme;
