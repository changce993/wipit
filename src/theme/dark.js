import theme from './theme';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    black: '#FFF',
    lightBlack: '#FFF',
    gray: '#606060',
    bgGray: '#070D10',
    lightGray: '#404040',
    white: '#000',
  },
  shadow: {
    1: '0 4px 10px 0 #151515',
  },
}