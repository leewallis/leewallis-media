import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { GlobalStyle, Theme } from './styles';
import { Contact, Home, Photography, Gallery, Websites } from './pages';
import { Hamburger } from  './components';

function LeeWallis() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Reset />
        <Hamburger />
        <Switch>
          <Route path="/contact/">
            <Contact />
          </Route>
          <Route exact path="/photography/">
            <Photography />
          </Route>
          <Route exact path="/photography/:gallery_slug">
            <Gallery />
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

export default LeeWallis;
