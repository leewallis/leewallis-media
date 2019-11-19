import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { GalleryContainer, GalleryLink } from '../../styles';

function Galleries(props) {
  return (
    <GalleryContainer style={{backgroundImage: 'url(' + props.galleryData.cover_image + ')'}}>
      <GalleryLink to={`/photography/${props.galleryData.gallery_id}/`}>
        <Grid>
          <Row>
            <Col>
              <h3>{props.galleryData.title}</h3>
              <h4>{props.galleryData.sub_title}</h4>
            </Col>
          </Row>
        </Grid>
      </GalleryLink>
    </GalleryContainer>
  );
}

export { Galleries };
