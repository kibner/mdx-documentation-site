import React, { Fragment } from "react"
import List from "@mui/material/List"
import ListItemLink from "../../list-item-link"
import Divider from "@mui/material/Divider"
import ListSubheader from "@mui/material/ListSubheader"
import HomeIcon from "@mui/icons-material/Home"
import NavigationNode from "./navigation-node"
import { styled } from "@mui/material/styles"

const StyledListItemLink = styled(ListItemLink)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "auto",
  backgroundColor: theme.palette.background.secondary,
}))

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
}))

const NavigationDrawer = props => {
  const { navigationTree, breadcrumbNodes } = props

  return (
    <Fragment>
      <List>
        <StyledListItemLink primary={"Home"} to={"/"} icon={<HomeIcon />} />
      </List>
      <Divider />
      <StyledList
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <StyledListSubheader component="div" id="nested-list-subheader">
            Navigation
          </StyledListSubheader>
        }
      >
        {navigationTree.map(navigationNode => (
          <NavigationNode
            key={navigationNode.id}
            node={navigationNode}
            breadcrumbNodes={breadcrumbNodes}
          />
        ))}
      </StyledList>
    </Fragment>
  )
}

export default NavigationDrawer
