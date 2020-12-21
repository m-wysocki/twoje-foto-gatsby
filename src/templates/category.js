import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import MainTemplate from './mainTemplate';
import useSidebar from '../hooks/useSidebar';
import { animateUpWithScroll } from '../utils/animateUpWithScroll';
import ContentWrapper from '../components/organisms/content-wrapper';
import Categories from '../components/molecules/categories';
import { GalleriesList } from '../components/styled/galeries-list.styled';
import GalleryCard from '../components/atoms/gallery-card';

const CategoryTemplate = ({ data }) => {
  useSidebar({
    header: data.strapiCategory.name,
    date: false,
    paragraph:
      'Crucifix sriracha craft beer VHS, wolf lomo meggings truffaut tbh. Air plant mixtape kale chips, jianbing helvetica +1 hoodie',
  });

  const galleryListRef = useRef(null);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const elements = galleryListRef.current.children;
    const contentWrapper = contentWrapperRef.current;
    animateUpWithScroll(elements, contentWrapper);
  }, []);

  return (
    <MainTemplate>
      <ContentWrapper ref={contentWrapperRef}>
        <Categories categories={data.allStrapiCategory.edges} />
        <GalleriesList ref={galleryListRef}>
          {data.strapiCategory.galleries.map(gallery => (
            <GalleryCard gallery={gallery} key={gallery.id} />
          ))}
        </GalleriesList>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default CategoryTemplate;

export const query = graphql`
  query CategoryTemplate($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      id
      name
      galleries {
        id
        name
        slug
        cover_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiCategory(filter: { galleries: { elemMatch: { id: { gt: 0 } } } }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
