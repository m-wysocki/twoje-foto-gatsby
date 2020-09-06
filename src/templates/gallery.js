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
              <Link to={`/${category.slug}`}>{category.name}</Link>
            </li>
        ))}
      </ul>
      <Img fixed={data.strapiGallery.cover_image.localFile.childImageSharp.fixed}/>
      <p>{data.strapiGallery.description}</p>
      <hr/>
      {data.strapiGallery.images.map(img => (
          <div key={img.id}>
            <Img fixed={img.localFile.childImageSharp.fixed} />
          </div>
      ))}
    </Layout>
)

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
            fixed{
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      images {
        id
        localFile {
          childImageSharp {
            fixed{
              ...GatsbyImageSharpFixed
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