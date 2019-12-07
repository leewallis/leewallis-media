import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import ModalImage from "react-modal-image";

import { EventGalleryContainer, EventGalleryH1, EventGalleryH2, EventGalleryImageAsset } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';

function Gallery(props) {
  const galleryAssets = gallery.project.albums.list.filter(list => list.gallery_id === props.slug);
  const eventObj = galleryAssets[0];

  const assets = eventObj.content_list.map((asset, index) => {
    return <EventGalleryImageAsset xs={6} sm={4} md={3} key={index}>
      {/* <a href={asset.filename}><img src={asset.thumbnail} alt="Lee Wallis Media gallery" /></a> */}
      <ModalImage hideDownload hideZoom small={asset.thumbnail} large={asset.filename} alt="" />
    </EventGalleryImageAsset>
  });

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
          {assets}
        </Row>
      </Grid>
    </EventGalleryContainer>
  );
}

export { Gallery };
