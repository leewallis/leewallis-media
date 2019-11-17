import React, { useEffect } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { HomeHero } from '../../styles';
import LeeWallisMediaLogo from '../../assets/leewallis-full.svg';
import { siteTitle } from '../../SEO';

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
          </Col>
        </Row>
      </Grid>
    </HomeHero>
  );
}

export { Home };
