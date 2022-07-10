import React, { Fragment } from "react"
import { default as MaterialBreadcrumbs } from "@mui/material/Breadcrumbs"
import Link from "./link"
import Typography from "@mui/material/Typography"
import HomeIcon from "@mui/icons-material/Home"
import { styled } from "@mui/material/styles"

const StyledMaterialBreadcrumbs = styled(MaterialBreadcrumbs)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.secondary,
  textDecorationColor: "inherit"
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary
}))

const StyledHomeIcon = styled(HomeIcon)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  height: `calc(${theme.typography.body1.fontSize} * ${
    theme.typography.body1.lineHeight
  } - ${theme.spacing(0.5)})`,
  width: `calc(${theme.typography.body1.fontSize} * ${
    theme.typography.body1.lineHeight
  } - ${theme.spacing(0.5)})`
}))

const Breadcrumbs = props => {
  const { breadcrumbNodes } = props

  if (breadcrumbNodes) {
    return (
      <StyledMaterialBreadcrumbs aria-label={"breadcrumb"}>
        <StyledLink to="/">
          <StyledHomeIcon />
          Home
        </StyledLink>
        {breadcrumbNodes.map((node, index, array) => {
          if (index < array.length - 1) {
            return (
              <StyledLink
                key={node.id}
                to={node.slug}
              >
                {node.title}
              </StyledLink>
            )
          }
          return (
            <StyledTypography
              key={node.id}
            >
              {node.title}
            </StyledTypography>
          )
        })}
      </StyledMaterialBreadcrumbs>
    )
  } else {
    return <Fragment />
  }
}

export default Breadcrumbs
