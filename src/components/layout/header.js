import React from "react"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Link from "../link"
import AppBar from "@mui/material/AppBar"
import { useSiteMetadataHeaderQuery } from "../../static-queries/use-site-metadata-header-query"
import { styled } from "@mui/material/styles"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2)
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary
}))

const Header = props => {
  const { position, drawerWidth, handleDrawerToggle } = props
  const siteMetadata = useSiteMetadataHeaderQuery()

  return (
    <StyledAppBar
      position={position}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { sm: drawerWidth }
      }}
    >
      <Toolbar>
        <StyledIconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          size="large"
          sx={{
            display: { sm: "none" }
          }}
        >
          <MenuIcon />
        </StyledIconButton>
        <Typography variant={"h6"}>
          <StyledLink to={"/"}>
            {siteMetadata?.title || `Title`}
          </StyledLink>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
