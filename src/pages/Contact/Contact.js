import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import ReactGA from 'react-ga';

import { Header, Footer } from '../../components';
import { ContactContainer, ContactParagraph, HeaderContainer } from '../../styles';

ReactGA.initialize(GAID);
ReactGA.pageview(window.location.pathname + window.location.search);

function Contact() {
  return (
    <ContactContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Grid fluid>
        <Row className={`contact-section`} middle="xs" center="xs">
          <Col center="xs" xs={12}>
            <h1>Contact</h1>
            <h2>Lee Wallis</h2>
            <h3>Brisbane, Australia</h3>
            <ContactParagraph>leewallis@gmail.com</ContactParagraph>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </ContactContainer>
  );
}

export { Contact };
