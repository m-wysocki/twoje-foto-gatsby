import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import Image from "gatsby-image";

const CategoryTemplate = ({data}) => (
    <Layout>
      <h1>{data.strapiCategory.name}</h1>
      <ul>
        {data.strapiCategory.galleries.map(gallery => (
            <li key={gallery.id}>
              <h2>
                <Link to={`/galeria/${gallery.slug}`}>{gallery.name}</Link>
              </h2>
              <Image fixed={gallery.cover_image.localFile.childImageSharp.fixed} />
            </li>
        ))}
      </ul>
    </Layout>
)

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
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`