/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
