import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { Contact, Home, Photography, Websites } from './pages';
import { Hamburger } from  './components';
import './fonts/ArchivoBlack-Regular.woff2';

function LeeWallis() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Reset />
        <Hamburger />
        <Switch>
          <Route path="/contact/">
            <Contact />
          </Route>
          <Route path="/photography/">
            <Photography />
          </Route>
          <Route path="/websites/">
            <Websites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  },
  font_family: {
    heading: '\'Archivo Black\', sans-serif',
    body: 'Arial, Helvetica, sans-serif'
  },
  colors: {
    primary: '#84bd00',
    base_0: '#ffffff',
    base_10: '#f8f9fa',
    base_20: '#e9ecef',
    base_30: '#dee2e6',
    base_40: '#ced4da',
    base_50: '#adb5bd',
    base_60: '#6c757d',
    base_70: '#495057',
    base_80: '#343a40',
    base_90: '#212529',
    base_100: '#000000',
  }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Archivo Black';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/ArchivoBlack-Regular.woff2') format( 'woff2' );
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${theme.colors.base_100};
    color: ${theme.colors.base_0};
    font-size: 1.6rem;
  }

  a {
    color: ${theme.colors.primary};
  }
`;

export default LeeWallis;
