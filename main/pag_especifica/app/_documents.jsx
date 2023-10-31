// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

// Crear un tema personalizado con Material-UI
const theme = responsiveFontSizes(createTheme());

export default class MyDocument extends Document {
  render() {
    return (
      // Estructura del documento HTML generado en el servidor
      <Html lang="es"> {/* Establece el idioma del documento */}
        <Head>
          {/* Etiquetas <head> del documento */}
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          {/* Configuración del viewport para dispositivos móviles */}
        </Head>
        <body>
          {/* El proveedor de tema de Material-UI para la aplicación */}
          <ThemeProvider theme={theme}>
            <Main /> {/* Componente principal de la aplicación */}
            <NextScript /> {/* Scripts generados por Next.js */}
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}
