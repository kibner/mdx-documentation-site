import TableHead from "@mui/material/TableHead"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTableHead = styled(TableHead)(({ theme }) => ({}))

const MdxTableHead = props =>
  <StyledTableHead
    {...props}
  />

export default MdxTableHead
