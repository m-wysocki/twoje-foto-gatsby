import styled from 'styled-components';

export const GalleriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 6.25rem;
  margin-bottom: 3rem;
  ${({ theme }) => theme.mqxs} {
    grid-column-gap: 1rem;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr;
  }
`;
