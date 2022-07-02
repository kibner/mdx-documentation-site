import React from "react"
import Drawer from "@mui/material/Drawer"
import NavigationDrawer from "./navigation-drawer"
import { useTheme } from "@mui/material/styles"

import makeStyles from "@mui/styles/makeStyles"

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

  const classes = useStyles({ drawerWidth: drawerWidth })
  const theme = useTheme()

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <nav className={classes.drawer} aria-label="main site navigation">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        sx={{ display: { sm: "none", xs: "block" } }}
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
      <Drawer
        sx={{ display: { xs: "none", sm: "block" } }}
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
    </nav>
  )
}

export default Navigation
