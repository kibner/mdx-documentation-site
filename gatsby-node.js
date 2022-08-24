const path = require(`path`)
const slug = require("slug")
const { getNode } = require(`gatsby/dist/datastore`)

slug.charmap[`/`] = `/` // prevents discard of '/' character

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent)

    const relativePathWithoutExtension = parentNode.relativePath.slice(
      0,
      parentNode.relativePath.length - parentNode.ext.length
    )

    let sluggedPath = ""

    if (relativePathWithoutExtension !== `index`) {
      sluggedPath = slug(relativePathWithoutExtension)
    }

    createNodeField({
      node,
      name: `slug`,
      value: sluggedPath,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // give alias to slug for backwards-compatibility
  createTypes(`#graphql
    type Mdx implements Node {
      slug: String @proxy(from: "fields.slug")
    }
  `)
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
          slug
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
      path: `/${node.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        id: node.id,
      },
    })
  })
}
