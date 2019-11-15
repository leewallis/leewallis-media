import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { HomeHero } from '../../styles';
import LeeWallisMediaLogo from '../../assets/leewallis-full.svg';

function Home() {
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
