import React from 'react';
// import { NavLink } from "react-router-dom";
import { Col, Row } from 'react-styled-flexboxgrid';

import { FooterGrid, FooterH3, FooterP, FooterCopyright, SocialMediaIcon } from '../styles';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Github } from '../assets/github.svg';

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
          <Col xs={12} sm={4} className={"social-media"}>
            <FooterH3>Social Media &amp; Work</FooterH3>
            <SocialMediaIcon href="https://www.facebook.com/leewallis.media/" target="_blank"><Facebook fill="#ffffff" /></SocialMediaIcon>
            <SocialMediaIcon href="https://www.instagram.com/leewallis_media/" target="_blank"><Instagram fill="#ffffff" /></SocialMediaIcon>
            <SocialMediaIcon href="https://github.com/leewallis" target="_blank"><Github fill="#ffffff" /></SocialMediaIcon>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FooterCopyright>&copy; Copyright 2020 - Lee Wallis.</FooterCopyright>
          </Col>
        </Row>
      </FooterGrid>
    </footer>
  );
}

export { Footer };
