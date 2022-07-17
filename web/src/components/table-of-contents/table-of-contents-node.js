import React, { Fragment } from "react"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import { styled } from "@mui/material/styles"
import Entry from "./entry"

const StyledList = styled(List)(({ theme }) => ({}))

const StyledEntry = styled(Entry)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

const TableOfContentsNode = props => {
  const { node, slug } = props
  const spacing = props.spacing ? props.spacing + 2 : 2
  const [open, setOpen] = React.useState(false)
  const hasChildren = node?.items?.length > 0

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Fragment>
      <StyledEntry
        entry={{ url: slug + node.url, title: node.title }}
        expansionState={hasChildren ? open : null}
        handleExpansionClick={hasChildren ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasChildren ? (
          <StyledList
            component="div"
            disablePadding
            dense
            sx={{
              paddingLeft: theme => theme.spacing(spacing),
            }}
          >
            {node.items.map(tableOfContentsNode => (
              <TableOfContentsNode
                key={tableOfContentsNode.title}
                node={tableOfContentsNode}
                slug={slug}
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

export default TableOfContentsNode
