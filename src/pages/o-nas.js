import React from 'react';
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import {PageWrapper} from "../components/page-wrapper";

const AboutPage = () => {
  const sidebarInfo = {
    header: 'O nas',
    date: false,
    paragraph: 'Tutaj możesz prtzeczytać kilka słów o nas bla bla bla'
  }
  return (
      <PageWrapper>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quis?</p>
          </div>
        </ContentWrapper>
      </PageWrapper>
  )
}

export default AboutPage;
