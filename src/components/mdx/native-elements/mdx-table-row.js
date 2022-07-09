import TableRow from "@mui/material/TableRow"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTableRow = styled(TableRow)(({ theme }) => ({}))

const MdxTableRow = props =>
  <StyledTableRow
    {...props}
  />

export default MdxTableRow
