import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Typography } from "@material-ui/core"
import { useFluidContentImagesQuery } from "../../../../static-queries/use-fluid-content-images-query"

const FluidContentImage = props => {
  const { fileName, alt } = props
  const contentImages = useFluidContentImagesQuery()

  const image = contentImages.find(edge => edge.node.relativePath === fileName)

  if (!image?.node?.childImageSharp?.gatsbyImageData) {
    return (
      <div>
        <Typography>Picture not found</Typography>
      </div>
    )
  }

  return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={alt} />
}

export default FluidContentImage
