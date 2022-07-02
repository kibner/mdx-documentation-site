import withStyles from '@mui/styles/withStyles';
import TableRow from "@mui/material/TableRow"
import React from "react"

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const MdxTableRow = props => <StyledTableRow {...props} />

export default MdxTableRow
