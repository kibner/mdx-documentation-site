import Table from "@mui/material/Table"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledTable = styled(Table)(({ theme }) => ({}))

const MdxTable = props =>
  <StyledTable
    {...props}
  />

export default MdxTable
