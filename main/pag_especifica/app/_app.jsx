import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme'; // Importa tu archivo de tema

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Eliminar el servidor CSS inyectado por Material-UI
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Incluye CssBaseline para establecer estilos básicos */}
      <CssBaseline />
      {/* Envuelve tu aplicación con el proveedor de tema de Material-UI */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
