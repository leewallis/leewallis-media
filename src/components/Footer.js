import React from 'react';
// import { NavLink } from "react-router-dom";
import { Col, Row } from 'react-styled-flexboxgrid';

import { FooterGrid, FooterH3, FooterP, FooterCopyright, SocialMediaIcon } from '../styles';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';

function Footer() {  
  return (
    <footer>
      <FooterGrid fluid>
        <Row>
          <Col xs={12} sm={4}>
            <FooterH3>Contact Details</FooterH3>
            <FooterP>leewallis@gmail.com</FooterP>
            <FooterP>0421 332 579</FooterP>
          </Col>
          <Col xs={12} sm={4}>
            <FooterH3>Social Media</FooterH3>
            <SocialMediaIcon href="https://www.facebook.com/leewallis.media/" target="_blank"><Facebook fill="#ffffff" /></SocialMediaIcon>
            <SocialMediaIcon href="https://www.instagram.com/leewallis_media/" target="_blank"><Instagram fill="#ffffff" /></SocialMediaIcon>
          </Col>
          <Col xs={12} sm={4}>&nbsp;</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FooterCopyright>&copy; Copyright 2019 - Lee Wallis.</FooterCopyright>
          </Col>
        </Row>
      </FooterGrid>
    </footer>
  );
}

export { Footer };
