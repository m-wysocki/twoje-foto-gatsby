import React from 'react';
import SEO from '../components/seo';
import { PageWrapperStyled } from '../components/styled/page-wrapper.styled';

const NotFoundPage = () => (
  <PageWrapperStyled>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageWrapperStyled>
);

export default NotFoundPage;
