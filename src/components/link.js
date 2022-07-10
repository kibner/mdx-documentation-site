import React from "react";
import { Link as GatsbyLink } from "gatsby-theme-material-ui";
import Tooltip from "@mui/material/Tooltip";
import MuiLink from "@mui/material/Link";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
                children,
                to,
                href,
                activeClassName,
                activeStyle,
                partiallyActive,
                title,
                internalStyle,
                externalStyle,
                ...other
              }) => {
  // internal links start with / or #
  let url = to ?? href;
  const firstCharacter = url[0];
  const isInternal = firstCharacter === "/" || firstCharacter === "#";

  // Use Gatsby Link for internal links, and MUI Link for others
  const link = isInternal ? (
    <GatsbyLink
      to={url}
      activeClassName={activeClassName}
      activeStyle={activeStyle}
      partiallyActive={partiallyActive}
      sx={internalStyle}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <MuiLink
      href={url}
      target={other.target ?? "_blank"}
      rel={other.rel ?? "noopener noreferrer"}
      sx={externalStyle}
      {...other}
    >
      {children}
    </MuiLink>
  );

  // add a tooltip for the title if one exists
  if (title) {
    return <Tooltip title={title}>{link}</Tooltip>;
  } else {
    return link;
  }
};

export default Link;
