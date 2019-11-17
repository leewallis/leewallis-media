import React from 'react';

import { PhotoGalleryContainer } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';
import { Galleries } from './Galleries';

function PhotoGallery() {
  const years = gallery.project.settings.years;

  const yearContainer = Object.keys(years).reverse().map((year, index) =>
    <Galleries key={index} year={year} />
  );

  return (
    <PhotoGalleryContainer>
      {yearContainer}
    </PhotoGalleryContainer>
  );
}

export { PhotoGallery };
