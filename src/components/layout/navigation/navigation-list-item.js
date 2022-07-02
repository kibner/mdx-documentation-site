import React from "react"
import ListItemLink from "../../list-item-link"
import { makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: theme.palette.action.focus
  }
}))

const NavigationListItem = props => {
  const theme = useTheme()
  const classes = useStyles()
  const { node, className, expansionState, handleExpansionClick } = props

  return (
    <ThemeProvider theme={theme}>
      <ListItemLink
        className={className}
        activeClassName={classes.activeLink}
        primary={node.title}
        to={node.slug}
        expansionState={expansionState}
        handleExpansionClick={handleExpansionClick}
      />
    </ThemeProvider>
  )
}

export default NavigationListItem
