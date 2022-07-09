import ListItem from "@mui/material/ListItem"
import MdxListItemText from "./mdx-list-item-text"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledListItem = styled(ListItem)(({ theme }) => ({}))

const MdxListItem = props =>
  <StyledListItem>
    <MdxListItemText
      {...props}
    />
  </StyledListItem>

export default MdxListItem
