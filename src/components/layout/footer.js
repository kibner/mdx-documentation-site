import React from "react"
import { Typography } from "@mui/material"
import Link from "../link"
import { styled } from "@mui/material/styles"

const StyledFooter = styled("footer")(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecorationColor: "inherit",
}))

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant={"caption"}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <StyledLink to={"https://www.gatsbyjs.com"}>Gatsby</StyledLink>
      </Typography>
    </StyledFooter>
  )
}

export default Footer
