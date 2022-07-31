import React from "react"
import ListItemLink from "../../list-item-link"

const NavigationListItem = props => {
  const { node, className, expansionState, handleExpansionClick } = props

  return (
    <ListItemLink
      className={className}
      activeClassName={"active"}
      primary={node.title}
      to={`/${node.slug}`}
      expansionState={expansionState}
      handleExpansionClick={handleExpansionClick}
      sx={{
        "&.active": {
          backgroundColor: theme => theme.palette.action.focus,
        },
      }}
    />
  )
}

export default NavigationListItem
