import React, { useEffect } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import ReactGA from 'react-ga';

import { HomeHero, HomeH1 } from '../../styles';
import LeeWallisMediaLogo from '../../assets/leewallis-full.svg';
import { siteTitle, GAID } from '../../SEO';

ReactGA.initialize(GAID);
ReactGA.pageview(window.location.pathname + window.location.search);

function Home() {
  useEffect(() => {
    document.title = siteTitle + ' - Brisbane based website developer and motorsport photography';
  });

  return (
    <HomeHero>
      <Grid fluid>
        <Row className={`home-hero`} middle="xs" center="xs">
          <Col center="xs" xs={12}>
            <img src={LeeWallisMediaLogo} className="leewallis-logo-home" alt="Lee Wallis Media" />
            <HomeH1>Motorsport photographer and web developer<br />Brisbane, Australia</HomeH1>
          </Col>
        </Row>
      </Grid>
    </HomeHero>
  );
}

export { Home };
