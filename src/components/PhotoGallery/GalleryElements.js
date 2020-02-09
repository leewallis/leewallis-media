import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import LazyLoad from 'react-lazyload';

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
        <GalleryElementsAssetCol key={index} xs={12} sm={6} md={4}>
          <LazyLoad throttle={200}>
            <GalleryAsset src={mediaCDN + '/' + props.galleryAssets.year + assets.filename} />
          </LazyLoad>
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
