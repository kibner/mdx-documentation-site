import React, { Fragment } from "react"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import NavigationListItem from "./navigation-list-item"
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  nested: props => ({
    paddingLeft: theme.spacing(props.spacing)
  }),
  page: {
    color: theme.palette.text.primary
  }
}))

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
  const classes = useStyles({ spacing: spacing })
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
      <NavigationListItem
        className={classes.page}
        node={node}
        expansionState={hasChildren ? open : null}
        handleExpansionClick={hasChildren ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasChildren ? (
          <List component="div" disablePadding className={classes.nested}>
            {node.children.map(child => (
              <NavigationNode
                key={child.id}
                node={child}
                breadcrumbNodes={breadcrumbNodes}
              />
            ))}
          </List>
        ) : (
          <Fragment />
        )}
      </Collapse>
    </Fragment>
  )
}

export default NavigationNode
