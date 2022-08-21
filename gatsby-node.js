const path = require(`path`)
const slug = require("slug")
const { getNode } = require("gatsby/dist/datastore")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug(getNode(node.parent).relativePath)}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/content-page.jsx`)

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        id: node.id,
      },
    })
  })
}
