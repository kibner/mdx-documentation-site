import React from "react"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Link from "../link"
import AppBar from "@mui/material/AppBar"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { useSiteMetadataHeaderQuery } from "../../static-queries/use-site-metadata-header-query"

const useStyles = makeStyles(theme => ({
  appBar: props => ({
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth
    },
    backgroundColor: theme.palette.background.paper
  }),
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    color: theme.palette.text.primary
  }
}))

const Header = props => {
  const { position, drawerWidth, handleDrawerToggle } = props
  const siteMetadata = useSiteMetadataHeaderQuery()
  const theme = useTheme()
  const classes = useStyles({ drawerWidth: drawerWidth })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppBar position={position} className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              size="large">
              <MenuIcon />
            </IconButton>
            <Typography variant={"h6"}>
              <Link to={"/"} className={classes.title}>
                {siteMetadata?.title || `Title`}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Header
