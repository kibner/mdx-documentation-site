import { graphql, useStaticQuery } from "gatsby"

export const useAllMdxQuery = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query AllMdx {
        allMdx(sort: { fields: [slug] }) {
          edges {
            node {
              id
              frontmatter {
                title
                display_order
              }
              slug
              tableOfContents
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}
