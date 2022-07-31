import React from "react"
import { useContentImagesRelativePathQuery } from "../../../static-queries/use-content-images-relative-path-query"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles"

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "100%",
}))

const MdxImage = props => {
  const contentImages = useContentImagesRelativePathQuery()
  const image = contentImages.find(edge => edge.node.relativePath === props.src)

  if (!image?.node?.childImageSharp?.gatsbyImageData) {
    return <StyledImg {...props} />
  }

  return <GatsbyImage {...props} />
}

export default MdxImage
