import React, { Fragment } from "react"
import makeStyles from '@mui/styles/makeStyles';
import Entry from "./entry"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"

const useStyles = makeStyles(theme => ({
  nested: props => ({
    paddingLeft: theme.spacing(props.spacing)
  }),
  heading: {
    color: theme.palette.text.secondary
  }
}))

const TableOfContentsNode = props => {
  const { node, slug } = props
  const spacing = props.spacing ? props.spacing + 2 : 2
  const classes = useStyles({ spacing: spacing })
  const [open, setOpen] = React.useState(false)
  const hasChildren = node?.items?.length > 0

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Fragment>
      <Entry
        className={classes.heading}
        entry={{ url: slug + node.url, title: node.title }}
        expansionState={hasChildren ? open : null}
        handleExpansionClick={hasChildren ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasChildren ? (
          <List component="div" disablePadding dense className={classes.nested}>
            {node.items.map(tableOfContentsNode => (
              <TableOfContentsNode
                key={tableOfContentsNode.title}
                node={tableOfContentsNode}
                slug={slug}
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

export default TableOfContentsNode
