import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { ContactContainer } from '../../styles';

function Contact() {
  return (
    <ContactContainer>
      <Grid fluid>
        <Row className={`contact-section`} middle="xs" center="xs">
          <Col center="xs" xs={12}>
            <h1>Contact</h1>
            <h2>Lee Wallis</h2>
            <p>leewallis@gmail.com</p>
          </Col>
        </Row>
      </Grid>
    </ContactContainer>
  );
}

export { Contact };
