import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Gallery as ImageGallery } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

function Gallery() {
  let { slug } = useParams();

  useEffect(() => {
    document.title = 'Gallery - ' + siteTitle;
  });

  return (
    <Fragment>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ImageGallery slug={slug} />
    </Fragment>
  );
}

export { Gallery };