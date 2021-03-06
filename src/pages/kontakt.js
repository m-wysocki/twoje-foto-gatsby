import React from 'react';
import { MdPhoneAndroid } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import MainTemplate from '../templates/mainTemplate';
import useSidebar from '../hooks/useSidebar';
import TlLink from '../components/atoms/tl-link';
import ContentWrapper from '../components/organisms/content-wrapper';
import { Heading } from '../components/atoms/heading';
import { Paragraph } from '../components/atoms/paragraph';
import logo from '../assets/images/logo2.png';
import * as S from '../components/organisms/subpages-with-foto';
import * as SC from '../components/styled/contactpage.styled';

const ContactPage = () => {
  useSidebar({
    header: 'Kontakt',
    date: false,
    paragraph:
      'Tutaj możesz zobaczyć jak się z nami najprościej skontaktować. Tacos truffaut venmo, farm-to-table literally echo park',
  });

  const img = 'https://source.unsplash.com/800x800/?photo';

  return (
    <MainTemplate>
      <ContentWrapper>
        <Heading>Skontaktuj się z nami:</Heading>
        <SC.Contact>
          <SC.ContactLinks>
            <SC.ContactAddress>
              <AiOutlineHome />
              <div>
                <SC.AddressParagraph>ul.Ogrodowa 15a/4</SC.AddressParagraph>
                <SC.AddressParagraph>73-260 Pełczyce</SC.AddressParagraph>
              </div>
            </SC.ContactAddress>

            <SC.ContactItem>
              <MdPhoneAndroid />
              <SC.ContactLink href="tel:+48796617351">796-617-351</SC.ContactLink>
            </SC.ContactItem>

            <SC.ContactItem>
              <FaFacebookF />
              <SC.ContactLink href="https://www.facebook.com/twojefoto.net/">
                facebook.com/twojefoto.net
              </SC.ContactLink>
            </SC.ContactItem>

            <SC.ContactItem>
              <FiMail />
              <SC.ContactLink href="mailto:kontakt@twojefoto.net">
                kontakt@twojefoto.net
              </SC.ContactLink>
            </SC.ContactItem>

            <SC.ContactItem>
              <FaInstagram />
              <SC.ContactLink href="https://www.instagram.com/twoje_foto/">
                instagram.com/twoje_foto
              </SC.ContactLink>
            </SC.ContactItem>
          </SC.ContactLinks>

          <SC.LogoWrapper>
            <TlLink to="/">
              <img src={logo} alt="Twoje Foto" />
            </TlLink>
          </SC.LogoWrapper>
        </SC.Contact>

        <S.Row>
          <S.Content>
            <Heading>Jak działamy?</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, non. Lorem ipsum
              dolor sit amet.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis eius
              excepturi exercitationem facilis officia perferendis qui, repellat soluta
              voluptatibus.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias ducimus
              earum molestiae placeat quia quis, rerum sunt? Debitis eaque eligendi quasi qui
              ratione voluptatum. Lorem ipsum dolor sit amet.
            </Paragraph>
          </S.Content>

          <S.ImgWrapper>
            <img src={img} alt="" />
          </S.ImgWrapper>
        </S.Row>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default ContactPage;
