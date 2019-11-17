import React from 'react';

import { PhotoGalleryContainer } from '../../styles';
import gallery from '../../pages/Photography/gallery_content.json';
import { Galleries } from './Galleries';

function PhotoGallery() {
  //console.log(gallery.project.settings);

  const years = gallery.project.settings.years;

  // for (let year in years){
  //   if(years.hasOwnProperty(year)){
  //     console.log(`${years[year]}`)
      
  //   }
  // }

  const yearContainer = Object.keys(years).map( (year, index) =>
    <Galleries key={index} year={year} />
  );

  return (
    <PhotoGalleryContainer>
      {yearContainer}
    </PhotoGalleryContainer>
  );
}

export { PhotoGallery };
