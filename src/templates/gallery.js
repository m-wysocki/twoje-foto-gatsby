import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const GalleryTemplate = ({data}) => (
    <Layout>
      <h1>{data.strapiGallery.name}</h1>
      <p>{data.strapiGallery.date}</p>
      <ul>
        {data.strapiGallery.categories.map(category => (
            <li key={category.id}>
              <Link to={`/categories/Category_${category.id}`}>{category.name}</Link>
            </li>
        ))}
      </ul>
      <Img fixed={data.strapiGallery.cover_image.childImageSharp.fixed}/>
      <p>{data.strapiGallery.description}</p>
    </Layout>
)

export default GalleryTemplate

export const query = graphql`
  query GalleryTemplate($id: String!) {
    strapiGallery(id: {eq: $id}) {
      name
      description
      date
      cover_image {
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
      }
      categories{
        id
        name
      }
    }
  }
`