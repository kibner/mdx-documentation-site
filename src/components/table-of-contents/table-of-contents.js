import React, { Fragment } from "react"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import MdxDivider from "../mdx/native-elements/mdx-divider"
import PageNode from "./page-node"
import TableOfContentsNode from "./table-of-contents-node"

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    width: 240
  }
}))

const TableOfContents = props => {
  const theme = useTheme()
  const classes = useStyles()
  const { currentNode } = props
  let hasTableOfContents = currentNode?.table_of_contents?.items?.length > 0
  let hasChildren = currentNode?.children?.length > 0

  return hasTableOfContents || hasChildren ? (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <List
          component="nav"
          aria-labelledby="page-table-of-contents-subheader"
          className={classes.list}
          dense
          subheader={
            <ListSubheader component="div" id="page-table-of-contents-subheader">
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
      </ThemeProvider>
    </StyledEngineProvider>
  ) : (
    <Fragment />
  );
}

export default TableOfContents
