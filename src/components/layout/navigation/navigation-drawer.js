import React from "react"
import List from "@mui/material/List"
import ListItemLink from "../../list-item-link"
import Divider from "@mui/material/Divider"
import ListSubheader from "@mui/material/ListSubheader"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import HomeIcon from "@mui/icons-material/Home"
import NavigationNode from "./navigation-node"

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary
  },
  navigation: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    backgroundColor: theme.palette.background.secondary
  }
}))

const NavigationDrawer = props => {
  const { navigationTree, breadcrumbNodes } = props
  const theme = useTheme()
  const classes = useStyles()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <List>
          <ListItemLink
            primary={"Home"}
            to={"/"}
            className={classes.link}
            icon={<HomeIcon />}
          />
        </List>
        <Divider />
        <List
          component="nav"
          className={classes.navigation}
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Navigation
            </ListSubheader>
          }
        >
          {navigationTree.map(navigationNode => (
            <NavigationNode
              key={navigationNode.id}
              node={navigationNode}
              breadcrumbNodes={breadcrumbNodes}
            />
          ))}
        </List>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default NavigationDrawer
