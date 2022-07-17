import React, { Fragment } from "react"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import NavigationListItem from "./navigation-list-item"
import { styled } from "@mui/material/styles"

const StyledNavigationListItem = styled(NavigationListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const StyledList = styled(List)(({ theme }) => ({}))

const initialOpenState = (breadcrumbNodes, node) => {
  if (!breadcrumbNodes) return false

  const includes = breadcrumbNodes.findIndex(
    breadcrumb => breadcrumb.id === node.id
  )

  return includes !== -1
}

const NavigationNode = props => {
  const { node, breadcrumbNodes } = props
  const spacing = props.spacing ? props.spacing + 2 : 2
  const hasChildren = node?.children?.length > 0

  const [open, setOpen] = React.useState(
    initialOpenState(breadcrumbNodes, node)
  )

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Fragment>
      <StyledNavigationListItem
        node={node}
        expansionState={hasChildren ? open : null}
        handleExpansionClick={hasChildren ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasChildren ? (
          <StyledList
            component="div"
            disablePadding
            sx={{
              paddingLeft: theme => theme.spacing(spacing),
            }}
          >
            {node.children.map(child => (
              <NavigationNode
                key={child.id}
                node={child}
                breadcrumbNodes={breadcrumbNodes}
              />
            ))}
          </StyledList>
        ) : (
          <Fragment />
        )}
      </Collapse>
    </Fragment>
  )
}

export default NavigationNode
