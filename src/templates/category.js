import React, {useEffect, useRef} from 'react'
import {graphql} from 'gatsby';
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import Categories from "../components/categories";
import {GalleriesList} from "../components/galeries-list";
import GalleryCard from "../components/gallery-card";
import {PageWrapper} from "../components/page-wrapper";
import gsap from "gsap";



const CategoryTemplate = ({data}) => {
  const sidebarInfo = {
    header: data.strapiCategory.name,
    date: false,
    paragraph: 'Przeglądaj zdjęcia z wybranej kategorii (może lepiej dać tu opisy wszystkich kategorii z osobna)',
  }

  const galleryList = useRef(null);

  const animateMe = () => {
    const elements = galleryList.current.children;
    const contentWrapper = document.getElementsByClassName("contentWrapper");
    gsap.set([...elements], {autoAlpha: 0});
    [...elements].forEach(el => {
      gsap.fromTo(el, {y: '+=100'}, {duration: 1, y: '-=100', autoAlpha: 1, scrollTrigger: {
          trigger: el,
          scroller: contentWrapper[0],
          start: 'top 80%',
        }});
    });
  }

  useEffect(() => {
    animateMe();
  },[]);

  return(
      <PageWrapper>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <Categories categories={data.allStrapiCategory.edges} />
          <GalleriesList ref={galleryList}>
            {data.strapiCategory.galleries.map(gallery => (
                <GalleryCard gallery={gallery} key={gallery.id}/>
            ))}
          </GalleriesList>
        </ContentWrapper>
      </PageWrapper>
  )
}

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($slug: String!) {
    strapiCategory(slug: {eq: $slug}) {
      id
      name
      galleries{
        id
        name
        slug
        cover_image {
          localFile{
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiCategory(filter: {galleries: {elemMatch: {id: {gt: 0}}}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`