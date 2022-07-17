import React, { Fragment } from "react"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import MdxDivider from "../mdx/native-elements/mdx-divider"
import PageNode from "./page-node"
import TableOfContentsNode from "./table-of-contents-node"
import { Paper } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 240,
}))

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: "inherit",
}))

const TableOfContents = props => {
  const { currentNode } = props
  let hasTableOfContents = currentNode?.table_of_contents?.items?.length > 0
  let hasChildren = currentNode?.children?.length > 0

  return hasTableOfContents || hasChildren ? (
    <Fragment>
      <StyledPaper>
        <List
          component="nav"
          aria-labelledby="page-table-of-contents-subheader"
          dense
          subheader={
            <StyledListSubheader
              component="div"
              id="page-table-of-contents-subheader"
            >
              Table of Contents
            </StyledListSubheader>
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
      </StyledPaper>
      {hasTableOfContents ? <MdxDivider /> : <Fragment />}
    </Fragment>
  ) : (
    <Fragment />
  )
}

export default TableOfContents
