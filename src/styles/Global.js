import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-display: swap;
  font-family: 'Archivo Black';
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/ArchivoBlack-Regular.woff2') format( 'woff2' );
}

html {
  font-size: 10px;
}

body {
  background: ${({theme}) => theme.colors.base_100};
  color: ${({theme}) => theme.colors.base_0};
  font-size: 1.6rem;
}

a {
  color: ${({theme}) => theme.colors.primary};
}
`;

export { GlobalStyle };