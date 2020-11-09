import styled, { css } from 'styled-components';

export const Sidebar = styled.div`
  width: 33%;
  background-color: ${({ theme }) => theme.colorMain};
  height: 100vh;
  position: relative;
  padding: 3.5rem;
  ${({ theme }) => theme.mqmd} {
    width: 100%;
    height: auto;
  }
  ${({ theme }) => theme.mqxs} {
    padding: 1.7rem 1.2rem;
  }
`;
export const Header = styled.div`
  color: #fff;
  font-size: 3.3rem;
  line-height: 1.1;
  ${({ theme }) => theme.mqmd} {
    font-size: 2.5rem;
  }
  ${({ theme }) => theme.mqxs} {
    font-size: 2rem;
  }
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colorTextLight};
  font-size: 0.8rem;
  margin-top: 1rem;
`;
export const FilmStrip = styled.div`
  width: 1rem;
  height: 100%;
  position: absolute;
  left: 1rem;
  top: 0;
  background-image: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );
  background-size: 1rem 2rem;
  background-repeat: repeat-y;

  ${({ theme }) => theme.mqxs} {
    background-size: 0.5rem 1rem;
    left: 0.5rem;
    width: 0.5rem;
  }

  ${({ right }) =>
    right &&
    css`
      right: 1rem;
      left: unset;
      ${({ theme }) => theme.mqxs} {
        right: 0.5rem;
        left: unset;
      }
    `}
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  ${({ theme }) => theme.mqmd} {
    margin-top: 2rem;
  }
`;

export const Logo = styled.img`
  max-width: 180px;
  margin-bottom: 2rem;
  width: 10vw;
  ${({ theme }) => theme.mqmd} {
    margin-bottom: 1rem;
    width: 110px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colorTextLight};
  line-height: 1.7;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  font-weight: ${({ theme }) => theme.fontLight};
  ${({ theme }) => theme.mqxs} {
    font-size: 1rem;
  }
`;

export const Socials = styled.div`
  position: absolute;
  bottom: 3.75rem;
  left: 3.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 7.5rem);
  ${({ theme }) => theme.mqmd} {
    display: none;
  }
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

export const Realization = styled.a`
  color: ${({ theme }) => theme.colorTextLight};
  font-size: 0.9rem;
  align-self: center;
  justify-self: flex-end;
  margin-left: auto;
  display: inline-block;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colorExtra};
  }
`;
