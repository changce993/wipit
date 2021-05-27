import theme from './theme';

const dark = {
  ...theme,
  colors: {
    ...theme.colors,
    black: '#FFF',
    lightBlack: '#FFF',
    gray: '#606060',
    bgGray: '#070D10',
    lightGray: '#404040',
    lightPrimary: 'rgba(255,0,0,.075)',
    white: '#000',
  },
  shadow: {
    1: '0 4px 10px 0 #151515',
  },
};

export default dark;
