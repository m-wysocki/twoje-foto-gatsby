import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { GalleriesList } from '../components/molecules/galeries-list.styled';
import GalleryCard from '../components/atoms/gallery-card';
import ContentWrapper from '../components/organisms/content-wrapper';
import Categories from '../components/molecules/categories';
import { animateUpWithScroll } from '../utils/animateUpWithScroll';
import useSidebar from '../hooks/useSidebar';
import MainTemplate from '../templates/mainTemplate';

const GalleryPage = ({ data }) => {
  useSidebar({
    header: 'Galeria',
    date: false,
    paragraph:
      'Galeria dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni maiores odio similique veniam voluptatum.',
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
          {data.allStrapiGallery.edges.map(gallery => (
            <GalleryCard gallery={gallery.node} key={gallery.node.id} />
          ))}
        </GalleriesList>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default GalleryPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiGallery {
      edges {
        node {
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
