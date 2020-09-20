import React from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {Heading} from "./heading";

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-gap: 15px;
  margin-bottom: 100px;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
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

const Categories = ({categories}) => {
  return (
      <>
        <Heading>Rodzaje zdjęć:</Heading>
        <CategoriesWrapper>
            {categories.map(category => (
                  <StyledLink
                      to={`/${category.node.slug}`}
                      key={category.node.id}
                      activeClassName="active"
                  >
                    {category.node.name}
                  </StyledLink>
            ))}
        </CategoriesWrapper>
      </>
  );
};

export default Categories;
