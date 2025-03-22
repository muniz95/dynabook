import { createTheme } from '@mui/material';

const theme = createTheme({
  cssVariables: false,
  palette: {
    mode: 'dark',
    primary: {
      main: '#F6E27F',
    },
    secondary: {
      main: '#048A81',
    },
  },
});

export default theme;
