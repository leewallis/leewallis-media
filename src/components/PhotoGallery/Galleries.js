import React, { useState } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import FsLightbox from 'fslightbox-react';

import { GalleryContainer, GalleryLink } from '../../styles';

function Galleries(props) {
  const [toggler, setToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);

  // console.log(props);
  return (
    <GalleryContainer style={{backgroundImage: 'url(' + props.galleryData.cover_image + ')'}}>
      <GalleryLink onClick={() => {setToggler(!toggler); setCurrentGallery(props.galleryData)}}>
        <Grid>
          <Row>
            <Col>
              <h3>{props.galleryData.title}</h3>
              <h4>{props.galleryData.sub_title}</h4>
              <p>{props.galleryData.state}</p>
            </Col>
          </Row>
        </Grid>
      </GalleryLink>
      {currentGallery && <FsLightbox type="image" toggler={toggler} sources={currentGallery.content_list.map(img => img.filename)} />}
    </GalleryContainer>
  );
}

export { Galleries };
