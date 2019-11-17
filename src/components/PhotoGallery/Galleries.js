import React from 'react';

// import { PhotoGalleryContainer } from '../../styles';
import gallery from '../../pages/Photography/GalleryContent.json';

// Gallery stuff for laterzzzz
// const galleryImages = props.galleryData.content_list.map((contentList, index) => {
//   return <img src={contentList.filename} alt="" key={index} />;
// });

// return galleryImages;

function SetupGalleryContainers(props) {
  return (
    <div>
      <h3>{props.galleryData.title}</h3>
      <h4>{props.galleryData.sub_title}</h4>
      <img src={props.galleryData.cover_image} alt="" />
    </div>
  );
}

function Galleries(props) {
  const galleryListing = gallery.project.albums.list
    .filter(list => list.year === props.year)
    .map((list, index) => {
      return <SetupGalleryContainers key={index} year={props.year} galleryData={list} />
  });

  return (
    <div>
      <h2>{props.year}</h2>
      {galleryListing}
    </div>
  );
}

export { Galleries };
