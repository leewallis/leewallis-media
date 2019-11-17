import React, { Fragment, useEffect } from 'react';

import { Header, PhotoGallery } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

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
    </Fragment>
  );
}

export { Photography };
