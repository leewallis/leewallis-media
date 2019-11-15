import React, { Fragment } from 'react';

import { Header, PhotoGallery } from '../../components';
import { HeaderContainer } from '../../styles';

function Photography() {
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
