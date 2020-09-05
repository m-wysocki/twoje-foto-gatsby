import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Image from "gatsby-image";

const CategoryTemplate = ({data}) => (
    <Layout>
      <h1>{data.strapiCategory.name}</h1>
      <ul>
        {data.strapiCategory.galleries.map(gallery => (
            <li key={gallery.id}>
              <h2>
                <Link to={`/Gallery_${gallery.id}`}>{gallery.name}</Link>
              </h2>
              <Image fixed={gallery.cover_image.childImageSharp.fixed} />
            </li>
        ))}
      </ul>
    </Layout>
)

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($id: String!) {
    strapiCategory(id: {eq: $id}) {
      id
      name
      galleries{
        id
        name
        cover_image {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`