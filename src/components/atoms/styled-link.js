import styled from 'styled-components';

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colorTextDark};
  font-weight: ${({ theme }) => theme.fontMedium};
  position: relative;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease-in-out;
  &::before {
    content: '';
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colorTextLight};
    opacity: 0.2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colorMain};
    &::before {
      background-color: ${({ theme }) => theme.colorExtra};
      opacity: 1;
    }
  }
`;
