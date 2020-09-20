import React from "react";
import {GalleriesList} from "../components/galeries-list";
import GalleryCard from "../components/gallery-card";
import Sidebar from "../components/sidebar";
import {ContentWrapper} from "../components/content-wrapper";
import Categories from "../components/categories";

const GalleryPage = ({data}) => {
  const sidebarInfo = {
    header: 'Galeria',
    date: false,
    paragraph: 'Galeria dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni maiores odio similique veniam voluptatum.',
  }
  return (
      <>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper>
          <Categories categories={data.allStrapiCategory.edges} />
          <GalleriesList>
            {data.allStrapiGallery.edges.map(gallery => (
                <GalleryCard gallery={gallery.node} key={gallery.node.id}/>
            ))}
          </GalleriesList>
        </ContentWrapper>
      </>

  )
};

export default GalleryPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiGallery{
            edges{
                node{
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
        }
        allStrapiCategory {
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