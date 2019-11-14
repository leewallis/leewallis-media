import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import HomeHeroBackground from '../../assets/home-intro-001.jpg';
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

const HomeHero = styled.div`
  background: url(${HomeHeroBackground}) no-repeat;
  background-size: cover;
  height: 100vh;

  .home-hero {
    min-height: 100vh;

    div {
      text-align: center;

      .leewallis-logo-home {
        max-width: 80%;
    
        @media (min-width: 48em) {
            max-width: 50%;
        }
      }
    }
  }
`;

export { Home };
