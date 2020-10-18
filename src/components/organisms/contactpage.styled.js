import styled from 'styled-components';
import { StyledLink } from '../atoms/styled-link';

export const Contact = styled.div`
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  img {
    max-width: 200px;
  }
`;

export const ContactLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: start;
  width: fit-content;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colorTextDark};
    margin-top: -8px;
  }
`;

export const ContactLink = styled(StyledLink)`
  font-size: 1.1rem;
`;

export const ContactAddress = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colorTextDark};
  }
`;

export const AddressParagraph = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colorTextDark};
  font-weight: ${({ theme }) => theme.fontMedium};
  margin-bottom: 5px;
`;
