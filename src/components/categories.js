import React from 'react';
import styled from "styled-components";
import {Heading} from "./heading";
import TlLink from "./tl-link";

const CategoriesBox = styled.div`
  margin-bottom: 100px;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 5px;
`;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-gap: 15px;
`;

const StyledLink = styled(TlLink)`
  color: ${({theme}) => theme.colorTextDark};
  font-size: 1.2rem;
  display: inline-block;
  position: relative;
  transform: translateX(0);
  transition: transform .3s ease-in-out;
  &::before{
    content: '';
    height: 2px;
    width: 20px;
    background-color: ${({theme}) => theme.colorExtra};
    position: absolute;
    left: -30px;
    top: calc(50% - 1px);
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  &:hover, &.active{
    transform: translateX(30px);
    &::before{
      transform: scaleX(1);
    }
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  width: auto;
  display: inline-block;
  z-index: 1;
  &::before{
    content: '';
    width: 100%;
    height: 40%;
    background-color: ${({theme}) => theme.colorExtra};
    z-index: -1;
    opacity: 0.4;
    position: absolute;
    bottom: 0;
  }
`;

const Categories = ({categories, className}) => {
  return (
      <CategoriesBox>
        <StyledHeading>Rodzaje zdjęć</StyledHeading>
        <CategoriesWrapper>
            {categories.map(category => (
                  <StyledLink
                      to={`/${category.node.slug}`}
                      key={category.node.id}
                      className={className}
                  >
                    {category.node.name}
                  </StyledLink>
            ))}
        </CategoriesWrapper>
      </CategoriesBox>
  );
};

export default Categories;
