import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-css';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import MainTemplate from './mainTemplate';
import useSidebar from '../hooks/useSidebar';
import { animateUpWithScroll } from '../utils/animateUpWithScroll';
import ContentWrapper from '../components/organisms/content-wrapper';
import '../assets/styles/masonry.css';

const GalleryTemplate = ({ data }) => {
  const optionsLightbox = {
    settings: {
      disablePanzoom: true,
    },
    buttons: {
      showDownloadButton: false,
    },
  };

  const masonryItems = data.strapiGallery.images.map(img => (
    <a
      key={img.id}
      href={img.localFile.childImageSharp.original.src}
      className="masonryItem"
      data-attribute="SRL"
    >
      <Img fluid={img.localFile.childImageSharp.fluid} />
    </a>
  ));

  masonryItems.unshift(
    <a
      key={data.strapiGallery.cover_image.id}
      href={data.strapiGallery.cover_image.localFile.childImageSharp.original.src}
      className="masonryItem"
      data-attribute="SRL"
    >
      <Img fluid={data.strapiGallery.cover_image.localFile.childImageSharp.fluid} />
    </a>,
  );

  const contentWrapperRef = useRef(null);

  useEffect(() => {
    animateUpWithScroll(document.getElementsByClassName('masonryItem'), contentWrapperRef.current);
  }, []);

  useSidebar({
    header: data.strapiGallery.name,
    date: data.strapiGallery.date,
    paragraph: data.strapiGallery.description,
  });

  return (
    <SimpleReactLightbox>
      <MainTemplate>
        <ContentWrapper ref={contentWrapperRef} pageType="gallery">
          <SRLWrapper options={optionsLightbox}>
            <Masonry
              breakpointCols={{ default: 2, 575: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {masonryItems}
            </Masonry>
          </SRLWrapper>
        </ContentWrapper>
      </MainTemplate>
    </SimpleReactLightbox>
  );
};

export default GalleryTemplate;

export const query = graphql`
  query GalleryTemplate($slug: String!) {
    strapiGallery(slug: { eq: $slug }) {
      name
      description
      date
      cover_image {
        id
        localFile {
          childImageSharp {
            original {
              src
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      images {
        id
        localFile {
          childImageSharp {
            original {
              src
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      categories {
        id
        name
        slug
      }
    }
  }
`;
