import React, { useState } from 'react';
import TinySlider from 'tiny-slider-react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import FsLightbox from 'fslightbox-react';

import { YearArchiveContainer, YearArchiveContainerSwipeLabel, GalleriesContainer, GalleryContainer, GalleryLink } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';

function YearArchives(props) {
  const [toggler, setToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);

  const galleryListing = gallery.project.albums.list
    .filter(list => list.year === props.year)
    .map((list, index) => {
      return (
        <GalleryContainer style={{backgroundImage: 'url(' + list.cover_image + ')'}}>
          <GalleryLink onClick={() => {setToggler(!toggler); setCurrentGallery(list)}}>
            <Grid>
              <Row>
                <Col>
                  <h3>{list.title}</h3>
                  <h4>{list.sub_title}</h4>
                  <p>{list.state}</p>
                </Col>
              </Row>
            </Grid>
          </GalleryLink>
        </GalleryContainer>
      );
  });

  const settings = {
    controls: false,
    fixedWidth: 300,
    nav: false,
    mouseDrag: true,
    responsive: {
      768: {
        fixedWidth: 600,
      }
    },
    slideBy: 'page',
    swipeAngle: false
  };

  return (
    <YearArchiveContainer>
      <h2>{props.year}</h2>
      <YearArchiveContainerSwipeLabel>swipe &#8594;</YearArchiveContainerSwipeLabel>
      <GalleriesContainer>
        <TinySlider settings={settings}>
          {galleryListing}
        </TinySlider>
      </GalleriesContainer>
      {currentGallery && <FsLightbox type="image" toggler={toggler} sources={currentGallery.content_list.map(img => img.filename)} />}
    </YearArchiveContainer>
  );
}

export { YearArchives };
