import React from "react"
import ListItemLink from "../../list-item-link"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

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
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
}

export default NavigationListItem
