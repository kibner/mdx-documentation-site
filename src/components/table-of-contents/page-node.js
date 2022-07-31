import React, { Fragment } from "react"
import Entry from "./entry"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import TableOfContentsNode from "./table-of-contents-node"
import { styled } from "@mui/material/styles"

const StyledList = styled(List)(({ theme }) => ({}))

const StyledEntry = styled(Entry)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const PageNode = props => {
  const { node } = props
  const spacing = props.spacing ? props.spacing + 2 : 2
  const [open, setOpen] = React.useState(false)

  const hasTableOfContents = node?.table_of_contents?.items?.length > 0
  const hasChildren = node?.children?.length > 0
  const hasDescendents = hasTableOfContents || hasChildren

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Fragment>
      <StyledEntry
        entry={{ url: `/${node.slug}`, title: node.title }}
        expansionState={hasDescendents ? open : null}
        handleExpansionClick={hasDescendents ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasTableOfContents ? (
          <StyledList
            component="div"
            disablePadding
            dense
            sx={{
              paddingLeft: theme => theme.spacing(spacing),
            }}
          >
            {node.table_of_contents.items.map(tableOfContentsNode => (
              <TableOfContentsNode
                key={tableOfContentsNode.title}
                node={tableOfContentsNode}
                slug={node.slug}
              />
            ))}
          </StyledList>
        ) : (
          <Fragment />
        )}
        {hasChildren ? (
          <StyledList
            component="div"
            disablePadding
            dense
            sx={{
              paddingLeft: theme => theme.spacing(spacing),
            }}
          >
            {node.children.map(child => (
              <PageNode key={child.id} node={child} />
            ))}
          </StyledList>
        ) : (
          <Fragment />
        )}
      </Collapse>
    </Fragment>
  )
}

export default PageNode
