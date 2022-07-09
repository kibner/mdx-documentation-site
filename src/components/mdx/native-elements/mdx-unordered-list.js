import List from "@mui/material/List"
import React from "react"
import { Paper } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "fit-content",
  marginBottom: theme => theme.spacing(2)
}))

const StyledList = styled(List)(({ theme }) => ({
  "&>li.MuiListItem-root": {
    "&>div.MuiListItemText-root": {
      "&>span.MuiListItemText-primary": {
        "&>.MuiPaper-root": {
          marginBottom: 0,
          boxShadow: "none",
          "&>.MuiList-root": {
            paddingBottom: 0,
            marginBottom: 0,
            "&>li.MuiListItem-root:last-child": {
              paddingBottom: 0,
              "&>div.MuiListItemText-root": {
                marginBottom: 0
              }
            }
          }
        }
      }
    }
  }
}))

const MdxUnorderedList = props =>
  <StyledPaper>
    <StyledList
      {...props}
      component={"ul"}
      dense
    />
  </StyledPaper>

export default MdxUnorderedList
