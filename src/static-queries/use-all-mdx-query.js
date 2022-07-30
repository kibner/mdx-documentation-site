import { graphql, useStaticQuery } from "gatsby"

export const useAllMdxQuery = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query AllMdx {
        allMdx(sort: { fields: slug }) {
          edges {
            node {
              id
              slug
              frontmatter {
                title
                display_order
              }
              tableOfContents
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}
