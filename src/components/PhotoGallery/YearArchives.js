import React from 'react';
import TinySlider from 'tiny-slider-react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import {
  YearArchiveContainer,
  YearArchiveContainerSwipeLabel,
  GalleriesContainer,
  GalleryContainer,
  GalleryLink
} from '../../styles';
import { mediaCDN } from '../../SEO';
import gallery from '../../pages/Photography/GalleryContent.json';

function YearArchives(props) {
  const galleryListing = gallery.project.albums.list
    .filter(list => list.year === props.year)
    .map((list, index) => {
      return (
        <GalleryContainer key={index} style={{backgroundImage: 'url(' + mediaCDN + '/' + list.year + list.cover_image + ')'}}>
          <GalleryLink to={list.gallery_id}>
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
    </YearArchiveContainer>
  );
}

export { YearArchives };
