import TableBody from "@mui/material/TableBody"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTableBody = styled(TableBody)(({ theme }) => ({
  "& tr:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  }
}))

const MdxTableBody = props =>
  <StyledTableBody
    {...props}
  />

export default MdxTableBody
