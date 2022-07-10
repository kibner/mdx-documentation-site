import React, { Fragment } from "react"
import ListItemText from "@mui/material/ListItemText"
import Link from "./link"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import ListItemIcon from "@mui/material/ListItemIcon"
import { ListItemButton } from "@mui/material"

const ListItemLink = props => {
  const {
    primary,
    to,
    expansionState,
    handleExpansionClick,
    className,
    icon,
    activeClassName
  } = props

  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => <Link to={to} {...linkProps} />),
    [to]
  )

  return (
    <ListItemButton
      component={CustomLink}
      className={className}
      activeClassName={activeClassName}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : <Fragment />}
      <ListItemText primary={primary} />
      {expansionState === null || typeof expansionState === "undefined" ? (
        <Fragment />
      ) : expansionState ? (
        <ExpandLess onClick={handleExpansionClick} />
      ) : (
        <ExpandMore onClick={handleExpansionClick} />
      )}
    </ListItemButton>
  )
}

export default ListItemLink
