import React from 'react';
import { useParams } from 'react-router-dom';

import { 
  GalleryShowingContainer,
  GalleryShowingHeading,
  GalleryShowingHeadingSubTitle,
  GalleryShowingState
} from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';
import { GalleryElements } from './GalleryElements';

function GalleryShowing() {
  let { gallery_slug } = useParams();
  let galleryState = '';
  let galleryTitle = '';
  let gallerySubTitle = '';

  const galleryImages = gallery.project.albums.list
    .filter(list => list.gallery_id === gallery_slug)
    .map((list, index) => {
      galleryState = list.state;
      galleryTitle = list.title;
      gallerySubTitle = list.sub_title;
      return (<GalleryElements key={index} galleryAssets={list.content_list} />);
    });

  return (
    <GalleryShowingContainer>
      <GalleryShowingHeading>
        {galleryTitle}
        <GalleryShowingHeadingSubTitle>{gallerySubTitle}</GalleryShowingHeadingSubTitle>
        <GalleryShowingState>{galleryState}</GalleryShowingState>
      </GalleryShowingHeading>
      {galleryImages}
    </GalleryShowingContainer>
  );
}

export { GalleryShowing };
