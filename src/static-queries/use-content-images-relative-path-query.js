import { graphql, useStaticQuery } from "gatsby"

export const useContentImagesRelativePathQuery = () => {
  const { contentImagesRelativePath } = useStaticQuery(
    graphql`
      query ContentImagesRelativePath {
        contentImagesRelativePath: allFile(
          filter: { sourceInstanceName: { eq: "content-images" } }
        ) {
          edges {
            node {
              relativePath
            }
          }
        }
      }
    `
  )
  return contentImagesRelativePath.edges
}
