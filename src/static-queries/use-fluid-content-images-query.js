import { graphql, useStaticQuery } from "gatsby"

export const useFluidContentImagesQuery = () => {
  const { fluidContentImages } = useStaticQuery(
    graphql`
      query FluidContentImages {
        fluidContentImages: allFile(
          filter: { sourceInstanceName: { eq: "content-images" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 960
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `
  )
  return fluidContentImages.edges
}
