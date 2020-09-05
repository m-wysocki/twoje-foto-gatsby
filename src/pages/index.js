import React from "react";
import {Link} from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout"

const IndexPage = ({data}) => (
    <Layout>

        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
            {data.allStrapiGallery.edges.map(gallery => (
                <li key={gallery.node.id}>
                    <h2>
                        <Link to={`/${gallery.node.id}`}>{gallery.node.name}</Link>
                    </h2>
                    <Image fixed={gallery.node.cover_image.childImageSharp.fixed} />
                </li>
            ))}
        </ul>


        <Link to="/page-2/">Go to page 2</Link> <br/>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiGallery{
            edges{
                node{
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
    }
`;