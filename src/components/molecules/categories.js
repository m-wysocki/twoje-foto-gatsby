import React from 'react';
import styled from 'styled-components';
import { Heading } from '../atoms/heading';
import TlLink from '../atoms/tl-link';

const CategoriesBox = styled.div`
  margin-bottom: 6.25rem;
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 5px;
  ${({ theme }) => theme.mqxs} {
    padding: 1rem;
    margin-bottom: 3rem;
  }
`;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;
  ${({ theme }) => theme.mqxs} {
    grid-template-columns: repeat(2, auto);
  }
`;

const StyledLink = styled(TlLink)`
  color: ${({ theme }) => theme.colorTextDark};
  font-size: 1.2rem;
  display: inline-block;
  position: relative;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.mqxs} {
    font-size: 1rem;
  }

  &::before {
    content: '';
    height: 0.15rem;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.colorExtra};
    position: absolute;
    left: -2rem;
    top: calc(50% - 1px);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    ${({ theme }) => theme.mqxs} {
      width: 1rem;
      left: -1.5rem;
    }
  }
  &:hover,
  &.active {
    transform: translateX(2rem);
    ${({ theme }) => theme.mqxs} {
      transform: translateX(1.5rem);
    }
    &::before {
      transform: scaleX(1);
    }
  }
`;

const Categories = ({ categories, className }) => {
  return (
    <CategoriesBox>
      <Heading>Rodzaje zdjęć</Heading>
      <CategoriesWrapper>
        {categories.map(category => (
          <StyledLink to={`/${category.node.slug}`} key={category.node.id} className={className}>
            {category.node.name}
          </StyledLink>
        ))}
      </CategoriesWrapper>
    </CategoriesBox>
  );
};

export default Categories;
