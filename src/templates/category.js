import React from 'react'
import {graphql} from 'gatsby';
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import Categories from "../components/categories";
import {GalleriesList} from "../components/galeries-list";
import GalleryCard from "../components/gallery-card";
import {PageWrapper} from "../components/page-wrapper";



const CategoryTemplate = ({data}) => {
  const sidebarInfo = {
    header: data.strapiCategory.name,
    date: false,
    paragraph: 'Przeglądaj zdjęcia z wybranej kategorii (może lepiej dać tu opisy wszystkich kategorii z osobna)',
  }

  return(
      <PageWrapper>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <Categories categories={data.allStrapiCategory.edges} />
          <GalleriesList>
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