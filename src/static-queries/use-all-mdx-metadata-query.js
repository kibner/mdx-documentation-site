import { graphql, useStaticQuery } from "gatsby"

export const useAllMDXMetadataQuery = () => {
  const { allMDXMetadata } = useStaticQuery(
    graphql`
      query AllMDXMetadata {
        allMDXMetadata: allMdx(sort: { fields: fields___slug }) {
          nodes {
            id
            slug
            tableOfContents
            frontmatter {
              title
              display_order
            }
          }
        }
      }
    `
  )

  return allMDXMetadata.nodes
}
