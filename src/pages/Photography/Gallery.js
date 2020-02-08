import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Header, Footer, GalleryShowing } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle, GAID } from '../../SEO';

ReactGA.initialize(GAID);
ReactGA.pageview(window.location.pathname + window.location.search);

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
