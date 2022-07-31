import React from "react"
import { Link as GatsbyLink } from "gatsby-theme-material-ui"
import Tooltip from "@mui/material/Tooltip"
import MuiLink from "@mui/material/Link"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  href,
  activeClassName,
  partiallyActive,
  title,
  internalStyle,
  externalStyle,
  ...other
}) => {
  const url = to ?? href
  const isExternal = url.indexOf("://") > 0 || url.indexOf("//") === 0

  // Use Gatsby Link for internal links, and MUI Link for others
  const link = isExternal ? (
    <MuiLink
      href={url}
      target={other.target ?? "_blank"}
      rel={other.rel ?? "noopener noreferrer"}
      sx={externalStyle}
      {...other}
    >
      {children}
    </MuiLink>
  ) : (
    <GatsbyLink
      to={url}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      sx={internalStyle}
      {...other}
    >
      {children}
    </GatsbyLink>
  )

  // add a tooltip for the title if one exists
  if (title) {
    return <Tooltip title={title}>{link}</Tooltip>
  } else {
    return link
  }
}

export default Link
