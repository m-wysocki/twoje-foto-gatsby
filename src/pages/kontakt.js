import React from 'react';
import styled from 'styled-components';
import {MdPhoneAndroid} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import {PageWrapper} from "../components/page-wrapper";
import {Heading} from "../components/heading";
import {Paragraph} from "../components/paragraph";
import * as S from '../components/subpages-with-foto';
import {StyledLink} from "../components/styled-link";
import logo from '../assets/images/logo2.png';
import TlLink from "../components/tl-link";

const Contact = styled.div`
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  img{
    max-width: 200px;
  }
`;

const ContactLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: start;
  width: fit-content;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > svg{
    margin-right: 10px;
    color: ${({theme}) => theme.colorTextDark};
    margin-top: -8px;
  }
`;

const ContactLink = styled(StyledLink)`
  font-size: 1.1rem;
`;

const ContactAddress = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  
  svg{
  font-size: 1.2rem;
  color: ${({theme}) => theme.colorTextDark}; 
  }
`;

const AddressParagraph = styled.div`
  font-size: 1.1rem;
  color: ${({theme}) => theme.colorTextDark};
  font-weight: ${({theme}) => theme.fontMedium};
  margin-bottom: 5px;
`;

const ContactPage = () => {
  const sidebarInfo = {
    header: 'Kontakt',
    date: false,
    paragraph: 'Tutaj możesz zobaczyć jak się z nami najprościej skontaktować bla bla bla'
  }
  const img = "https://source.unsplash.com/800x800/?photo";
  return (
      <PageWrapper>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>

          <Heading>Skontaktuj się z nami:</Heading>
          <Contact>
            <ContactLinks>

              <ContactAddress>
                <AiOutlineHome/>
                <div>
                  <AddressParagraph>ul.Ogrodowa 15a/4</AddressParagraph>
                  <AddressParagraph>73-260 Pełczyce</AddressParagraph>
                </div>
              </ContactAddress>

              <ContactItem>
                <MdPhoneAndroid/>
                <ContactLink href="tel:+48796617351">796-617-351</ContactLink>
              </ContactItem>

              <ContactItem>
                <FaFacebookF/>
                <ContactLink href="https://www.facebook.com/twojefoto.net/">facebook.com/twojefoto.net</ContactLink>
              </ContactItem>


              <ContactItem>
                <FiMail/>
                <ContactLink href="mailto:kontakt@twojefoto.net">kontakt@twojefoto.net</ContactLink>
              </ContactItem>

              <ContactItem>
                <FaInstagram/>
                <ContactLink href="https://www.instagram.com/twoje_foto/">instagram.com/twoje_foto</ContactLink>
              </ContactItem>

            </ContactLinks>

            <LogoWrapper>
              <TlLink to="/">
                <img src={logo} alt="Twoje Foto"/>
              </TlLink>
            </LogoWrapper>

          </Contact>

          <S.Row>
            <S.Content>
              <Heading>Jak działamy?</Heading>
              <Paragraph>
                Nagłówek trzeba jakiś ładniejszy wymyślić.
                Tutaj trzeba napisać kilka zdań o tym jak wygląda cały proces od strony klienta.
              </Paragraph>
              <Paragraph>
                Zadzwoń lub napisz do nas, ustalimy dogodny termin i dogadamy szczegóły.
                Sesje robimy w plenerze, w studiu i gdzie tam chcesz bla bla, dojeżdżamy, śmiejemy się he he.
              </Paragraph>
              <Paragraph>
                Po jakimś czasie dostajesz od nas tyle i tyle zdjęć w formie cyfrowej, tyle i tyle wywołanych,
                jak chcesz to zrobimy Ci książkę albo co tam sobie wymyślisz.
                Czas realizacji to mniej więcej tyle i tyle od sesji do otrzymania produktu.
              </Paragraph>
            </S.Content>

            <S.ImgWrapper>
              <img src={img} alt=""/>
            </S.ImgWrapper>
          </S.Row>

        </ContentWrapper>
      </PageWrapper>
  )
}

export default ContactPage;
