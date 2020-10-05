import React, {useEffect, useRef} from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import { SRLWrapper } from 'simple-react-lightbox';
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import '../assets/styles/masonry.css';
import {PageWrapper} from "../components/page-wrapper";
import gsap from "gsap";

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
      <a
          key={img.id}
          href={img.localFile.childImageSharp.original.src}
          className="masonryItem"
          data-attribute="SRL"
      >
        <Img fluid={img.localFile.childImageSharp.fluid}/>
      </a>
  ));

  masonryItems.unshift(
      <a
          key={data.strapiGallery.cover_image.id}
          href={data.strapiGallery.cover_image.localFile.childImageSharp.original.src}
          className="masonryItem"
          data-attribute="SRL"
      >
        <Img fluid={data.strapiGallery.cover_image.localFile.childImageSharp.fluid}/>
      </a>
  );


  const animateMe = () => {
    const elements = document.getElementsByClassName("masonryItem");
    const contentWrapper = document.getElementsByClassName("contentWrapper");
    gsap.set([...elements], {autoAlpha: 0});
    [...elements].forEach(el => {
      gsap.fromTo(el, {y: '+=100'}, {duration: 1, y: '-=100', autoAlpha: 1, scrollTrigger: {
          trigger: el,
          scroller: contentWrapper[0],
          start: 'top 100%',
        }});
    });
  }

  useEffect(() => {
    animateMe();
  },[]);

  return (
      <PageWrapper>
        {/*  {data.strapiGallery.categories.map(category => (*/}
        {/*      <li key={category.id}>*/}
        {/*        <Link to={`/${category.slug}`}>{category.name}</Link>*/}
        {/*      </li>*/}
        {/*  ))}*/}
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper pageType='gallery'>
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
      </PageWrapper>
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
        id
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