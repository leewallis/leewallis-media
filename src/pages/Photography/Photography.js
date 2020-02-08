import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Header, Footer, PhotoGallery } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

ReactGA.initialize(GAID);
ReactGA.pageview(window.location.pathname + window.location.search);

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
