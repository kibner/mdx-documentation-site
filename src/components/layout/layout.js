import React from "react"
import Footer from "./footer"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/navigation"
import MdxDivider from "../mdx/native-elements/mdx-divider"
import { styled } from "@mui/material/styles"

const drawerWidth = 240

const StyledRootDiv = styled("div")(({ theme }) => ({
  display: "flex"
}))

const StyledToolbarDiv = styled("div")(({ theme }) => ({
  toolbar: theme.mixins.toolbar
}))

const StyledMain = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 960
}))

const Layout = props => {
  const { navigationTree, breadcrumbNodes, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <StyledRootDiv>
      <Header
        position={"fixed"}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Navigation
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navigationTree={navigationTree}
        breadcrumbNodes={breadcrumbNodes}
      />
      <StyledMain>
        <StyledToolbarDiv />
        {children}
        <MdxDivider variant={"fullWidth"} />
        <Footer />
      </StyledMain>
    </StyledRootDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
