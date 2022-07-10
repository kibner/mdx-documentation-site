import TableContainer from "@mui/material/TableContainer"
import React from "react"
import MdxTable from "./mdx-table"
import { Paper } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const MdxTableContainer = props => (
  <StyledTableContainer component={Paper}>
    <MdxTable {...props} />
  </StyledTableContainer>
)

export default MdxTableContainer
