import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const primary = '#000';
const secondary = 'rgb(255, 168, 53)';

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
