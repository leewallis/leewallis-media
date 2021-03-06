import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import LeeWallisMediaLogo from '../assets/leewallis-full.svg';

function Header() {  
  return (
    <Fragment>
      <Grid fluid>
        <Row>
          <Col center="xs" xs={6} sm={2}>
            <NavLink to="/">
              <img src={LeeWallisMediaLogo} className="leewallis-logo-header" alt="Lee Wallis Media" />
            </NavLink>
          </Col>
          <Col center="xs" xs={6} sm={10}></Col>
        </Row>
      </Grid>
    </Fragment>
  );
}

export { Header };
