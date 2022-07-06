import withStyles from "@mui/styles/withStyles"
import TableBody from "@mui/material/TableBody"
import React from "react"

const StyledTableBody = withStyles(theme => ({
  root: {
    "& tr:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.quaternary
    },
    "& tr:nth-of-type(even)": {
      backgroundColor: theme.palette.background.tertiary
    }
  }
}))(TableBody)

const MdxTableBody = props => <StyledTableBody {...props} />

export default MdxTableBody
