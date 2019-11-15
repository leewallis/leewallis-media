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
  line-height: 1;
}

body {
  background: ${({theme}) => theme.colors.base_100};
  color: ${({theme}) => theme.colors.base_0};
  font-size: 1.6rem;
}

a {
  color: ${({theme}) => theme.colors.primary};
}

h1 {
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.font_family.heading};
  font-size: 4.5rem;
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media (min-width: 48em) {
    font-size: 10rem;
    margin-bottom: 6rem;
  }
}

h2 {
  font-family: ${({theme}) => theme.font_family.heading};
  font-size: 3.5rem;
  margin-bottom: 3rem;

  @media (min-width: 48em) {
    font-size: 6rem;
    margin-bottom: 4rem;
  }
}

h3 {
  font-family: ${({theme}) => theme.font_family.heading};
  font-size: 2.8rem;
  margin-bottom: 2.5rem;

  @media (min-width: 48em) {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
}

p {
  font-family: ${({theme}) => theme.font_family.body};
  font-size: 2rem;
}
`;

export { GlobalStyle };