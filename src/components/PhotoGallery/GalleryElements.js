import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import { GalleryElementsContainer, GalleryElementsAssetCol, GalleryAsset } from '../../styles';

function GalleryElements(props) {  
  const galleryAssets = props.galleryAssets
    .map((assets, index) => {
      return (
        <GalleryElementsAssetCol key={index} xs={2} sm={4} md={3}>
          <GalleryAsset src={assets.filename}/>
        </GalleryElementsAssetCol>
      );
    });

  return (
    <GalleryElementsContainer>
      <Grid fluid>
        <Row>
          {galleryAssets}
        </Row>
      </Grid>
    </GalleryElementsContainer>
  );
}

export { GalleryElements };
