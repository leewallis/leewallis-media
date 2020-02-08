import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import { 
  GalleryElementsContainer,
  GalleryElementsAssetCol,
  GalleryAsset 
} from '../../styles';
import { mediaCDN } from '../../SEO';

function GalleryElements(props) {  
  const galleryAssets = props.galleryAssets.content_list
    .map((assets, index) => {
      return (
        <GalleryElementsAssetCol key={index} xs={6} sm={6} md={4}>
          <GalleryAsset src={mediaCDN + '/' + props.galleryAssets.year + assets.filename}/>
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
