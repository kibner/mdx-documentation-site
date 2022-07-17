import TableCell from "@mui/material/TableCell"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
  color: theme.palette.text.secondary,
  borderBottom: 0,
}))

const MdxTableHeaderCell = props => (
  <StyledTableHeaderCell align={props.align ?? "inherit"}>
    {props.children}
  </StyledTableHeaderCell>
)

export default MdxTableHeaderCell
