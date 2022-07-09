import List from "@mui/material/List"
import React from "react"
import { Paper } from "@mui/material"

const MdxOrderedList = props =>
  <Paper elevation={0} sx={{
    width: "fit-content",
    marginBottom: theme => theme.spacing(2)
  }}>
    <List
      component={"ol"}
      dense
      sx={{
        listStyle: "decimal inside",
        "&>li.MuiListItem-root": {
          "&>div.MuiListItemText-root": {
            "&>span.MuiListItemText-primary": {
              display: "list-item",
              "&>.MuiPaper-root": {
                marginBottom: 0,
                boxShadow: 'none',
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
      }}
      {...props} />
  </Paper>


export default MdxOrderedList
