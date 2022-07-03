import withStyles from "@mui/styles/withStyles"
import List from "@mui/material/List"
import React from "react"

const StyledOrderedList = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    width: "fit-content",
    marginBottom: theme.spacing(2),
    listStyle: "decimal inside",
    "&>li.MuiListItem-root": {
      "&>div.MuiListItemText-root": {
        "&>span.MuiListItemText-primary": {
          display: "list-item",
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
}))(List)

const MdxOrderedList = props => (
  <StyledOrderedList component={"ol"} dense {...props} />
)

export default MdxOrderedList
