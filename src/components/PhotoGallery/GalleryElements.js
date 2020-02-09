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
        <GalleryElementsAssetCol key={index} xs={10} sm={6} md={4} xsOffset={1} smOffset={0}>
          <LazyLoad throttle={200}>
            <GalleryAsset src={mediaCDN + '/' + props.galleryAssets.year + assets.filename + '?v=' + Math.floor(Math.random() * 1000) + 1}/>
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
