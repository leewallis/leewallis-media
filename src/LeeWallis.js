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
      // Defaults
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
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    background: #000000;
    color: #ffffff;
  }
  a {
    color: #84bd00;
  }

  @font-face {
    font-display: swap;
    font-family: 'Archivo Black';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/ArchivoBlack-Regular.woff2') format( 'woff2' );
  }
`;

export default LeeWallis;
