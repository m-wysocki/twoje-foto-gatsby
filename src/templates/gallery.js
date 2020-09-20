import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import { SRLWrapper } from 'simple-react-lightbox';
import Sidebar from "../components/sidebar";
import {ContentWrapper} from "../components/content-wrapper";
import '../assets/styles/masonry.css';

const GalleryTemplate = ({data}) => {

  const sidebarInfo = {
    header: data.strapiGallery.name,
    date: data.strapiGallery.date,
    paragraph: data.strapiGallery.description,
  }

  const optionsLightbox = {
    settings: {
      disablePanzoom: true,
    },
    buttons: {
      showDownloadButton: false,
    }
  }

  const masonryItems = data.strapiGallery.images.map(img => (
      <a key={img.id} href={img.localFile.childImageSharp.original.src} data-attribute="SRL">
        <Img fluid={img.localFile.childImageSharp.fluid}/>
      </a>
  ));

  masonryItems.unshift(
      <a href={data.strapiGallery.cover_image.localFile.childImageSharp.original.src} data-attribute="SRL">
        <Img fluid={data.strapiGallery.cover_image.localFile.childImageSharp.fluid}/>
      </a>
  );

  return (
      <>
        {/*  {data.strapiGallery.categories.map(category => (*/}
        {/*      <li key={category.id}>*/}
        {/*        <Link to={`/${category.slug}`}>{category.name}</Link>*/}
        {/*      </li>*/}
        {/*  ))}*/}
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper gallery>
        <SRLWrapper options={optionsLightbox}>
          <Masonry
              breakpointCols={2}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
          >
            {masonryItems}
          </Masonry>
        </SRLWrapper>


        </ContentWrapper>
      </>
  )
}

export default GalleryTemplate

export const query = graphql`
  query GalleryTemplate($slug: String!) {
    strapiGallery(slug: {eq: $slug}) {
      name
      description
      date
      cover_image {
        localFile{
          childImageSharp {
            original{
              src
            }
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      images {
        id
        localFile {
          childImageSharp {
            original{
              src
            }
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      categories{
        id
        name
        slug
      }
    }
  }
`