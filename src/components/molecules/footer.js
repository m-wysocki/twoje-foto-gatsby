import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const StyledFooter = styled.div`
  display: none;
  ${({ theme }) => theme.mqmd} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 3rem;
    background-color: ${({ theme }) => theme.colorMain};
    width: 100%;
    align-items: center;
  }
  ${({ theme }) => theme.mqxs} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Socials = styled.div`
  svg {
    width: auto;
    height: 2rem;
    fill: ${({ theme }) => theme.colorTextLight};
    margin-right: 10px;
    transition: fill 0.3s ease-in-out;
    &:hover {
      fill: ${({ theme }) => theme.colorExtra};
    }
  }
`;
const Copyright = styled.p`
  color: ${({ theme }) => theme.colorTextLight};
  grid-column: 2;
  text-align: center;
`;
const Realization = styled.a`
  grid-column: 3;
  color: ${({ theme }) => theme.colorTextLight};
  display: inline-block;
  transition: color 0.3s ease-in-out;
  text-align: right;
  ${({ theme }) => theme.mqxs} {
    text-align: center;
  }
  &:hover {
    color: ${({ theme }) => theme.colorExtra};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Socials>
        <a href="https://www.facebook.com/twojefoto.net/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/twoje_foto/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </Socials>
      <Copyright>copyright 2020 Twoje Foto</Copyright>
      <Realization
        href="mailto:mateusz.wysocki53@gmail.com"
        title="kliknij, aby wysłać wiadomość e-mail"
      >
        realizacja: M.Wysocki
      </Realization>
    </StyledFooter>
  );
};

export default Footer;
