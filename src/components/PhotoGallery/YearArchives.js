import React from 'react';
import TinySlider from 'tiny-slider-react';

import { YearArchiveContainer, YearArchiveContainerSwipeLabel, GalleriesContainer } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';
import { Galleries } from './Galleries';

function YearArchives(props) {
  const galleryListing = gallery.project.albums.list
    .filter(list => list.year === props.year)
    .map((list, index) => {
      return <Galleries key={index} year={props.year} galleryData={list} />
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
