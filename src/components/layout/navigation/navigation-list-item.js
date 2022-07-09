import React, { Fragment } from "react"
import ListItemLink from "../../list-item-link"
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: theme.palette.action.focus
  }
}))

// TODO: remove dependency on makeStyles
const NavigationListItem = props => {
  const classes = useStyles()
  const { node, className, expansionState, handleExpansionClick } = props

  return (
    <Fragment>
      <ListItemLink
        className={className}
        activeClassName={classes.activeLink}
        primary={node.title}
        to={node.slug}
        expansionState={expansionState}
        handleExpansionClick={handleExpansionClick}
      />
    </Fragment>
  )
}

export default NavigationListItem
