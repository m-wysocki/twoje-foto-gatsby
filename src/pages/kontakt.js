import React from 'react';
import Sidebar from "../components/sidebar";
import {ContentWrapper} from "../components/content-wrapper";

const ContactPage = () => {
  const sidebarInfo = {
    header: 'Kontakt',
    date: false,
    paragraph: 'Tutaj możesz zobaczyć jak się z nami najprościej skontaktować bla bla bla'
  }
  return (
      <>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <div>
            <p>consectetur adipisicing elit. Placeat, quis? Lorem ipsum dolor sit amet, </p>
          </div>
        </ContentWrapper>
      </>
  )
}

export default ContactPage;
