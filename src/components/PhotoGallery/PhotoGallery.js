import React from 'react';

import { PhotoGalleryContainer } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';
import { YearArchives } from './YearArchives';

function PhotoGallery() {
  const years = gallery.project.settings.years;

  const yearContainer = Object.keys(years).reverse().map((year, index) =>
    <YearArchives key={index} year={year} />
  );

  return (
    <PhotoGalleryContainer>
      {yearContainer}
    </PhotoGalleryContainer>
  );
}

export { PhotoGallery };
