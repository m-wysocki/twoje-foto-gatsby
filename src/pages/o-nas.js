import React from 'react';
import Sidebar from "../components/sidebar";
import {ContentWrapper} from "../components/content-wrapper";

const AboutPage = () => {
  const sidebarInfo = {
    header: 'O nas',
    date: false,
    paragraph: 'Tutaj możesz prtzeczytać kilka słów o nas bla bla bla'
  }
  return (
      <>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quis?</p>
          </div>
        </ContentWrapper>
      </>
  )
}

export default AboutPage;
