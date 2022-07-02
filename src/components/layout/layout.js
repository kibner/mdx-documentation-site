import React from "react"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import Footer from "./footer"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/navigation"
import MdxDivider from "../mdx/native-elements/mdx-divider"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 960
  }
}))

const Layout = props => {
  const theme = useTheme()
  const classes = useStyles()
  const { navigationTree, breadcrumbNodes, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header
            position={"fixed"}
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Navigation
            className={classes.drawer}
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            navigationTree={navigationTree}
            breadcrumbNodes={breadcrumbNodes}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
            <MdxDivider variant={"fullWidth"} />
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
