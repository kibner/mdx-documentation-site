import React from "react"
import Drawer from "@mui/material/Drawer"
import NavigationDrawer from "./navigation-drawer"
import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"

const StyledBox = styled(Box)(({ theme }) => ({}))

const StyledMobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.secondary,
  },
}))

const StyledDesktopDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.secondary,
  },
}))

const Navigation = props => {
  const {
    window,
    drawerWidth,
    handleDrawerToggle,
    mobileOpen,
    navigationTree,
    breadcrumbNodes,
  } = props

  const theme = useTheme()

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <StyledBox
      component={"nav"}
      aria-label="main site navigation"
      sx={{
        width: { sm: props.drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <StyledMobileDrawer
        container={container}
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        <NavigationDrawer
          navigationTree={navigationTree}
          breadcrumbNodes={breadcrumbNodes}
        />
      </StyledMobileDrawer>
      <StyledDesktopDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        <NavigationDrawer
          navigationTree={navigationTree}
          breadcrumbNodes={breadcrumbNodes}
        />
      </StyledDesktopDrawer>
    </StyledBox>
  )
}

export default Navigation
