import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import TinySlider from 'tiny-slider-react';

import { EventGalleryContainer, EventGalleryH1, EventGalleryH2, EventGalleryImageAsset } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';

function Gallery(props) {
  const galleryAssets = gallery.project.albums.list.filter(list => list.gallery_id === props.slug);
  const eventObj = galleryAssets[0];

  const assets = eventObj.content_list.map((asset, index) => {
    return <EventGalleryImageAsset key={index}><img src={asset.filename} alt="" /></EventGalleryImageAsset>
  });

  const settings = {
    // autoWidth: true,
    controls: false,
    edgePadding: 200,
    // fixedWidth: 300,
    items: 1,
    nav: false,
    mouseDrag: true,
    responsive: {
      768: {
        // fixedWidth: 600,
      }
    },
    swipeAngle: false
  };

  return (
    <EventGalleryContainer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <EventGalleryH1>{eventObj.title}</EventGalleryH1>
            <EventGalleryH2>{eventObj.sub_title}</EventGalleryH2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TinySlider settings={settings}>
              {assets}
            </TinySlider>
          </Col>
        </Row>
      </Grid>
    </EventGalleryContainer>
  );
}

export { Gallery };
