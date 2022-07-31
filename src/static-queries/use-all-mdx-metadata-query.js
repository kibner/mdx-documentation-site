import { graphql, useStaticQuery } from "gatsby"

export const useAllMDXMetadataQuery = () => {
  const { allMDXMetadata } = useStaticQuery(
    graphql`
      query AllMDXMetadata {
        allMDXMetadata: allMdx(sort: { fields: slug }) {
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
  return allMDXMetadata.edges
}
