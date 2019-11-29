import React, { Fragment, useEffect } from 'react';

import { Header } from '../../components';
import { HeaderContainer } from '../../styles';
import { siteTitle } from '../../SEO';

function Websites() {
  useEffect(() => {
    document.title = 'Websites Design and Development - ' + siteTitle;
  });

  return (
    <Fragment>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      Lee
    </Fragment>
  );
}

export { Websites };
