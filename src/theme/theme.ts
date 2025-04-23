import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5722',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
