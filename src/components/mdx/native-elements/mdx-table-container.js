import withStyles from '@mui/styles/withStyles';
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import React from "react"
import Table from "@mui/material/Table"

const StyledTableContainer = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}))(TableContainer)

const MdxTableContainer = props => (
  <StyledTableContainer component={Paper}>
    <Table {...props} />
  </StyledTableContainer>
)

export default MdxTableContainer
