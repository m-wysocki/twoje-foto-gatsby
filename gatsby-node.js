/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      }),
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getGalleries = makeRequest(
    graphql,
    `
    {
      allStrapiGallery {
        edges {
          node {
            slug
          }
        }
      }
    }
    `,
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiGallery.edges.forEach(({ node }) => {
      createPage({
        path: `/galeria/${node.slug}`,
        component: path.resolve(`src/templates/gallery.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });

  const getCategories = makeRequest(
    graphql,
    `
    {
      allStrapiCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
    `,
  ).then(result => {
    // Create pages for each user.
    result.data.allStrapiCategory.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getGalleries, getCategories]);
};
