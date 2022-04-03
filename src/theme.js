import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const primary = '#000';
const secondaries = ['#ffa835', '#35ffab', '#35f2ff'];
const secondary = secondaries[getRandomInt(0, secondaries.length)];

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: secondary,
    },
    text: {
      primary,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
