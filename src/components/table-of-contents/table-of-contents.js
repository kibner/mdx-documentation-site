import React, { Fragment } from "react"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import makeStyles from "@mui/styles/makeStyles"
import MdxDivider from "../mdx/native-elements/mdx-divider"
import PageNode from "./page-node"
import TableOfContentsNode from "./table-of-contents-node"

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: theme.palette.background.secondary,
    width: 240
  },
  subheader: {
    backgroundColor: theme.palette.background.secondary
  }
}))

const TableOfContents = props => {
  const classes = useStyles()
  const { currentNode } = props
  let hasTableOfContents = currentNode?.table_of_contents?.items?.length > 0
  let hasChildren = currentNode?.children?.length > 0

  return hasTableOfContents || hasChildren ? (
    <Fragment>
      <List
        component="nav"
        aria-labelledby="page-table-of-contents-subheader"
        className={classes.list}
        dense
        subheader={
          <ListSubheader
            component="div"
            id="page-table-of-contents-subheader"
            className={classes.subheader}
          >
            Table of Contents
          </ListSubheader>
        }
      >
        {hasTableOfContents
          ? currentNode.table_of_contents.items.map(tableOfContentsNode => (
            <TableOfContentsNode
              key={tableOfContentsNode.title}
              node={tableOfContentsNode}
              slug={currentNode.slug}
            />
          ))
          : currentNode.children.map(pageNode => (
            <PageNode key={pageNode.id} node={pageNode} />
          ))}
      </List>
      {hasTableOfContents ? <MdxDivider /> : <Fragment />}
    </Fragment>
  ) : (
    <Fragment />
  )
}

export default TableOfContents
