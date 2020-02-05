import React, { Fragment, useEffect } from 'react';

import { Header, Footer, GalleryShowing } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

function Gallery() {
  useEffect(() => {
    document.title = 'Image Gallery - ' + siteTitle;
  });

  return (
    <Fragment>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <GalleryShowing />
      <Footer />
    </Fragment>
  );
}

export { Gallery };
