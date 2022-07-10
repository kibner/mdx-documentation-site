import TableCell from "@mui/material/TableCell"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 0,
}))

const MdxTableDataCell = props => (
  <StyledTableCell align={props.align ?? "inherit"}>
    {props.children}
  </StyledTableCell>
)

export default MdxTableDataCell
