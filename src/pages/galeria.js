import React from "react";
import {Link} from "gatsby";
import Image from "gatsby-image";

const GalleryPage = ({data}) => (
    <div>
      <h1>Galeria</h1>
      <ul>
        {data.allStrapiGallery.edges.map(gallery => (
            <li key={gallery.node.id}>
              <h2>
                <Link to={`/galeria/${gallery.node.slug}`}>{gallery.node.name}</Link>
              </h2>
              <Image fixed={gallery.node.cover_image.localFile.childImageSharp.fixed} />
            </li>
        ))}
      </ul>
    </div>
);

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
                          fixed {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                }
            }
        }
    }
`;