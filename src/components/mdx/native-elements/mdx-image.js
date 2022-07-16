import React from "react"
import { useFluidContentImagesQuery } from "../../../static-queries/use-fluid-content-images-query"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles"

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "100%",
}))

const MdxImage = props => {
  const contentImages = useFluidContentImagesQuery()
  const image = contentImages.find(edge => edge.node.relativePath === props.src)

  if (!image?.node?.childImageSharp?.gatsbyImageData) {
    return <StyledImg src={props.src} alt={props.alt} title={props.title} />
  }

  return (
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      alt={props.alt}
      title={props.title}
      as={"span"}
    />
  )
}

export default MdxImage
