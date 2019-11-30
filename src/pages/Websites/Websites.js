import React, { Fragment, useEffect } from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import { Header, Footer, WebsiteListing } from '../../components';
import { HeaderContainer, WebsiteContainer, WebsiteH1 } from '../../styles';
import { siteTitle } from '../../SEO';
import website_archive from './WebsiteContent.json';

function Websites() {
  useEffect(() => {
    document.title = 'Websites Design and Development - ' + siteTitle;
  });

  const WebsiteArchive = website_archive.project.websites.list
    .map((list, index) => {
      return <WebsiteListing key={index} list={list} />
    });

  return (
    <Fragment>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <WebsiteContainer>
        <WebsiteH1>Website Portfolio</WebsiteH1>
        <Grid fluid>
          <Row>
            {WebsiteArchive}
          </Row>
        </Grid>
      </WebsiteContainer>
      <Footer />
    </Fragment>
  );
}

export { Websites };
