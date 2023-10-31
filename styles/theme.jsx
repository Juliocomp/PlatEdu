import { createTheme } from '@mui/material/styles';

// Define y exporta tu tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Color principal
    },
    secondary: {
      main: '#dc004e', // Color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Configura la fuente tipográfica
  },
  // Otros ajustes y configuraciones del tema según tus necesidades
});

export default theme;


