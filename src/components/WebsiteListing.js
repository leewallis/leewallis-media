import React from 'react';
import { Col } from 'react-styled-flexboxgrid';

import {
  WebsiteListingContainerCoverImage,
  WebsiteListingContainerH2,
  WebsiteListingContainerTech
} from '../styles';

function WebsiteListing(props) {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href={props.list.url} target="_blank" rel="noopener noreferrer"><WebsiteListingContainerCoverImage src={props.list.cover_image} /></a>
      <WebsiteListingContainerH2>{props.list.title}</WebsiteListingContainerH2>
      <WebsiteListingContainerTech>Tech used: {props.list.tech_used}</WebsiteListingContainerTech>
      <WebsiteListingContainerTech>Designed with: {props.list.design_width}</WebsiteListingContainerTech>
    </Col>
  );
}

export { WebsiteListing };
