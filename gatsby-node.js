const path = require(`path`);

const {createFilePath} = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.type === 'post'
    ) {
    const way = createFilePath({node, getNode, basePath: `content`});

    createNodeField({
      node,
      name: 'way',
      value: `post${way}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              way
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(
    ({node}) => {
      createPage({
        path: node.fields.way,
        component: path.resolve('./src/pages/post.jsx'),
        context: {
          way: node.fields.way,
        }
      })
    }
  )
}
