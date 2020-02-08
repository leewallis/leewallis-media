import { createGlobalStyle } from 'styled-components';
import ArchivoBlack from '../assets/fonts/ArchivoBlack-Regular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-display: swap;
  font-family: 'Archivo Black';
  font-style: normal;
  font-weight: normal;
  src: local('Archivo Black'), url(${ArchivoBlack}) format( 'woff2' );
}

html {
  font-size: 10px;
  line-height: 1;
}

body {
  background: ${({theme}) => theme.colors.base_0};
  color: ${({theme}) => theme.colors.base_100};
  font-family: ${({theme}) => theme.font_family.body};
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
  line-height: 1.2
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

h4 {
  font-family: ${({theme}) => theme.font_family.body};
  font-size: 1.4rem;
  line-height: 1.25;
  margin-bottom: 1rem;

  @media (min-width: 48em) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
}

p {
  font-family: ${({theme}) => theme.font_family.body};
  font-size: 2rem;
}
`;

export { GlobalStyle };