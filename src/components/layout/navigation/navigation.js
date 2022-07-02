import React from "react"
import Hidden from "@mui/material/Hidden"
import Drawer from "@mui/material/Drawer"
import NavigationDrawer from "./navigation-drawer"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  drawer: props => ({
    [theme.breakpoints.up("sm")]: {
      width: props.drawerWidth,
      flexShrink: 0
    }
  }),
  drawerPaper: props => ({
    backgroundColor: theme.palette.background.secondary,
    width: props.drawerWidth
  })
}))

const Navigation = props => {
  const {
    window,
    drawerWidth,
    handleDrawerToggle,
    mobileOpen,
    navigationTree,
    breadcrumbNodes
  } = props

  const theme = useTheme()
  const classes = useStyles({ drawerWidth: drawerWidth })

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <nav className={classes.drawer} aria-label="main site navigation">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <NavigationDrawer
                navigationTree={navigationTree}
                breadcrumbNodes={breadcrumbNodes}
              />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <NavigationDrawer
                navigationTree={navigationTree}
                breadcrumbNodes={breadcrumbNodes}
              />
            </Drawer>
          </Hidden>
        </nav>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Navigation
