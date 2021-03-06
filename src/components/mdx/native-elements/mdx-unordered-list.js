import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import React from "react"

const StyledUnorderedList = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "fit-content",
    marginBottom: theme.spacing(2),
    "&>li.MuiListItem-root": {
      "&>div.MuiListItemText-root": {
        "&>span.MuiListItemText-primary": {
          "&>.MuiList-root": {
            paddingBottom: 0,
            marginBottom: 0,
            "&>li.MuiListItem-root:last-child": {
              paddingBottom: 0,
              "&>div.MuiListItemText-root": {
                marginBottom: 0,
              },
            },
          },
        },
      },
    },
  },
}))(List)

const MdxUnorderedList = props => <StyledUnorderedList dense {...props} />

export default MdxUnorderedList
