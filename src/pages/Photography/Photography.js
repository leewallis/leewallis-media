import React, { Fragment, useEffect } from 'react';

import { Header, Footer, PhotoGallery } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

// 400x267    thumbnail
// 1700x1134  large

function Photography() {
  useEffect(() => {
    document.title = 'Photography - ' + siteTitle;
  });

  return (
    <Fragment>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <PhotoGallery />
      <Footer />
    </Fragment>
  );
}

export { Photography };
