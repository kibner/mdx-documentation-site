import { graphql, useStaticQuery } from "gatsby"

export const useAllMDXMetadataQuery = () => {
  const { allMDXMetadata } = useStaticQuery(
    graphql`
      query AllMDXMetadata {
        allMDXMetadata: allMdx(sort: { fields: fields___slug }) {
          nodes {
            id
            tableOfContents
            fields {
              slug
            }
            frontmatter {
              title
              display_order
            }
          }
        }
      }
    `
  )

  return allMDXMetadata.edges
}
