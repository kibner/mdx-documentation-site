import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles"

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "100%",
}))

const MdxImage = props => {
  const image = props.content_images_relative_path.edges.find(
    edge => edge.node.relativePath === props.src
  )

  if (!image?.node?.childImageSharp?.gatsbyImageData) {
    return <StyledImg {...props} />
  }

  return <GatsbyImage {...props} />
}

export default MdxImage
